import { useState, useEffect } from "react";

export const useFetch = ({ items, url }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isLoaded, setIsLoaded] = useState(false);
	let [getItems, setGetItems] = useState(items);
	const [totalItems, setTotalItems] = useState(5);
	let [totalPrice, setTotalPrice] = useState(899.23);

	// getItems
	const shoppingItems = async () => {
		const res = await fetch(url);
		const data = await res.json();
		if (data) {
			setIsLoaded(true);
			setIsLoading(false);
			getItems = data.slice(0, 5);
			setGetItems(getItems);
		}
	};
	useEffect(() => {
		shoppingItems();
	}, []);

	return {
		isLoading,
		isLoaded,
		totalItems,
		setTotalItems,
		totalPrice,
		setTotalPrice,
        setGetItems,
        getItems
	};
};

// https://fakestoreapi.com/products
