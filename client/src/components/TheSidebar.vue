<template>
	<q-drawer v-model="sidebarStore.sidebar" :mini="mini" side="left" show-if-above bordered>
		<q-scroll-area :class="`text-weight-regular`" style="height: 100%">
			<q-list class="text-black" padding>
				<div v-for="item in sidebarStore.sidebarItems" :key="item.id">
					<q-item
						v-if="!item.child && hasPermission(item.permission)"
						v-ripple
						:active="isActive(item.to)"
						active-class="bg-primary text-white text-bold"
						clickable
						:to="item.to"
					>
						<q-item-section avatar>
							<q-icon :name="isActive(item.to) ? item.activeIcon : item.icon" />
						</q-item-section>
						<q-item-section>
							<q-item-label>{{ item.title }}</q-item-label>
						</q-item-section>
					</q-item>

					<q-expansion-item
						v-if="item.child && hasPermission(item.permission)"
						:icon="isActive(item.to) ? item.activeIcon : item.icon"
						:label="item.title"
					>
						<div v-for="(child, index) in item.child" :key="index">
							<q-item
								v-if="hasPermission(child.permission)"
								:active="isActive(child.to)"
								:to="child.to"
								active-class="bg-primary text-white text-bold"
								clickable
							>
								<q-item-section v-if="child.icon && child.activeIcon" avatar>
									<q-icon :name="isActive(child.to) ? child.activeIcon : child.icon" />
								</q-item-section>
								<q-item-section>
									<q-item-label>{{ child.title }}</q-item-label>
								</q-item-section>
							</q-item>
						</div>
					</q-expansion-item>
				</div>
			</q-list>
		</q-scroll-area>

		<q-page-sticky :offset="[-18, -10]" class="gt-sm" position="top-right">
			<q-btn
				flat
				rounded
				dense
				class="side-btn bg-secondary"
				unelevated
				color="secondary"
				text-color="white"
				:icon="mini ? 'mdi-chevron-right-circle-outline' : 'mdi-chevron-left-circle-outline'"
				@click.stop="drawerClick"
			/>
		</q-page-sticky>
	</q-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import { useSidebarStore } from '@/stores/sidebarStore';

const route = useRoute();
const { hasPermission } = useAuthStore();
const sidebarStore = useSidebarStore();

function isActive(path = ''): boolean {
	return path === route.path;
}

const mini = ref(false);

function drawerClick() {
	mini.value = !mini.value;
}
</script>

<style scoped lang="scss">
.side-btn {
	border-radius: 50px;
}
</style>
