import { QueryClient, QueryClientProvider } from "react-query";
import QuoteArea from "./QuoteArea";

const queryClient = new QueryClient();

export default function App() {
	return (
		<div className="w-2/5">
			<QueryClientProvider client={queryClient} >
				<QuoteArea />
			</QueryClientProvider>
		</div>
	);
}
