<template>
	<q-layout dir="ltr" class="row justify-center items-center" view="hHh lpR fFf">
		<q-page-container :class="`${themeClass} `">
			<div class="text-center">
				<!--				<img alt="lpr" src="@/assets/img/logo.png" height="300" />-->
			</div>
			<div style="min-width: 400px" class="q-my-xl">
				<router-view />
			</div>
		</q-page-container>
	</q-layout>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';

const { themeClass } = useTheme();
</script>
