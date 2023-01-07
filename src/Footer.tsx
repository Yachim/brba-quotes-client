import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
	return (
		<footer className="flex justify-center items-center p-4 gap-4 w-full bg-footerBg">
			<p>
				<a 
					href="https://github.com/Yachim/brba-quotes-client"
					target="_blank"
					className="text-accent underline hover:opacity-[0.65] transition-opacity duration-300"
				>Project</a> by <a
					href="https://yachim.cz" 
					target="_blank"
					className="text-accent underline hover:opacity-[0.65] transition-opacity duration-300"
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
		</footer>
	);
}
