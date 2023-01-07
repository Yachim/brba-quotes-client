import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
	return (
		<footer className="p-4 gap-4 w-full bg-footerBg flex flex-col justify-center items-center">
			<p className="flex gap-4">
				<p>
					<a 
						href="https://github.com/Yachim/brba-quotes-client"
						target="_blank"
						className="text-accent hover:opacity-[0.65] transition-opacity duration-300"
					>
						Project
					</a>
					<> by </>
					<a
						href="https://yachim.cz" 
						target="_blank"
						className="text-accent hover:opacity-[0.65] transition-opacity duration-300"
					>Jáchym&nbsp;Kohout</a>
				</p>
				<p className="flex gap-2">
					<a className="hover:text-accent transition-colors duration-300" href="https://github.com/Yachim" title="GitHub">
						<FontAwesomeIcon icon={faGithub} />
					</a>
					<a className="hover:text-accent transition-colors duration-300" href="https://www.linkedin.com/in/jachym-kohout/" title="LinkedIn">
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</p>
			</p>
			<p>
				<>Thanks to </>
				<a
					href="https://github.com/shevabam" 
					target="_blank"
					className="text-accent hover:opacity-[0.65] transition-opacity duration-300"
				>
					shevabam
				</a>
				<> for the </>
				<a
					href="https://github.com/shevabam/breaking-bad-quotes" 
					target="_blank"
					className="text-accent hover:opacity-[0.65] transition-opacity duration-300"
				>
					Breaking Bad quotes API
				</a>
			</p>
		</footer>
	);
}
