import { useQuery } from "react-query";
import fetchQuote from "./query";

export default function QuoteArea() {
	const { data, status } = useQuery("quote", fetchQuote, {staleTime: Infinity});

	if (status === "loading") {
		return (
			<figcaption className="w-full flex justify-center items-center">
				Loading quote...
			</figcaption>
		)
	}
	else if (status === "error") {
		return (
			<figcaption className="w-full flex justify-center items-center">
				Error loading quote.
			</figcaption>
		)
	}

	if (data!.author === "Gus Fring") data!.author = "Gustavo Fring";
	
	let imageName: string;
	if (data!.author === "Walter White Jr") imageName = "Jr";
	else {
		[imageName] = data!.author.split(" ");
	}
	const imageSrc = new URL(`./assets/${imageName}.webp`, import.meta.url).href;

	return (
		<figure className="grid grid-areas-layout grid-cols-layout grid-rows-layout gap-3 w-full">
			<img
				alt="Quote Author"
				className="grid-in-img"
				src={imageSrc}
			/>
			<blockquote className="grid-in-quote italic mt-2">
				{data!.quote}
			</blockquote>
			<figcaption className="grid-in-author text-accent flex items-end mb-2">{data?.author}</figcaption>
		</figure>
	);
}
