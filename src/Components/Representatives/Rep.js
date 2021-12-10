import { Link } from "react-router-dom";
import classes from "./Rep.module.css";

function Rep (props) {//Display Representative img and info

    return (
        <div>
            <div className={classes.RepCard}>

                <img className ={classes.RepImg} src={props.img}/>
                <h1>{props.name}</h1>
                <p>Age: {props.age}</p>
                <p>Party: {props.party}</p>
                <p>Job: {props.position}</p>
                <p>Time in office: {props.time}</p>
                <p>Salary: {props.salary}</p>
                <p>Net Worth: {props.networth}</p>

                <Link to={`/representatives/${props.name}`}>View Transactions</Link>
            </div>
        </div>
    );
}
export default Rep;