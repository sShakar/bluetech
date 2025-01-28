import { setCssVar, useQuasar } from 'quasar';
import { computed } from 'vue';
export function useTheme() {
	const $q = useQuasar();
	const themeClass = computed(() => ($q.dark.isActive ? 'bg-dark' : 'bg-light'));
	const themeClassShade = computed(() => ($q.dark.isActive ? 'bg-dark-shade' : 'bg-light-shade'));

	function toggleTheme() {
		localStorage.setItem('theme', $q.dark.isActive ? 'light' : 'dark');
		$q.dark.toggle();
		setTheme();
	}

	function setTheme() {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			setCssVar('info', '#c19655');
		} else {
			setCssVar('info', '#3D3B30');
		}
	}

	return { toggleTheme, setTheme, themeClass, themeClassShade };
}
