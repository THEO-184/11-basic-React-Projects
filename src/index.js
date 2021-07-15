import React from "react";
import ReactDom from "react-dom";
import App from "./app";

import "./cocktail/index.css";

const FinalProject = () => {
	return (
		<>
			<App />
		</>
	);
};

ReactDom.render(<FinalProject />, document.getElementById("root"));
