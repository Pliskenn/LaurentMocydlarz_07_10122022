import React from "react";  
import trueStar from "../../img/icons/redStar.png";
import falseStar from "../../img/icons/greyStar.png";


function Rating(props) {

    const rate = props.rating;
    console.log(rate);
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
        if (i < rate) {
            stars.push(<img src={trueStar} alt="Full star" key={i} />);
        } else {
            stars.push(<img src={falseStar} alt="Empty star" key={i} />);
        }
    }

    
    return (

        <div>
        
        {stars}
            
        </div>
    );
}
    export default Rating;

    