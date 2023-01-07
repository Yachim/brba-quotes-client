import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./Footer";
import QuoteArea from "./QuoteArea";

const queryClient = new QueryClient();

export default function App() {
	return (
		<div className="
			w-[70%] bg-panelBg shadow-xl
			md:w-[60%]
			lg:w-[50%]
			xl:w-2/5
		">
			<QueryClientProvider client={queryClient} >
				<QuoteArea />
			</QueryClientProvider>
			<Footer/>
		</div>
	);
}
