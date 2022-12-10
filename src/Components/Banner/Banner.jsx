import React from "react";
import "./Banner.css";
import body_img from "../../img/body_img.jpg"

const Home = () => {
    return ( 
        <>
        <div className="home_container">
            <h2 className="title_body">Chez vous, partout et ailleurs</h2>
            <img className="body_img" src={body_img} alt="Bannière"></img>
        </div>
        </>
     );
}
 
export default Home;