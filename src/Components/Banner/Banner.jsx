import React from "react";
import "./Banner.css";


function Banner({title, image}) {
    return ( 
        <>
        <div className="home_container">
            <h2 className="title_body">{title}</h2>
            <img className="body_img" src={image} alt="Bannière"></img>
        </div>
        </>
     );
}

export default Banner;
