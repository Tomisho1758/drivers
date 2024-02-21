import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Card.css";

const Card = ({ id, name, image, teams }) => {

  const formattedTeams =
  teams &&
  (typeof teams === "string"
    ? teams
    : Array.isArray(teams)
    ? teams.map((team) => team.name).join(", ")
    : Array.isArray(teams?.[0])
    ? teams.map((team) => team[0].name).join(", ")
    : "Unknown");
  
const formattedImage = image && typeof image === 'object' ? image.url : image;
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const formattedName =
  name?.forename && name?.surname
    ? `${name.forename} ${name.surname}`
    : name;
  const handleCardClick = () => {
    setIsDetailVisible(true);
  };
  
console.log(id,formattedImage,formattedTeams,formattedName)
  return (
    <div className="card-cont" onClick={handleCardClick}>
      <Link to={`/details/${id}`}>View Details</Link>
      <div className="card-name-cont">
        <h4 className="card-name-cont">{formattedName}</h4>
      </div>
      <div className="card-img-cont">
      <img src={formattedImage} alt={formattedName} className="card-img" />
      </div>
      <div className="card-stats">
       
       
        <p className="card-teams">Teams: {formattedTeams}</p>
        
      </div>
    </div>
  );
};

export default Card;
