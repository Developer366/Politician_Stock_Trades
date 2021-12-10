import React from "react";
import { Link } from "react-router-dom";

import classes from "./Senator.module.css";

export default function Senator(props) {
	return (
		<div>
			<div className={classes.SenCard}>
				<img className={classes.SenImg} src={props.img} />
				<h1>{props.name}</h1>
				<p>Age: {props.age}</p>
				<p>Party: {props.party}</p>
				<p>Job: {props.position}</p>
				<p>Time in office: {props.time}</p>
				<p>Salary: {props.salary}</p>
				<p>Net Worth: {props.networth}</p>
				<Link to={`/senators/${props.name}`}>View Transactions</Link>

			</div>
		</div>
	);
}
