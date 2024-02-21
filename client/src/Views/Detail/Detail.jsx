import React, { useEffect } from "react";
import "./Detail.css";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../Redux/actions/actions";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id)
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const driver = useSelector((state) => state.details);

  if (!driver) {
    return <div>No driver found for the provided ID.</div>;
  }

  // Función para formatear equipos según la estructura del objeto
  const formatTeams = (teams) => {
    if (Array.isArray(teams)) {
      return teams.map((team) => team.name).join(" - ");
    } else if (typeof teams === "string") {
      return teams;
    } else {
      return "Unknown";
    }
  };
  const formattedImage = typeof driver.image === 'object' ? driver.image.url : driver.image;
  const formattedTeams = formatTeams(driver.teams);

  const formattedName =
    driver.name?.forename && driver.name?.surname
      ? `${driver.name.forename} ${driver.name.surname}`
      : driver.name;
      console.log(id,formattedTeams,formattedName)
  return (
    <div className="detailModal">
      <div className="detailContent">
        <Link to="/Home" className="closeButton">
          Close
        </Link>
        <h2>{`${formattedName}`}</h2>

        <img src={formattedImage} alt={driver.name} />

        <p>DoB: {driver.dob}</p>
        <p>Teams: {formattedTeams}</p>
        <p>Description: {driver.description} </p>
        <p>Nationality: {driver.nationality} </p>
      </div>
    </div>
  );
};

export default DetailsPage;
