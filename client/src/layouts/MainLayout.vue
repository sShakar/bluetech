<template>
	<q-layout view="hHh LpR fFf">
		<the-header />
		<the-sidebar />

		<q-page-container :class="`${themeClassShade} full-height`" style="padding-bottom: 1px">
			<q-page padding :class="`rounded-borders q-ma-lg`">
				<router-view />
			</q-page>
		</q-page-container>
	</q-layout>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/TheHeader.vue';
import TheSidebar from '@/components/TheSidebar.vue';
import { useTheme } from '@/composables/useTheme';

const { themeClassShade } = useTheme();
</script>
