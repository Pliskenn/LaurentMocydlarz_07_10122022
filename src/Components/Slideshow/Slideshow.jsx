import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
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
    {props.images?.length && <div>
      <button onClick={previous}>Précédente</button>
      <img className="slideImg" src={props.images[currentIndex]} alt="Slideshow" />
      <button onClick={next}>Suivante</button>
    </div>}
    </>
  );
}

export default Slideshow;
