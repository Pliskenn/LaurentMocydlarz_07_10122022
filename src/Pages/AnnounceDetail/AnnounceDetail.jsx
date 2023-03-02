import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../AnnounceDetail/AnnounceDetail.css";
import NotFound from "../NotFound/NotFound";
import Slideshow from "../../Components/Slideshow/Slideshow";
import Dropdown from "../../Components/Dropdown/Dropdown";
import Rating from "../../Components/Rating/Rating";
import Tags from "../../Components/Tags/Tags";

const AnnounceDetail = () => {
  const [announce, setAnnounce] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) getAnnounce(id);
  });

  const getAnnounce = async (id) => {
    try {
      const response = await fetch('http://localhost:3000/data/logements.json');
      const result = await response.json();
      const item = result.find((element) => element.id === id);
      setAnnounce(item);
    } catch (error) {
      console.error(error);
    }
  };

  return (announce === null || announce === undefined)?<NotFound />: (
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
              <h2 className="location-title">{announce.title}</h2>
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
