import React, { useState, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useFetch } from "./useFetch";
console.clear();
// reducer function
let url = "https://fakestoreapi.com/products";

// END OF REDUCER

const items = [];

const cartContext = React.createContext();

// cart component
function Cart() {
	const {
		isLoading,
		isLoaded,
		totalItems,
		setTotalItems,
		totalPrice,
		getItems,
		setGetItems,
		setTotalPrice,
	} = useFetch({ items, url });
	// FUNCTIONS
	const handleIncrease = () => {
		setTotalItems(totalItems + 1);
	};

	const handleDecrease = (e) => {
		if (totalItems <= 0) {
			setTotalItems(0);
		} else {
			setTotalItems(totalItems - 1);
		}
	};

	// clear Cart
	const clearCart = () => {
		setGetItems([]);
		setTotalItems(0);
	};

	if (isLoading) {
		return (
			<main>
				<div className="loading-container">
					<h1>Loading.....</h1>
				</div>
			</main>
		);
	}
	if (isLoaded) {
		return (
			<cartContext.Provider
				value={{
					handleDecrease,
					handleIncrease,
					setTotalPrice,
					totalPrice,
					getItems,
					setGetItems,
					totalItems,
					setTotalItems,
				}}
			>
				<header>
					<div className="nav-container">
						<h1>UseReducer</h1>
						<div className="cart-container">
							<span className="cart-icon">
								<FaShoppingCart size="1.2rem" />
							</span>
							<span className="items-number">{totalItems}</span>
						</div>
					</div>
				</header>
				<main>
					<div className="shopping-container">
						{getItems.length > 0 ? (
							<h1>YOUR BAG</h1>
						) : (
							<h1>NO ITEMS IN CART</h1>
						)}
						<div>
							{getItems.map((item) => {
								const { id } = item;
								return <ItemContainer key={id} {...item} />;
							})}
						</div>
						<footer>
							{getItems.length > 0 && (
								<div>
									<hr />
									<div className="totalItems-container">
										<span>Total</span>
										<span>${totalPrice.toFixed(2)}</span>
									</div>
								</div>
							)}

							{getItems.length > 0 && (
								<button className="clear-cart" onClick={(e) => clearCart()}>
									clear cart
								</button>
							)}
						</footer>
					</div>
				</main>
			</cartContext.Provider>
		);
	}
}

// ITEM COMPONENT

const ItemContainer = ({ image, price, title, id }) => {
	const {
		handleDecrease,
		handleIncrease,
		setTotalPrice,
		totalPrice,
		getItems,
		setGetItems,
		totalItems,
		setTotalItems,
	} = useContext(cartContext);

	const [itemsNumber, setItemsNumber] = useState(1);
	// INCREASE ITEMS
	const getIncreaseItems = (e) => {
		setItemsNumber(itemsNumber + 1);
		handleIncrease();
		setTotalPrice(totalPrice + price);
	};

	// DECREASE ITEMS
	const getDecreaseItems = (e) => {
		if (itemsNumber <= 1) {
			setItemsNumber(1);
		} else {
			setItemsNumber(itemsNumber - 1);
			handleDecrease();
			setTotalPrice(totalPrice - price);
		}
	};

	// DELETE ITEMS
	const deleteItem = (id) => {
		let newItems = getItems.filter((item) => item.id !== id);
		setGetItems(newItems);
		setTotalItems(totalItems - 1);
	};

	return (
		<div className="item-container">
			<div className="item">
				<div className="img-container">
					<div className="img-box">
						<img src={image} alt="img" />
					</div>
					<div className="item-info">
						<span className="title">
							{title.length > 15 ? title.slice(0, 16) + "..." : title}
						</span>
						<span className="price">${price}</span>
						<button className="remove" onClick={(e) => deleteItem(id)}>
							remove
						</button>
					</div>
				</div>
				<div className="item-amount">
					<button onClick={() => getIncreaseItems()}>
						<MdKeyboardArrowUp color="#1f5970" size="1.5rem" />
					</button>
					<button>{itemsNumber}</button>
					<button onClick={(e) => getDecreaseItems()}>
						<MdKeyboardArrowDown color="#1f5970" size="1.5rem" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
