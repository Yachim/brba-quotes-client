export default function App() {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<figure className="grid grid-areas-layout grid-cols-layout grid-rows-layout gap-3">
				<img className="grid-in-img" src="https://picsum.photos/300/400" />
				<blockquote className="grid-in-quote">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin.
				</blockquote>
				<figcaption className="text-center grid-in-author">John Doe</figcaption>
			</figure>
		</div>
	);
}
