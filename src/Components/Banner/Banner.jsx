import React from "react";
import "./Banner.css";
import body_img from "../../img/body_img.jpg"


function Home({title, bgimage}) {
    return ( 
        <>
        <div className="home_container">
            <h2 className="title_body">{title}</h2>
            <img className="body_img" src={bgimage?bgimage : body_img} alt="Bannière"></img>
        </div>
        </>
     );
}

export default Home;
