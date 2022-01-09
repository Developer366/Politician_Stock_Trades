import React from "react";
//rfc makes the boilerplate
import classes from "./About.module.css";

export default function About() {
	return (
		<div className={classes.About}>
			<h1>About Page</h1>
			<p>
				&emsp;This web site's purpose is to list the richest
				representatives and senators and show what stock transactions
				they are doing so that the user may be able to copy their
				trades. Due to the Stock Act 2012, politicians and their family
				members have to disclose their stock transactions within 45
				days. But it seems that politicians continue to have access to
				insider trading and therefore can get rich off the stock market.
				Nancy Pelosi is a well known example of insider trading, her
				husband does the stock trading for her, and she has been getting
				away with it for a while now.{" "}
			</p>
			<hr />
			<p className={classes.URL}>
				I get stock trade information from: <br />
				<a href="https://housestockwatcher.com/api">
					housestockwatcher.com/api
				</a>
				<br />
				<a href="https://senatestockwatcher.com/api">
					senatestockwatcher.com/api
				</a>
			</p>
			<hr />
			<p>
				&emsp;The Stop Trading on Congressional Knowledge Act, or "STOCK
				Act" for short, made it illegal for members of Congress to
				engage in insider trading. The act was passed in April 2012,
				during the presidency of Barack Obama. 291, enacted April 4,
				2012) is an Act of Congress designed to combat insider trading.
				It was signed into law by President Barack Obama on April 4,
				2012. The bill prohibits the use of non-public information for
				private profit, including insider trading by members of Congress
				and other government employees.
			</p>
		</div>
	);
}
