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

	if (data!.author === "Gus Fring") data!.author = "Gustavo Fring";
	
	let imageName: string;
	if (data!.author === "Walter White Jr") imageName = "Jr";
	else {
		[imageName] = data!.author.split(" ");
	}
	const imageSrc = new URL(`./assets/${imageName}.webp`, import.meta.url).href;

	return (
		<figure className="grid grid-areas-layout grid-cols-layout grid-rows-layout gap-3 w-full">
			{/*Image*/}
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
