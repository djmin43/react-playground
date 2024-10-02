import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

const queryClient = new QueryClient();

function App() {
	const { sendMessage, readyState, lastMessage } = useReactQuerySubscription();

	const connectionStatus = {
		[ReadyState.CONNECTING]: "Connecting",
		[ReadyState.OPEN]: "Open",
		[ReadyState.CLOSING]: "Closing",
		[ReadyState.CLOSED]: "Closed",
		[ReadyState.UNINSTANTIATED]: "Uninstantiated",
	}[readyState];

	return (
		<>
			<QueryClientProvider client={queryClient}>
				{connectionStatus}
				{lastMessage?.data}
				<button onClick={() => sendMessage("hello world")} type="button">
					send message
				</button>
			</QueryClientProvider>
		</>
	);
}

const useReactQuerySubscription = () => {
	const { sendMessage, lastMessage, readyState, lastJsonMessage } =
		useWebSocket("wss://echo.websocket.org/");

	useEffect(() => {
		console.log("last message", lastMessage, lastJsonMessage);
	}, [lastMessage]);

	return {
		sendMessage,
		readyState,
		lastMessage,
		lastJsonMessage,
	};
};

export default App;
