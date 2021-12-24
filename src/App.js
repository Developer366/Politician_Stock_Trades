import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar.js";
import Banner from "./Components/Banner.js";


function App() {
	return (
		<div>
			<Banner />
			<NavBar />
		</div>
	);
}

export default App;
