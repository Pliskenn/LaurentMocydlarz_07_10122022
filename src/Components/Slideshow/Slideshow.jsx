import React, { useEffect, useState } from "react";
import leftArrow from "../../img/icons/leftArrow.png"
import rightArrow from "../../img/icons/rightArrow.png"

import "../Slideshow/Slideshow.css";

function Slideshow(props) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % props.images.length);
  };

  const previous = () => {
    setCurrentIndex((currentIndex - 1 + props.images.length) % props.images.length);
  };

  return (
    <>
    {props.images?.length && <div className="slideblock">
      <button className="arrow leftArrow" onClick={previous}><img src={leftArrow} alt="logo"></img></button>
      <img className="slideImg" src={props.images[currentIndex]} alt="Slideshow" />
      <button className="arrow rightArrow" onClick={next}><img src={rightArrow} alt="logo"></img></button>
    </div>}
    </>
  );
}

export default Slideshow;
