import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import About from "../Pages/About.js";
//import Reps from "../Pages/Representatives/Reps.js";
//import RepInfo from "../Pages/Representatives/RepInfo.js";
//import Senators from "../Pages/Senators/Senators.js";
//import SenatorInfo from "../Pages/Senators/SenatorInfo.js";
//import ErrorPage from "../Pages/ErrorPage.js";

import classes from "./NavBar.module.css";

const About = React.lazy(() => import('../Pages/About.js'));
const Reps = React.lazy(() => import('../Pages/Representatives/Reps.js'));
const RepInfo = React.lazy(() => import('../Pages/Representatives/RepInfo.js'));
const Senators = React.lazy(() => import('../Pages/Senators/Senators.js'));
const SenatorInfo = React.lazy(() => import('../Pages/Senators/SenatorInfo.js'));
const ErrorPage = React.lazy(() => import('../Pages/ErrorPage.js'));

function NavBar() {
	return (
		<div>
			<Suspense fallback={<p>Loading...</p>}>
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
				<Route path="/senators/:name" element={<SenatorInfo />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			</Suspense>
		</div>
	); 
}

export default NavBar;
