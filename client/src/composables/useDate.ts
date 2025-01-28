export function useDate() {
	const today = new Date();
	const tenHoursAgo = new Date(today.getTime() - 10 * 60 * 60 * 1000);

	// Create a new date object for one month ago
	const oneMonthAgo = new Date(today);
	oneMonthAgo.setMonth(today.getMonth() - 1);

	// Create a new date object for one month later
	const oneMonthLater = new Date(today);
	oneMonthLater.setMonth(today.getMonth() + 1);

	// Function to format a date as DD/MM/YYYY
	function formatDate(date: Date) {
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
		const year = date.getFullYear();
		return `${day}-${month}-${year}`;
	}

	function convertDateFormat(input: string) {
		const [year, month, day] = input.split('-');
		return [day, month, year].join('-');
	}

	function formatDateTime(dateTime: Date): string {
		const year = dateTime.getFullYear();
		const month = String(dateTime.getMonth() + 1).padStart(2, '0');
		const day = String(dateTime.getDate()).padStart(2, '0');
		const hours = String(dateTime.getHours()).padStart(2, '0');
		const minutes = String(dateTime.getMinutes()).padStart(2, '0');
		const seconds = String(dateTime.getSeconds()).padStart(2, '0');

		return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	}

	function formatISOToReadable(isoString: string) {
		const date = new Date(isoString);

		const year = date.getUTCFullYear();
		const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // +1 because months are 0-based
		const day = String(date.getUTCDate()).padStart(2, '0');

		const hours = String(date.getUTCHours()).padStart(2, '0');
		const minutes = String(date.getUTCMinutes()).padStart(2, '0');
		const seconds = String(date.getUTCSeconds()).padStart(2, '0');

		return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	}

	return {
		oneMonthAgo: formatDate(oneMonthAgo),
		oneMonthLater: formatDate(oneMonthLater),
		today: formatDate(today),
		convertDateFormat,
		currentFormatted: formatDateTime(today),
		tenHoursAgoFormatted: formatDateTime(tenHoursAgo),
		formatISOToReadable
	};
}
