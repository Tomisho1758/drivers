import React, { useEffect } from "react";
import  "./Detail.css";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../Redux/actions/actions";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const driver = useSelector((state) => state.details);

  if (!driver) {
    return <div>No driver found for the provided ID.</div>;
  }
  const formattedTeams = driver.teams
  ? driver.teams.split(", ").join(" - ")
  : 'Unknown';
 
  
console.log("driver.teams:", driver.teams);
console.log("formattedTeams:", formattedTeams);
  return (
    <div className='detailModal'>
      <div className='detailContent'>
        <Link to="/" className='closeButton'>
          Close
        </Link>
        <h2>{`${driver.name?.forename} ${driver.name?.surname}`}</h2>

        <img src={driver.image?.url} alt={driver.name} />

        <p>DoB: {driver.dob}</p>
        <p>Teams: {formattedTeams}</p>
        <p>Description: {driver.description} kg</p>
        <p>Nationality: {driver.nationality} cm</p>
      </div>
    </div>
  );
};

export default DetailsPage;




