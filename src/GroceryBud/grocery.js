import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCode } from "@fortawesome/free-solid-svg-icons";

let editElement;

function Grocery() {
	const [item, setItem] = React.useState("");
	const [itemName, setItemName] = useState([]);
	const [editFlag, setEditFlag] = useState(false);
	// useRef
	const inputContainer = React.useRef(null);
	// useEffect
	React.useEffect(() => {
		inputContainer.current.focus();
	});
	// handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		if (item && !editFlag) {
			const aboutItem = { id: new Date().getTime().toString(), item };
			setItemName([...itemName, aboutItem]);
			setItem("");
		} else if (item && editFlag) {
			// editElement.innerHTML = item;
			for (let items of itemName) {
				if (items.item === editElement.textContent) {
					// items.textContent = item;
					items.item = item;
				}
			}
			setEditFlag(false);
			setItem("");
		}
	};

	// clear item
	const clearItem = (e) => {
		setItemName([]);
	};

	// deleteItem
	const deleteItem = (id) => {
		let newList = itemName.filter((item) => item.id !== id);
		setItemName(newList);
	};

	// editItem
	const editItem = (e) => {
		setEditFlag(!editFlag);
		editElement = e.currentTarget.parentElement.previousElementSibling;

		let item = editElement.textContent;
		setItem(item);
	};

	return (
		<>
			<section className="section-center">
				{/* form */}
				<form className="grocery-form" onSubmit={handleSubmit}>
					{/* {itemName.length === 0 ? <p className="alert-danger">alert</p> : ""} */}
					<h3>grocery bud</h3>
					<div className="form-control">
						<input
							type="text"
							id="grocery"
							ref={inputContainer}
							placeholder="e.g. eggs"
							value={item}
							onChange={(e) => setItem(e.target.value)}
						/>
						<button type="submit" className="submit-btn">
							{editFlag ? "Edit" : "Submit"}
						</button>
					</div>
				</form>
				{/* <!-- list --> */}

				<div className="grocery-list">
					{itemName.map((itemList) => {
						const { id, item } = itemList;
						return (
							<article className="grocery-item" key={id}>
								<p className="alert">{item}</p>
								<div className="btn-container">
									<button type="button" className="edit-btn" onClick={editItem}>
										<FontAwesomeIcon icon={faEdit} />
									</button>
									<button
										type="button"
										className="delete-btn"
										onClick={(e) => deleteItem(id)}
									>
										<FontAwesomeIcon icon={faCode} />
									</button>
								</div>
							</article>
						);
					})}
				</div>
				{/* <!-- button --> */}
				<button className="clear-btn" onClick={clearItem}>
					clear items
				</button>
			</section>
		</>
	);
}

export default Grocery;
