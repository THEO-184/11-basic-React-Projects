import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";

function Navber() {
	const navContainer = React.useRef(null);

	React.useEffect(() => {
		navContainer.current.classList.add("fixed-nav");
	});

	return (
		<>
			<nav ref={navContainer}>
				<img
					src="https://react-projects-11-navbar.netlify.app/static/media/logo.2bb7da65.svg"
					alt=""
				/>
				<ul className="tabs-list">
					<li>Home</li>
					<li>About</li>
					<li>Project</li>
					<li>Contact</li>
					<li>Profilr</li>
				</ul>
				<ul className="icons-list">
					<li>
						<span>
							<FaFacebook
								size="1em"
								color="blackblue"
								className="social-icons"
							/>
						</span>
						<span>
							<FaTwitter
								size="1em"
								color="blackblue"
								className="social-icons"
							/>
						</span>
						<span>
							<FaGithub
								size="1em"
								color="blackblue"
								className="social-icons"
							></FaGithub>
						</span>
						<span>
							<FaLinkedin
								size="1em"
								color="blackblue"
								className="social-icons"
							/>
						</span>
					</li>
				</ul>
				<div>
					<span>
						<BiMenuAltRight color="blackblue" size="1em" />
					</span>
				</div>
			</nav>
		</>
	);
}

export default Navber;
