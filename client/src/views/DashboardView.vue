<template>
	<p>This is a dashboard page</p>
</template>

<script setup lang="ts">
import $api from '@/services/apiService.ts';
import { onMounted } from 'vue';

async function call() {
	try {
		const response: { message: string } = await $api.get('');

		console.log(response.message);
	} catch (error) {
		console.error('Error:', error);
	}
}

async function scrapeCart(url: string) {
	try {
		const data: any = await $api.post('scrape-cart', {
			cartUrl: url
		});

		if (data.success) {
			console.log('Scraped Cart Items:', data.cartItems);
		} else {
			console.error('Failed to scrape cart items:', data.message);
		}
	} catch (error) {
		console.error('Error:', error);
	}
}

onMounted(async () => {
	await scrapeCart(
		'http://api-shein.shein.com/h5/sharejump/appjump?link=lw6VA2sUZP6_b&localcountry=AE&url_from=GM74939701120'
	);

	await call();
});
</script>
