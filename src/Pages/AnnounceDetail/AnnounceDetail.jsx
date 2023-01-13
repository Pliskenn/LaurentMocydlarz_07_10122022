import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../AnnounceDetail/AnnounceDetail.css";
import axios from "axios";
import Slideshow from "../../Components/Slideshow/Slideshow";
import Dropdown from "../../Components/Dropdown/Dropdown";
import Rating from "../../Components/Rating/Rating";

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
      {/* Slideshow */}
      <div className="slideshow">
        <Slideshow images={announce.pictures} />
      </div>
      {/* Bloc informations */}
      <div>
        <div className="informations">
          {/* Bloc titre + localisation */}
          <div>
            <div>{announce.title}</div>
            <div>{announce.location}</div>
          </div>
          {/* Bloc photo + nom du propriétaire + note */}
          <div>
          <div className="bloc-picture-name">
            <div>{announce?.host?.name}</div>
            <img src={announce?.host?.picture} alt="Propriétaire" />
            </div>
            <div>
              <Rating rating={announce.rating} />
            </div>
          </div>
        </div>
        {/* Bloc dropdown */}
        <div>
          <Dropdown title="Description">
            <p>{announce.description}</p>
          </Dropdown>
        </div>
        <div>
          <Dropdown title="Equipements">
            <p>
              {announce?.equipments?.map((equipment) => {
                return <li key={equipment.toString()}>{equipment}</li>;
              })}
            </p>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default AnnounceDetail;
