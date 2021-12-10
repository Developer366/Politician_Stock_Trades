import React from 'react'

import Senator from "../../Components/Senators/Senator.js";
import classes from "./Senators.module.css";

export default function Senators() {
    return (
        <div className={classes.gridContainer}>
             <Senator
				img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mark_Warner%2C_official_112th_Congress_Senate_portrait.jpg/330px-Mark_Warner%2C_official_112th_Congress_Senate_portrait.jpg"
				name="Mark R Warner"
				age="66"
				party="Democratic Party"
				position="United States Senator
                from Virginia"
				time="since 2009"
				salary="$193,400"
				networth="200 million"
			/>
            <Senator
				img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Official_Portrait_of_Senator_Rick_Scott_%28R-FL%29.jpg/330px-Official_Portrait_of_Senator_Rick_Scott_%28R-FL%29.jpg"
				name="Rick Scott"
				age="69"
				party="Republican Party"
				position="United States Senator
                from Florida"
				time="since 2019"
				salary="$174,400"
				networth="220 million"
			/>
            <Senator
				img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Dianne_Feinstein%2C_official_Senate_photo_2.jpg/330px-Dianne_Feinstein%2C_official_Senate_photo_2.jpg"
				name="Dianne Feinstein"
				age="88"
				party="Democratic Party"
				position="United States Senator from California"
				time="since 1992"
				salary="$193,400"
				networth="88 million"
			/>
            <Senator
				img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Richard_Blumenthal_Official_Portrait.jpg/330px-Richard_Blumenthal_Official_Portrait.jpg"
				name="Richard Blumenthal"
				age="81"
				party="Democratic Party"
				position="Speaker of the United States House of Representatives"
				time="since 2013"
				salary="$193,400"
				networth="82 million"
			/>
            <Senator
				img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Mitch_McConnell_portrait_2016.jpg/220px-Mitch_McConnell_portrait_2016.jpg"
				name="A. Mitchell Mcconnell, Jr."
				age="79"
				party="Republican Party"
				position="United States Senator from Kentucky"
				time="since 1985"
				salary="$193,400"
				networth="35 million"
			/>
        </div>
    )
}
