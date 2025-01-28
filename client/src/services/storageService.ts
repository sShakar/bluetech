const TOKEN_KEY = 'TOKEN';

/**
 * @description get token form localStorage
 */
function getToken(): string | null {
	return localStorage.getItem(TOKEN_KEY);
}

/**
 * @description save token into localStorage
 * @param token
 */
function saveToken(token: string): void {
	localStorage.setItem(TOKEN_KEY, token);
}

/**
 * @description remove token form localStorage
 */
function destroyToken(): void {
	localStorage.removeItem(TOKEN_KEY);
}

/**
 * @description clear local and local storage
 */
function clear(): void {
	localStorage.clear();
}

export default {
	getToken,
	saveToken,
	destroyToken,
	clear
};
