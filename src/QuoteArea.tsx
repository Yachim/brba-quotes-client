import { useQuery } from "react-query";
import fetchQuote from "./query";

export default function QuoteArea() {
	const { data, status } = useQuery("quote", fetchQuote, {staleTime: Infinity});

	if (status === "loading") {
		return (
			<main className="w-screen h-screen flex justify-center items-center">
				Loading quote...
			</main>
		)
	}
	else if (status === "error") {
		return (
			<main className="w-screen h-screen flex justify-center items-center">
				Error loading quote.
			</main>
		)
	}

	const [imageName] = data!.author.split(" ");
	const imageSrc = new URL(`./assets/${imageName}.webp`, import.meta.url).href;

	return (
		<main className="w-screen h-screen flex justify-center items-center">
			<figure className="grid grid-areas-layout grid-cols-layout grid-rows-layout gap-3 w-2/5">
				{/*Image*/}
				<img
					alt="Quote Author"
					className="grid-in-img"
					src={imageSrc}
				/>
				<blockquote className="grid-in-quote">
					{data!.quote}
				</blockquote>
				<figcaption className="text-center grid-in-author">{data?.author}</figcaption>
			</figure>
		</main>
	);
}
