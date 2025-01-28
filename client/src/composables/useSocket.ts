import { onMounted, onUnmounted } from 'vue';
import storageService from '@/services/storageService';

type SocketType = 'whitelist' | 'blacklist' | 'download-file';

export function useSocket() {
	const token = storageService.getToken();
	const socketURL = import.meta.env.VITE_DEFAULT_SOCKET_URL;

	const blacklistURL = `${socketURL}blacklist-alert?token=${token}`;
	const whitelistURL = `${socketURL}whitelist-alert?token=${token}`;
	const downloadFileURL = `${socketURL}download-file?token=${token}`;

	const blacklistSocket = new WebSocket(blacklistURL);
	const whitelistSocket = new WebSocket(whitelistURL);
	const downloadFileSocket = new WebSocket(downloadFileURL);

	function socketObserver(socket: WebSocket, type: SocketType) {
		socket.onopen = () => console.log(`${type} Socket Connected`);
		socket.onclose = () => console.log(`${type} Socket Disconnected`);
		socket.onerror = () => console.log(`${type} Socket Error Occurred`);
	}

	function socketReceiver(receiver: (this: WebSocket, message: MessageEvent) => void) {
		blacklistSocket.onmessage = receiver;
		whitelistSocket.onmessage = receiver;
		downloadFileSocket.onmessage = receiver;
	}

	onMounted(() => {
		socketObserver(whitelistSocket, 'whitelist');
		socketObserver(blacklistSocket, 'blacklist');
		socketObserver(downloadFileSocket, 'download-file');
	});

	onUnmounted(() => {
		blacklistSocket.close();
		whitelistSocket.close();
		downloadFileSocket.close();
	});

	return {
		blacklistReceiver: socketReceiver,
		whiteListReceiver: socketReceiver,
		downloadFileReceiver: socketReceiver
	};
}
