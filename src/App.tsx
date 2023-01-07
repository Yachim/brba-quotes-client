import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./Footer";
import QuoteArea from "./QuoteArea";

const queryClient = new QueryClient();

export default function App() {
	return (
		<div className="w-2/5 bg-panelBg shadow-xl">
			<QueryClientProvider client={queryClient} >
				<QuoteArea />
			</QueryClientProvider>
			<Footer/>
		</div>
	);
}
