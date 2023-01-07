import axios from "axios";

const url = "https://api.breakingbadquotes.xyz/v1/quotes";

type Res = {author: string; quote: string};
export default async function fetchQuote(): Promise<Res> {
	const res = await axios.get(url);
	return res.data[0];
}
