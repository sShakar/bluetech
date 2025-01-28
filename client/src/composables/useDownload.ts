export function useDownload() {
	/**
	 * @param {string} link
	 * @description Download files and images from given link. Must add ```<a id="downloadLink" style="display: none" />``` to the template to have an anchor for triggering the download.
	 */
	function $download(link: string) {
		const downloadLink = document.getElementById('downloadLink');

		if (downloadLink) {
			downloadLink.setAttribute('href', link);
			downloadLink.setAttribute('download', 'image.png');
			downloadLink.click();
		}
	}

	return { $download };
}
