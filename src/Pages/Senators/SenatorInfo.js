import React from 'react';
import { useParams, Link } from "react-router-dom";

import classes from "./SenatorInfo.module.css";

export default function RepInfo(props) {
    let { name } = useParams();
    const url = "https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json";

    async function getData(name) {//get data stock data from api
       
        const response = await fetch(url);
        const data = await response.json()
        console.log(data)
        
        //get matches to senator that is selected by name
        let matches = data.filter(sen => sen.senator == name);
        console.log(matches)
        console.log(typeof(matches))

        //sort the transaction_dates in order
        const sortedMatches = matches.sort(function (a,b) {
            //return a.transaction_date -b.transaction_date;
            return new Date(b.transaction_date) - new Date(a.transaction_date);
        }); console.log(sortedMatches)

        sortedMatches.forEach((match) => {//list matches of chosen rep to html
            let table = document.getElementById("Transactions");
            let row = table.insertRow(-1);//insert reverse order so newest is first 

            let cell1 = row.insertCell(0);
            cell1.innerHTML = `${match.transaction_date}`;
            let cell2 = row.insertCell(1);
            cell2.innerHTML = `${match.ticker}`;
            let cell3 = row.insertCell(2);
            cell3.innerHTML = `${match.type}`;
            let cell4 = row.insertCell(3);
            cell4.innerHTML = `${match.amount}`;
            let cell5 = row.insertCell(4);
            cell5.innerHTML = `${match.asset_description}`;

        });
    
    }

    getData(name);

    return (

        <div>
            {/* <h1>Senator transactions: { name }</h1> */}
            <Link to={'/senators'}>Back to senators</Link>
            <table id="Transactions">
                <tr>
                    <th>Transaction Date</th>
                    <th>Ticker</th>
                    <th>Transaction Type</th>
                    <th>Amount</th>
                    <th>Asset Description</th>
                </tr>
            </table>
        </div>
    )
}
