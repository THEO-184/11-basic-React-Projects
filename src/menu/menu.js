import React, { useState, useEffect } from "react";
import menuArr from "./menuArr";

function Menu() {
	const [menu, setMenu] = useState(menuArr);
	const [isAll, setIsAll] = useState(true);
	const [isBreakfast, setIsBreakfast] = useState(false);
	const [isLunch, setIsLunch] = useState(false);
	const [isShakes, setIsShakes] = useState(false);

	const handleClick = (e) => {
		const type = e.target.className;
		if (type === "breakfast") {
			setIsBreakfast(true);
			setIsLunch(false);
			setIsShakes(false);
			setIsAll(false);
		} else if (type === "lunch") {
			setIsLunch(true);
			setIsBreakfast(false);
			setIsShakes(false);
			setIsAll(false);
		} else if (type === "shakes") {
			setIsShakes(true);
			setIsBreakfast(false);
			setIsLunch(false);
			setIsAll(false);
		} else {
			setIsAll(true);
			setIsBreakfast(false);
			setIsLunch(false);
			setIsShakes(false);
		}
	};
	// filter

	return (
		<>
			<div className="container">
				<div className="title-container">
					<h1>Our Menu</h1>
				</div>
				<div className="btn-container">
					<button className="All" onClick={handleClick}>
						All
					</button>
					<button className="breakfast" onClick={handleClick}>
						Breakfast
					</button>
					<button className="lunch" onClick={handleClick}>
						lunch
					</button>
					<button className="shakes" onClick={handleClick}>
						shakes
					</button>
				</div>

				<div>
					{isBreakfast ? (
						<div className="grid-container">
							{menu.map((menuList) => {
								const { id } = menuList;
								if (menuList.category === "breakfast") {
									return <MenuItem key={id} {...menuList} />;
								}
							})}
						</div>
					) : isLunch ? (
						<div className="grid-container">
							{menu.map((menuList) => {
								const { id } = menuList;
								if (menuList.category === "lunch") {
									return <MenuItem key={id} {...menuList} />;
								}
							})}
						</div>
					) : isShakes ? (
						<div className="grid-container">
							{menu.map((menuList) => {
								const { id } = menuList;
								if (menuList.category === "shakes") {
									return <MenuItem key={id} {...menuList} />;
								}
							})}
						</div>
					) : (
						<div className="grid-container">
							{menu.map((menuList) => {
								const { id } = menuList;
								return <MenuItem key={id} {...menuList} />;
							})}
						</div>
					)}
				</div>
			</div>
		</>
	);
}

const MenuItem = (props) => {
	const { id, title, price, desc, img } = props;

	return (
		<div className="item-container" key={id}>
			<div className="img-container">
				<img src={img} alt="" />
			</div>
			<div className="item-info">
				<p>
					<span className="itemName">{title}</span>
					<span className="price">${price}</span>
				</p>
				<p className="item-text">{desc}</p>
			</div>
		</div>
	);
};

export default Menu;
