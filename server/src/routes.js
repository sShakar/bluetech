import express from 'express';
import puppeteer from 'puppeteer';

const router = express.Router();

router.get('/', (req, res, next) => {
	res.json({ message: 'Hello World!' });
});

router.post('/scrape-cart', async (req, res) => {
	const { cartUrl } = req.body;
	console.log(cartUrl);

	if (!cartUrl) {
		return res.status(400).json({ success: false, message: 'Invalid or missing Shein cart URL.' });
	}

	let browser;
	try {
		browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();

		await page.goto(cartUrl, { waitUntil: 'networkidle2' });

		await page.waitForSelector('.cart-goods', { timeout: 10000 });

		const cartItems = await page.evaluate(() => {
			const items = [];
			const elements = document.querySelectorAll('.cart-goods');
			elements.forEach(element => {
				const name = element.querySelector('.cart-goods__title')?.innerText || 'No Name';
				const price = element.querySelector('.cart-goods__price-now')?.innerText || 'No Price';
				const quantity = element.querySelector('.cart-goods__quantity-input')?.value || '0';
				items.push({ name, price, quantity });
			});
			return items;
		});

		await browser.close();

		res.json({ success: true, cartItems });
	} catch (error) {
		console.error('An error occurred:', error);

		if (browser) await browser.close();
		res.status(500).json({ success: false, message: 'Failed to scrape cart items.', error: error.message });
	}
});

export default router;
