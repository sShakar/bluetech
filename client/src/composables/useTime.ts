export function useTime() {
	function millisecondsToTime(milliseconds: number) {
		// Calculate hours, minutes, and seconds
		const hours = Math.floor(milliseconds / 3600000);
		const minutes = Math.floor((milliseconds % 3600000) / 60000);

		// Format the result as HH:mm:ss
		return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
	}

	function timeToMilliseconds(timeString: string) {
		const [hours, minutes] = timeString.split(':').map(Number);
		return hours * 3600000 + minutes * 60000;
	}

	function timeStringToSeconds(timeString: string): number {
		const [hours, minutes] = timeString.split(':').map(Number);
		return (hours * 60 + minutes) * 60;
	}

	function minutesToTimeString(minutesTotal: number): string {
		const hours = Math.floor(minutesTotal / 60);
		const minutes = minutesTotal % 60;

		const formattedHours = hours.toString().padStart(2, '0');
		const formattedMinutes = minutes.toString().padStart(2, '0');

		return `${formattedHours}:${formattedMinutes}`;
	}

	function secondsToTimeString(seconds: number): string {
		const minutesTotal = Math.floor(seconds / 60);

		const hours = Math.floor(minutesTotal / 60);
		const minutes = minutesTotal % 60;

		const formattedHours = hours.toString().padStart(2, '0');
		const formattedMinutes = minutes.toString().padStart(2, '0');

		return `${formattedHours}:${formattedMinutes}`;
	}

	function minutesToHours(totalMinutes: number) {
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;

		return { hours, minutes };
	}

	return {
		millisecondsToTime,
		timeToMilliseconds,
		timeStringToSeconds,
		secondsToTimeString,
		minutesToTimeString,
		minutesToHours
	};
}
