// Home.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers, setPages } from '../../Redux/actions/actions';
import Nav from '../Nav/Nav';
import Cards from '../../Components/Cards/Cards';
import Paginado from '../../Components/Paginado/Paginado';
import Ordenator from '../../Components/Sort/Sort';
import TeamsFilter from '../../Components/TeamFilter/TeamFilter';
const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setPages] = useState(0);
  const PER_PAGE = 9;

  const allDrivers = useSelector((state) => {
    const drivers = state.drivers;
    if (Array.isArray(drivers)) {
      return drivers.slice(currentPage * PER_PAGE, currentPage * PER_PAGE + PER_PAGE);
    }
    return [drivers];
  });

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  async function handlePage(pag) {
    try {
      const pageNumber = parseInt(pag, 10);
      if (!isNaN(pageNumber)) {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
          // Actualiza la página actual usando la acción setPages
          dispatch(setPages(pageNumber));
        } else {
          console.error('Número de página inválido:', pag);
        }
      } else {
        console.error('Número de página inválido:', pag);
      }
    } catch (error) {
      console.error('Error al cambiar la página:', error);
    }
  }
  

  const state = useSelector((state) => state);
  const totalDrivers = state.drivers.length;
  const totalPages = Math.ceil(totalDrivers / PER_PAGE);

  return (
    <div>
      <Nav />
      <Paginado currentPage={currentPage} totalPages={totalPages} handlePage={handlePage} />
      <Cards allDrivers={allDrivers} />
      <TeamsFilter setPage={setPages} />
        <Ordenator setPage={setPages} />
    </div>
  );
};

export default Home;