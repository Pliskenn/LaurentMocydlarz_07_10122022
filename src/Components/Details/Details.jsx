import React from "react";
import "./Details.css";




function Details(props) {

    return (

        <div>
            <h2>{props.announce.title}</h2>
            
            <p>{props.announce.description}</p>
            <ul>
            {props.announce?.equipments?.map((equipment) => {
                return <li key={equipment.toString()}>{equipment}</li>
            })}
            </ul>
        </div>
    );
}
    export default Details;


    