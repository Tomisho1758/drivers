import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Card.css";

const Card = ({ id, name, image, teams, description, nationality, dob }) => {
  
const formattedTeams= teams.split(",").join(",")
 
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const handleCardClick = () => {
    setIsDetailVisible(true);
  };
  

  return (
    <div className="card-cont" onClick={handleCardClick}>
      <Link to={`/details/${id}`}>View Details</Link>
      <div className="card-name-cont">
        <h4>{`${name}`}</h4>
      </div>
      <div className="card-img-cont">
        <img src={image} alt={`${name}`} className="card-img" />
      </div>
      <div className="card-stats">
       
        {/* <p className="card-life-span">Date of Birth: {dob}</p>
        <p className="card-nationality">Nationality: {nationality}</p> */}
        <p className="card-teams">Teams: {formattedTeams}</p>
        {/* <p className="card-description">{description}</p> */}
      </div>
    </div>
  );
};

export default Card;
