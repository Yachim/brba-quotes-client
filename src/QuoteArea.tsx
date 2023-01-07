import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "react-query";
import fetchQuote from "./query";

const profiles = {
	Badger: {
		profile: "https://breakingbad.fandom.com/wiki/Badger",
		photo: "https://breakingbad.fandom.com/wiki/Badger?file=Cast+bb+800x600+badger.jpg"
	},
	Gustavo: {
		profile: "https://breakingbad.fandom.com/wiki/Gustavo_Fring",
		photo: "https://breakingbad.fandom.com/wiki/Gustavo_Fring?file=BCS+S3+GusFringe.jpg"
	},
	Hank: {
		profile: "https://breakingbad.fandom.com/wiki/Hank_Schrader",
		photo: "https://breakingbad.fandom.com/wiki/Hank_Schrader?file=HankS5.jpg"
	},
	Jesse: {
		profile: "https://breakingbad.fandom.com/wiki/Jesse_Pinkman",
		photo: "https://breakingbad.fandom.com/wiki/Jesse_Pinkman?file=JesseS5.jpg"
	},
	Jr: {
		profile: "https://breakingbad.fandom.com/wiki/Walter_White_Jr.",
		photo: "https://breakingbad.fandom.com/wiki/Walter_White_Jr.?file=WaltJrS5.jpg"
	},
	Mike: {
		profile: "https://breakingbad.fandom.com/wiki/Mike_Ehrmantraut",
		photo: "https://breakingbad.fandom.com/wiki/Mike_Ehrmantraut?file=BCS+S6+Portrait+Mike.jpg"
	},
	Saul: {
		profile: "https://breakingbad.fandom.com/wiki/Jimmy_McGill",
		photo: "https://breakingbad.fandom.com/wiki/Jimmy_McGill?file=BCS+S6+Portrait+Jimmy.jpg"
	},
	Skyler: {
		profile: "https://breakingbad.fandom.com/wiki/Skyler_White",
		photo: "https://breakingbad.fandom.com/wiki/Skyler_White?file=Skyler+S5b.jpg"
	},
	The: {
		profile: "https://breakingbad.fandom.com/wiki/Fly",
		photo: "https://www.imdb.com/title/tt1615550/mediaviewer/rm994314496/?ref_=tt_ov_i"
	},
	Walter: {
		profile: "https://breakingbad.fandom.com/wiki/Walter_White",
		photo: "https://breakingbad.fandom.com/wiki/Walter_White?file=BB-S5B-Walt-590.jpg"
	}
}

export default function QuoteArea() {
	const { data, status, refetch, isRefetching } = useQuery("quote", fetchQuote, {staleTime: Infinity});

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

	const service = data!.author === "The fly" ? {
		name: "IMDb",
		link: "https://www.imdb.com/"
	} : {
		name: "Fandom",
		link: "https://breakingbad.fandom.com/wiki/Breaking_Bad_Wiki"
	};

	return (
		<figure className="
			grid w-full
			grid-areas-layoutMobile grid-cols-layoutMobile grid-rows-layoutMobile
			md:grid-areas-layout md:grid-cols-layout md:grid-rows-layout
		">
			<img
				alt="Quote Author"
				className="grid-in-img"
				src={imageSrc}
			/>
			<blockquote className="
				grid-in-quote italic p-3
			">
				<button onClick={() => refetch()} className="grid place-items-center hover:text-accent p-2 float-right ml-2">
					<FontAwesomeIcon className="aspect-square transition-colors duration-300" icon={faArrowsRotate} spin={isRefetching} />
				</button>
				{data!.quote}
			</blockquote>
			<figcaption className="grid-in-author flex items-end justify-between p-3 gap-4">
				<a href={profiles[imageName as keyof typeof profiles].profile} target="_blank" className="text-accent">{data?.author}</a>
				<p className="text-right">
					<a 
						href={profiles[imageName as keyof typeof profiles].photo}
						target="_blank"
						className="text-accent"
					>
						Photo
					</a>
					<> provided by </>
					<a 
						href={service.link}
						target="_blank"
						className="text-accent"
					>
						{service.name}
					</a>
				</p>
			</figcaption>
		</figure>
	);
}
