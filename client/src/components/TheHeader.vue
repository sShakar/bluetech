<template>
	<q-header class="bg-light text-black" bordered>
		<q-toolbar>
			<q-btn icon="mdi-menu" dense flat round @click="sidebarStore.toggleSidebar" />
			<!--			<img alt="logo" src="@/assets/img/logo.png" width="40" />-->
			<q-toolbar-title class="q-gutter-md q-mr-md flex justify-end items-center">
				<!--				<q-btn class="q-mr-sm" dense flat icon="mdi-theme-light-dark" round @click="toggleTheme()" />-->

				<q-icon class="cursor-pointer" name="mdi-account-circle-outline" color="primary" size="30px" flat>
					<q-popup-proxy>
						<q-card style="min-width: 200px" flat>
							<q-card-section>
								<div class="text-bold text-subtitle1">Username</div>
								<div class="text-subtitle2">{{ authStore.user.name }}</div>
							</q-card-section>
							<q-separator inset />
							<q-card-actions align="center">
								<q-btn class="full-width" icon="mdi-logout-variant" label="Logout" dense flat @click="logout()" />
							</q-card-actions>
						</q-card>
					</q-popup-proxy>
				</q-icon>
			</q-toolbar-title>
		</q-toolbar>
	</q-header>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';
import logoutUser from '@/helpers/logoutUser';
import { useAuthStore } from '@/stores/authStore';
import { useSidebarStore } from '@/stores/sidebarStore';
import { useTheme } from '@/composables/useTheme';

const $q = useQuasar();
const authStore = useAuthStore();
const sidebarStore = useSidebarStore();
const { toggleTheme, setTheme } = useTheme();

function logout() {
	const unionBtnProps = {
		unelevated: true,
		dense: true
	};
	$q.dialog({
		title: 'Logout',
		message: 'Are you sure to logout?',
		ok: {
			...unionBtnProps,
			label: 'Logout',
			color: 'negative',
			icon: 'mdi-logout-variant',
			class: 'q-mx-xs'
		},
		cancel: {
			...unionBtnProps,
			label: 'Cancel',
			color: 'primary',
			flat: true
		},
		persistent: true
	})
		.onOk(() => {
			logoutUser();
		})
		.onCancel(() => {
			// console.lo	g('>>>> Cancel')
		});
}
</script>
