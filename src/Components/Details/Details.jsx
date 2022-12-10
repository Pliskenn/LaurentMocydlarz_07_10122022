import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Details.css";



function Details() {

    const [announce, setAnnounce] = useState({})
    const { id } = useParams() 

    useEffect(() => {
        if ( id ) 
           getAnnounce(id)
    }, [ id ]);

    const getAnnounce = async (id) => {
        const result = await axios("http://localhost:3000/data/logements.json");
        const item = result.data.find(element => element.id === id)
        setAnnounce(item)
    };

    return (
        <div>
            <h2>{announce.title}</h2>
            <p>{announce.description}</p>
            <ul>
            {/* {announce.equipments.map((equipment) => {
                return <li key="{equipment}">{equipment}</li>
            })} */}
            </ul>

        </div>
    );
}
    export default Details;


    