import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
	const navContainer = useRef(null);

	useEffect(() => {
		navContainer.current.style.zIndex = 3;
		navContainer.current.style.boxShadow = "0 5px 5px rgba(0,0,0,0.8)";
	}, []);

	return (
		<div className="nav-container" ref={navContainer}>
			<nav>
				<div className="logo-container">
					<h1 className="logo">
						The <span>Cocktail</span> DB
					</h1>
				</div>
				<ul className="nav-list">
					<li>
						<Link to="/" className="links">
							<h4>Home</h4>
						</Link>
					</li>
					<li>
						<Link to="/about" className="links">
							<h4>About</h4>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
