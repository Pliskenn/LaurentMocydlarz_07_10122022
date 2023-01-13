import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Details.css";
import Dropdown from "../Dropdown/Dropdown";



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


    