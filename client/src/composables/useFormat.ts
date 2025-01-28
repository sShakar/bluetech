export function useFormat() {
	function capitalizeFirstLetters(text: string) {
		return text
			.split(' ')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

	function capitalizeLetters(text: string) {
		return text.replace(/[a-z]+/g, match => {
			return match.toUpperCase();
		});
	}

	return {
		capitalizeFirstLetters,
		capitalizeLetters
	};
}
