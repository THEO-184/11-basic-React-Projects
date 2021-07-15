import React, { useState } from "react";
// import it in App.js

const PersonInfo = [
	{
		id: 1,
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
		name: "Bertie Yates",
		age: "29 years",
	},
	{
		id: 2,
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
		name: "Hester Hogan",
		age: "32 years",
	},
	{
		id: 3,
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
		name: "Larry Little",
		age: "36 years",
	},
	{
		id: 4,
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
		name: "Sean Walsh",
		age: "34 years",
	},
	{
		id: 5,
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
		name: "Lola Gardner",
		age: "29 years",
	},
];

let birthdayInfo = "5 birthdays today";

const Birthday = () => {
	const [persons, setPerson] = useState(PersonInfo);
	const [text, setText] = useState(birthdayInfo);

	const clearAll = () => {
		setText("0 birthdays today");
		setPerson([]);
	};
	return (
		<>
			<div className="card">
				<h3>{text}</h3>
				{persons.map((person) => {
					const { id } = person;
					return <Person key={id} {...person} />;
				})}
				<button className="clear-btn" onClick={() => clearAll()}>
					Clear All
				</button>
			</div>
		</>
	);
};

const Person = (props) => {
	const { img, name, age } = props;
	return (
		<div className="person-info">
			<img src={img} alt="img" />
			<div>
				<h4>{name}</h4>
				<span>{age}</span>
			</div>
		</div>
	);
};

export default Birthday;
