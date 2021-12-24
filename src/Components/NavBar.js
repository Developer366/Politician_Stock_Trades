import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import About from "../Pages/About.js";
//import Reps from "../Pages/Representatives/Reps.js";
//import RepInfo from "../Pages/Representatives/RepInfo.js";
//import Senators from "../Pages/Senators/Senators.js";
//import SenatorInfo from "../Pages/Senators/SenatorInfo.js";
//import ErrorPage from "../Pages/ErrorPage.js";
//import RepsTransactionList from '../Pages/Representatives/RepsTransactionList';

import classes from "./NavBar.module.css";

const About = React.lazy(() => import("../Pages/About.js"));

const Reps = React.lazy(() => import("../Pages/Representatives/Reps.js"));
const RepInfo = React.lazy(() => import("../Pages/Representatives/RepInfo.js"));
const RepsTransactionList = React.lazy(() =>import("../Pages/Representatives/RepsTransactionList"));

const Senators = React.lazy(() => import("../Pages/Senators/Senators.js"));
const SenatorInfo = React.lazy(() =>import("../Pages/Senators/SenatorInfo.js"));
const SenatorTransactionList = React.lazy(() =>import("../Pages/Senators/SenatorTransactionList.js"));

const ErrorPage = React.lazy(() => import("../Pages/ErrorPage.js"));

function NavBar() {
	return (
		<div>
			<Suspense fallback={<p>Loading...</p>}>
				<nav className={classes.NavBar}>
					<Link to="/" className={classes.Link}>
						About
					</Link>
					<Link to="/representatives" className={classes.Link}>
						Representatives
					</Link>
					<Link to="/representatives/transactions" className={classes.Link}>
						All Rep Transactions
					</Link>
					<Link to="/senators" className={classes.Link}>
						Senators
					</Link>
					<Link to="/senators/transactions" className={classes.Link}>
						All Senate Transactions
					</Link>
				</nav>

				<Routes>
					<Route path="/" element={<About />} />

					<Route path="/representatives" element={<Reps />} />
					<Route path="/representatives/:name" element={<RepInfo />}/>
					<Route
						path="/representatives/transactions"
						element={<RepsTransactionList />}
					/>

					<Route path="/senators" element={<Senators />} />
					<Route path="/senators/:name" element={<SenatorInfo />} />
					<Route path="/senators/transactions" element={<SenatorTransactionList />} />

					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default NavBar;
