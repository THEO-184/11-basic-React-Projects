import React, { useState } from "react";
import LoremText from "./arr";

function Lorem() {
	const [loremTexts, setIsLoremTexts] = useState(LoremText);
	let [copyLoremTexts, setIsCopyLoremTexts] = useState([]);
	const [number, setIsNumber] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (number === 0 || number < 0 || isNaN(number)) {
			const randomNum = Math.floor(Math.random() * loremTexts.length);
			copyLoremTexts = [loremTexts[randomNum]];
			setIsCopyLoremTexts(copyLoremTexts);
			setIsNumber(0);
		} else {
			copyLoremTexts = loremTexts.slice(0, number);
			setIsCopyLoremTexts(copyLoremTexts);
			setIsNumber(0);
		}
	};
	return (
		<>
			<section className="section-center">
				<h3>tired of boring lorem ipsum?</h3>
				<form className="lorem-form" onSubmit={handleSubmit}>
					<label htmlFor="amount">paragraphs:</label>
					<input
						type="number"
						name="amount"
						id="amount"
						placeholder="5"
						value={number}
						onChange={(e) => setIsNumber(e.target.value)}
					/>
					<button type="submit" className="btn">
						generate
					</button>
				</form>

				<article className="lorem-text">
					{copyLoremTexts.map((text, index) => {
						return <p key={index}>{text}</p>;
					})}
				</article>
			</section>
		</>
	);
}

export default Lorem;
