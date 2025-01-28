import { useQuasar } from 'quasar';

/**
 * Print specific part of the view.
 */
export function usePrint() {
	const $q = useQuasar();

	function $print(id = 'printArea') {
		const contents = document.getElementById(id)?.innerHTML;
		const frameDirection = $q.lang.rtl ? 'rtl' : 'ltr';
		// Get all stylesheets HTML
		let stylesHtml = '';
		for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
			stylesHtml += node.outerHTML + '\n';
		}
		const parentNodeStyle = document.getElementById('app')?.classList;

		const printFrame = document.createElement('iframe');
		printFrame.name = 'printFrame';
		printFrame.style.position = 'absolute';
		printFrame.style.top = '-1000000px';
		document.body.appendChild(printFrame);
		const printDoc = printFrame.contentWindow;
		printDoc?.document.open();
		printDoc?.document.write(
			`<html dir='${frameDirection}'><head>${stylesHtml}</head><body class='${parentNodeStyle}'>${contents}</body></html>`
		);
		printDoc?.document.close();
		setTimeout(function () {
			// @ts-ignore
			window.frames.printFrame.focus();
			// @ts-ignore
			window.frames.printFrame.print();
			document.body.removeChild(printFrame);
		}, 500);
	}

	return { $print };
}
