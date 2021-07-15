import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowAltCircleLeft,
	faArrowCircleLeft,
	faArrowCircleRight,
	faHome,
} from "@fortawesome/free-solid-svg-icons";
const reviewsArr = [
	{
		id: 1,
		name: "susan smith",
		job: "web developer",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: "anna johnson",
		job: "web designer",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
		text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
	},
	{
		id: 3,
		name: "peter jones",
		job: "intern",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
		text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
	},
	{
		id: 4,
		name: "bill anderson",
		job: "the boss",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
		text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
];

const Review = () => {
	const [persons, setPerson] = useState(reviewsArr);
	const [value, setValue] = useState(0);
	const person = reviewsArr[value];
	const lengthOfArr = persons.length - 1;
	const { name, job, text, img } = person;
	const randomNum = () => {
		return Math.floor(Math.random() * persons.length);
	};

	console.log(randomNum());
	return (
		<>
			<div className="container">
				<div className="title-container">
					<h1>Reviews app</h1>
				</div>
				<div className="review">
					<img src={img} alt="" />
					<h4>{name}</h4>
					<h2>{job}</h2>
					<p>{text}</p>
					<button className="btn">
						<span
							className="left-arrow"
							onClick={() => {
								value <= 0 ? setValue(lengthOfArr) : setValue(value - 1);
							}}
						>
							<FontAwesomeIcon
								icon={faArrowCircleLeft}
								style={{ fontSize: "1.5rem" }}
							/>
						</span>
						<span
							className="rigth-arrow"
							onClick={() => {
								value >= lengthOfArr ? setValue(0) : setValue(value + 1);
							}}
						>
							<FontAwesomeIcon
								icon={faArrowCircleRight}
								style={{ fontSize: "1.5rem" }}
							/>
						</span>
					</button>

					<div className="random-btn-div">
						<button
							className="random-btn"
							onClick={() => setValue(randomNum())}
						>
							Surprise me
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Review;
