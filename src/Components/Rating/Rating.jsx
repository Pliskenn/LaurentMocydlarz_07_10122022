import React from "react";
import trueStar from "../../img/icons/redStar.png";
import falseStar from "../../img/icons/greyStar.png";

function Rating(props) {
  const rate = props.rating;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      stars.push(<img className="star" src={trueStar} alt="Full star" key={i} />);
    } else {
      stars.push(<img className="star" src={falseStar} alt="Empty star" key={i} />);
    }
  }

  return <div>{stars}</div>;
}
export default Rating;
