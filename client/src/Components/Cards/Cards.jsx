import React, { useState } from 'react';
import Card from '../Card/card';
import "./Cards.css";
const Cards = ({ allDrivers }) => {

  return (
    <div className="cards-container">
      {allDrivers.map((driver) => (
        <Card
          key={driver.id}
          id={driver.id}
          name={driver.name}
          surname={driver.surname}
          image={driver.image}
          teams={driver.teams}
          description={driver.description}
          nationality={driver.nationality}
          dob={driver.dob}
        />
      ))}
     
    </div>
  );
};

export default Cards;
