import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { filterDrivers,filterOrigin,  } from '../../Redux/actions/actions';



const Ordenator = ({ setPage }) => {
  const searchD = useSelector((state) => state.drivers)
  const dispatch = useDispatch();
  const handleFilter = (e) => {
    setPage(0);
    dispatch(filterDrivers(e.target.name));
    console.log("Filtered Drivers:", searchD);
    console.log("Filter Action Payload:", e.target.name);
  };

  
  const handleOriginFilter = (e) => {
    setPage(0);
    dispatch(filterOrigin(e.target.name));
  };



  return (
    <div className='sort'>
      {searchD.length > 1 && <button name='aToZ' onClick={handleFilter} className='button-ordenator'>&#10607; A-Z</button>}
      {searchD.length > 1 && <button name='zToA' onClick={handleFilter} className='button-ordenator'>&#10607; Z-A</button>}
      {searchD.length > 1 && <button name="attackDesc" onClick={handleFilter} className='button-ordenator'>- ATTACK</button>}
      {searchD.length > 1 && <button name="attackAsc" onClick={handleFilter} className='button-ordenator'>+ ATTACK</button>}
      {searchD.length > 1 && (
        <button
          name="numeric"
          onClick={handleOriginFilter}
          className="button-ordenator"
        >
          Drivers Originales
        </button>
      )}
      {searchD.length > 1 && (
        <button
          name="uuid"
          onClick={handleOriginFilter}
          className="button-ordenator"
        >
          Drivers Creados
        </button>
      )}
    </div>
  )
}

export default Ordenator;