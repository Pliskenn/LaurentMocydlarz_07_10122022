import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../AnnounceDetail/AnnounceDetail.css";
import axios from "axios";
import Slideshow from "../../Components/Slideshow/Slideshow";
import Dropdown from "../../Components/Dropdown/Dropdown";
import Rating from "../../Components/Rating/Rating";
import Tags from "../../Components/Tags/Tags";

const AnnounceDetail = () => {
  const [announce, setAnnounce] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (id) getAnnounce(id);
  });

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
      <div className="block-infos">
        <div className="informations-content">
          {/* Bloc titre + localisation */}
          <div className="location">
            <div>
              <h2>{announce.title}</h2>
            </div>
            <div>
              <h3>{announce.location}</h3>
            </div>
            <div className="tags">
              <Tags tags={announce.tags} />
            </div>
          </div>
          {/* Bloc photo + nom du propriétaire + note */}
          <div className="host-rating">
            <div className="bloc-picture-name">
              <div className="informations-titles">
                <h3>{announce?.host?.name}</h3>
              </div>
              <img src={announce?.host?.picture} alt="Propriétaire" />
            </div>
            <div>
              <Rating rating={announce.rating} />
            </div>
          </div>
        </div>
        {/* Bloc dropdown */}
        <div className="dropdown-block">
          <div className="dropdown-details">
            <Dropdown title="Description">
              <p>{announce.description}</p>
            </Dropdown>
          </div>
          <div className="dropdown-details">
            <Dropdown title="Equipements">
              <ul>
                {announce?.equipments?.map((equipment) => {
                  return <li key={equipment.toString()}>{equipment}</li>;
                })}
              </ul>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnounceDetail;
