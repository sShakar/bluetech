/**
 * @description default validation rules
 */
export function useValidation() {
	const required = (val: unknown) => !!val;
	const passwordMinLength = (val: string) => val.length >= 8 || 'Password must be at least 8 characters';
	const confirm = (confirm: string, password: string) => confirm === password || 'Password does not match';

	return {
		required,
		passwordMinLength,
		confirm
	};
}
