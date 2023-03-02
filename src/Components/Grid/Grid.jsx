import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Grid.css";

function Grid() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/data/logements.json");
      const result = await response.json();
      setData(result);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="cards_container">
        {data.map((item) => (
          <div style={{ background:`url(${item.cover}) no-repeat #ff6060` }} className="cards" key={item.id}>
            <Link to={"/annonces/" + item.id}>
              <div className="card">
                <div className="bloc_title">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
export default Grid;
