import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Btns from "./TabBtns";

function Tab() {
	return (
		<>
			<div className="container">
				<div className="title-container">
					<h1>Tab project</h1>
				</div>
				<div className="tab-container">
					<Btns />
				</div>
			</div>
		</>
	);
}

export const AboutDeveloper = (props) => {
	const { id, job, name, date } = props;

	const { about } = props;
	// about.map((person) => console.log(person));
	const listItems = [];
	for (let item in about) {
		listItems.push(about[item]);
	}

	return (
		<div key={id} className="about-developer">
			<h1 className="job">{job}</h1>
			<h2 className="name">{name}</h2>
			<h3 className="duration">{date}</h3>
			<ul>
				{listItems.map((list, index) => {
					return (
						<li key={index}>
							<FontAwesomeIcon icon={faArrowRight} className="icons" />{" "}
							<span>{list}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Tab;
