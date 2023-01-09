import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Details from "../../Components/Details/Details"
import Slideshow from "../../Components/Slideshow/Slideshow";
import Dropdown from "../../Components/Dropdown/Dropdown";

const AnnounceDetail = () => {

    const [announce, setAnnounce] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
  
    useEffect(() => {
      if (id) getAnnounce(id);
    }, [id]);
  
    const getAnnounce = async (id) => {
      const result = await axios("http://localhost:3000/data/logements.json");
      const item = result.data.find((element) => element.id === id);
      if (item === null || item === undefined) {
        navigate("/NotFound");
        return;
      }
      setAnnounce(item);
    };


    return ( 
        <>
        <Slideshow images={announce.pictures}/>
        <Details announce={announce}/>
        </>
     );
}
 
export default AnnounceDetail;


