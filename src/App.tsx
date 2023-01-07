import { QueryClient, QueryClientProvider } from "react-query";
import QuoteArea from "./QuoteArea";

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient} >
			<QuoteArea />
		</QueryClientProvider>
	);
}
