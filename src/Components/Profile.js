import { useState, useEffect } from 'react';

import classes from "./Profile.module.css";

const url =
"https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json";

//template for a politician profile
//useEffect(( =>))
function Profile (props) {
    //const [isLoading, setIsLoading] = useState(false);

    async function getData(name) {
        //fetch api and save it as json
        const response = await fetch(url);
        const data = await response.json()
        console.log(data)
        //console.log(data[0].ticker)
        //get matches to representative Nancy Pelosi
        let matches = data.filter(rep => rep.representative == name);
        console.log(matches)
        console.log(typeof(matches))

        //sort the transaction_dates in order
        const sortedDates = matches.sort(function (a,b) {
            //return a.transaction_date -b.transaction_date;
            return new Date(b.transaction_date) - new Date(a.transaction_date);
        });

        console.log(sortedDates)

        matches.forEach((match) => {
            console.log(match.ticker)
            //create a element then add text to new element
            var para = document.createElement("P");//creates a paragraph element
            let text = `${match.transaction_date} | ${match.ticker} | ${match.amount} | ${match.asset_description} | ${match.type}`;
            //para.innerHTML+= match.ticker;
            //para.innerHTML+= match.amount;
            para.innerHTML= text;
            //para.innerHTML+= "ASSTITTIES ASS AND TITTIES"
            document.getElementById('trans').appendChild(para);
        });
        //document.getElementById('trans').innerText = matches[1].ticker;
        //return matches;
    }
// <button onClick={getData('Hon. Nancy Pelosi')}>View Transactions</button>
    return (
    <div>
        <div className={classes.Profile}>
            {/* <img className={classes.ProImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Official_photo_of_Speaker_Nancy_Pelosi_in_2019.jpg/330px-Official_photo_of_Speaker_Nancy_Pelosi_in_2019.jpg"
                alt=""/> */}
            <img src={props.img}/>
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Party: {props.party}</p>
            <p>Job: {props.position}</p>
            <p>Time in office: {props.time}</p>
            <p>Salary: {props.salary}</p>
            <p>Net Worth: {props.networth}</p>
            <button onClick={getData(props.name)}>View Transactions</button>
        </div>

        <div className={classes.Trades}>
            <h1>{props.name}</h1>
            <h2>(ticker, amount, transaction date) [transaction dates are ordered newest to oldest]</h2>
            <p id="trans"></p>
        </div>

    </div>
    );
}
export default Profile;