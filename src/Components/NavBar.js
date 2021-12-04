import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../Pages/About.js";
import Reps from "../Pages/Reps.js";
import Senators from "../Pages/Senators.js";
import ErrorPage from "../Pages/ErrorPage.js";

import classes from "./NavBar.module.css";

function NavBar() {
	return (
		<div>
			<nav className={classes.NavBar}>
				<Link to="/">About</Link>
				<Link to="/representatives">Representatives</Link>
				<Link to="/senators">Senators</Link>
			</nav>

			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/representatives" element={<Reps />} />
				<Route path="/senators" element={<Senators />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
    
}

export default NavBar;
