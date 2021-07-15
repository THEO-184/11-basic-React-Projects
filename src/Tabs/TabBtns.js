import React, { useState } from "react";
import devInfo from "./array";
import { AboutDeveloper } from "./tab";
const Btns = () => {
	const [tommy, setIsTommy] = useState(true);
	const [bogDrop, setIsBogDrop] = useState(false);
	const [cuker, setIsCuker] = useState(false);
	const [persons, setPerson] = useState(devInfo);
	const handleChange = (e) => {
		const btnName = e.target.className;
		if (btnName === "bogDrop") {
			setIsBogDrop(true);
			setIsTommy(false);
			setIsCuker(false);
		} else if (btnName === "cuker") {
			setIsCuker(true);
			setIsTommy(false);
			setIsBogDrop(false);
		} else {
			setIsTommy(true);
			setIsCuker(false);
			setIsBogDrop(false);
		}

		// add border bottom
	};

	return (
		<>
			<button className="tommy" onClick={handleChange}>
				TOMMY
			</button>
			<button className="bogDrop" onClick={handleChange}>
				BOGDROP
			</button>
			<button className="cuker" onClick={handleChange}>
				CUKER
			</button>
			{cuker ? (
				<div>
					{persons.map((person) => {
						if (person.id === 3) {
							const { id } = person;
							return <AboutDeveloper key={id} {...person} />;
						}
					})}
				</div>
			) : bogDrop ? (
				<div>
					{persons.map((person) => {
						if (person.id === 2) {
							const { id } = person;
							return <AboutDeveloper key={id} {...person} />;
						}
					})}
				</div>
			) : (
				<div>
					{persons.map((person) => {
						if (person.id === 1) {
							const { id } = person;
							return <AboutDeveloper key={id} {...person} />;
						}
					})}
				</div>
			)}
		</>
	);
};

export default Btns;
