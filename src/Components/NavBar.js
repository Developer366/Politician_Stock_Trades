import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../Pages/About.js";
import Reps from "../Pages/Reps.js";
import Senators from "../Pages/Senators.js";
import ErrorPage from "../Pages/ErrorPage.js";
import RepInfo from "../Pages/RepInfo.js";

import classes from "./NavBar.module.css";

function NavBar() {
	return (
		<div>
			<nav className={classes.NavBar}>
				<Link to="/" className={classes.Link}>About</Link>
				<Link to="/representatives" className={classes.Link}>Representatives</Link>
				<Link to="/senators" className={classes.Link}>Senators</Link>
			</nav>

			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/representatives" element={<Reps />} />
				<Route path="/representatives/:name" element={<RepInfo />} />
				<Route path="/senators" element={<Senators />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
    
}

export default NavBar;
