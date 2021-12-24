import React from 'react';

import classes from "./SenatorInfo.module.css";

export default function RepsTransactionList() {

    //let { name } = useParams();
    const url = "https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json";

    async function getData() {//get data stock data from api
       
        let response = await fetch(url);
        let data = await response.json()
        console.log(data)
        
        //get matches to representative that is selected by name
        // let matches = data.filter(rep => rep.representative == name);
        //console.log(matches)
        //console.log(typeof(matches))

        //sort the transaction_dates in order
        const sortedMatches = data.sort(function (a,b) {
            //return a.transaction_date -b.transaction_date;
            return new Date(b.transaction_date) - new Date(a.transaction_date);
        }); console.log(sortedMatches)


        sortedMatches.forEach((match) => {//list matches of chosen rep to html
            let table = document.getElementById("Transactions");
            let row = table.insertRow(-1);//insert reverse order so newest is first 

            let cell1 = row.insertCell(0);
            cell1.innerHTML = `${match.transaction_date}`;

            let cell2 = row.insertCell(1);
            cell2.innerHTML = `${match.senator}`;

            let cell3 = row.insertCell(2);
            cell3.innerHTML = `${match.ticker}`;

            let cell4 = row.insertCell(3);
            cell4.innerHTML = `${match.type}`;

            let cell5 = row.insertCell(4);
            cell5.innerHTML = `${match.amount}`;

            let cell6 = row.insertCell(5);
            cell6.innerHTML = `${match.asset_description}`;
        });
    }

    getData();//get api data and insert data into table

    return (
        <div>
            <h1>Senator transactions: </h1>
            {/* <Link to={'/representatives'}>Back to represetnatives</Link> */}
            <table id="Transactions">
                <tr>
                    <th>Transaction Date</th>
                    <th>Senator</th>
                    <th>Ticker</th>
                    <th>Transaction Type</th>
                    <th>Amount</th>
                    <th>Asset Description</th>
                </tr>
            </table>
        </div>
    )
}
