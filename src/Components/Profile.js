import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import classes from "./Profile.module.css";



function Profile (props) {//get representative stock transaction component

    
    return (
        <div>
            <div className={classes.Profile}>

                <img src={props.img}/>
                <h1>{props.name}</h1>
                <p>Age: {props.age}</p>
                <p>Party: {props.party}</p>
                <p>Job: {props.position}</p>
                <p>Time in office: {props.time}</p>
                <p>Salary: {props.salary}</p>
                <p>Net Worth: {props.networth}</p>
                {/* <button onClick={() => getData(props.name)}>View Transactions</button> */}
                {/* <button onClick={() => getData(props.name)}>View Transactions</button> */}
                {/* <a href='/representatives/{props.name}'>View Transactions</a> */}

               <Link to={`/representatives/${props.name}`}>View Transactions </Link>
            </div>

            {/* <table id="Transactions">
                <tr>
                    <th>Transaction Date</th>
                    <th>Ticker</th>
                    <th>Transaction Type</th>
                    <th>Amount</th>
                    <th>Asset Description</th>
                </tr>
            </table> */}
 
        </div>
    );
}
export default Profile;