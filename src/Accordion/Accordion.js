import React, { useState } from "react";
import messagesArr from "./accordionArr";
function Accordion() {
	const [messages, setMessages] = useState(messagesArr);
	const [showMessage, setShowMessage] = useState(true);
	console.log(messages);

	return (
		<>
			<div className="container">
				<div className="title-container">
					<h1>Questions And Answers About Login</h1>
				</div>
				{messages.map((message) => {
					const { title, question, id } = message;
					return (
						<>
							<div className="message-container" key={id}>
								<div className="message-header">
									<h3>{title}</h3>

									<button
										className="btn"
										onClick={() => setShowMessage(!showMessage)}
									>
										{showMessage ? "+" : "-"}
									</button>
								</div>
								<p className="message">{!showMessage && question}</p>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
}

export default Accordion;
