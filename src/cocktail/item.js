import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Item() {
	const [itemInfo, setItem] = useState([]);
	const { id } = useParams();

	async function getMealById(id) {
		const res = await fetch(
			"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id
		);
		const data = await res.json();
		const result = data.drinks;
        console.log(result);
		setItem(result);
	}

	useEffect(() => {
		getMealById(id);
	}, []);

	return (
		<>
			<div className="item-container">
				<div className="btn-container">
					<Link to="/" className="go-back">
						Go back
					</Link>
				</div>

				{itemInfo.map((item) => {
					const {
						strDrinkThumb,
						strAlcoholic,
						strCategory,
						strDrink,
						strGlass,
						strInstructions,
					} = item;
					return (
						<div className="item-info-container">
							<div className="item-img">
								<img src={strDrinkThumb} alt={strDrink} />
							</div>
							<div className="item-info">
								<div>
									<span>Name</span>
									<span>{strDrink}</span>
								</div>
								<div>
									<span>Category</span>
									<span>{strCategory}</span>
								</div>
								<div>
									<span>Glass</span>
									<span>{strGlass}</span>
								</div>
								<div>
									<span>Info</span>
									<span>{strAlcoholic}</span>
								</div>
								<div>
									<span>Instruction</span>
									<span>{strInstructions}</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
	
}

export default Item;
