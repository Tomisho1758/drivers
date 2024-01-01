// Cards.jsx

import React, { useState } from 'react';
import Card from '../Card/Card';
import "./Cards.css";
const Cards = ({ allDrivers }) => {

  return (
    <div className="cards-container">
      {allDrivers.map((driver) => (
        <Card
          key={driver.id}
          id={driver.id}
          name={driver.name}
          image={driver.image}
          teams={driver.teams}
          description={driver.description}
          nationality={driver.nationality}
          dob={driver.dob}
        />
      ))}
      {/* Agrega aquí la paginación */}
    </div>
  );
};

export default Cards;
