import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Test from "./Components/Test.js";
import NavBar from "./Components/NavBar.js";
import Banner from "./Components/Banner.js";

import About from "./Pages/About.js";
import Reps from "./Pages/Reps.js";
import Senators from "./Pages/Senators.js";
import ErrorPage from "./Pages/ErrorPage.js";

function App() {
	return (
		<div style={{ backgroundColor: "yellow" }}>
			<Banner />
			<NavBar />
		</div>
	);
}

export default App;
