import { QueryClient, QueryClientProvider } from "react-query";
import QuoteArea from "./QuoteArea";
//import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient} >
			<QuoteArea />
			{/*<ReactQueryDevtools/>*/}
		</QueryClientProvider>
	);
}
