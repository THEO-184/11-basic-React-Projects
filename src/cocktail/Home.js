import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

let items = [];
function Home() {
	const [getItems, setGetItems] = useState(items);
	const [isLoading, setIsLoading] = useState(true);
	const [isLoaded, setIsLoaded] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const itemsContainer = useRef(null);
	const fromsContainer = useRef(null);
	// www.thecocktaildb.com/api/json/v1/1/random.php

	// get RandomMeal

	async function getRandomMeal() {
		const res = await fetch(
			"https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
		);
		const data = await res.json();
		const randomMeal = data.drinks;

		if (randomMeal) {
			setGetItems(randomMeal);
			setIsLoaded(true);
			setIsLoading(false);
		}
	}

	// getMealsBySearch
	async function getMealsBySearch(Term) {
		const res = await fetch(
			"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + Term
		);
		const data = await res.json();
		const searchResults = data.drinks;
		setGetItems(searchResults);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		getMealsBySearch(searchTerm);
		setSearchTerm("");
	};

	useEffect(() => {
		getRandomMeal();
	}, []);

	if (isLoading) {
		return (
			<div className="items-container">
				<h1 className="Loading">Loading...</h1>
			</div>
		);
	}

	if (isLoaded) {
		return (
			<>
				<div className="form-container">
					<form className="form" onSubmit={handleSubmit} ref={fromsContainer}>
						<h4>search your favorite cocktail</h4>
						<input
							type="text"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</form>
				</div>
				<h1 className="title">Cocktails</h1>
				<div className="items-container" ref={itemsContainer}>
					{getItems.map((item) => {
						const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } =
							item;
						return (
							<div className="item" key={idDrink}>
								<img src={strDrinkThumb} alt={strDrink} />
								<div className="about-item">
									<h1>{strDrink}</h1>
									<h5>{strGlass}</h5>
									<span>{strAlcoholic}</span>
									<Link to={`/item/${idDrink}`} className="btn">
										Details
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</>
		);
	}
}

export default Home;
