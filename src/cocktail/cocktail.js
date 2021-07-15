import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./Home";
import About from "./about";
import Item from "./item";

function Cocktail() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/item/:id" children={<Item />}></Route>
			</Switch>
		</Router>
	);
}

export default Cocktail;
