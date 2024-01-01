import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTeams, getTeams } from '../../Redux/actions/actions';

const TeamsFilter = ({ setPage }) => {
    const dispatch = useDispatch();
    const teams = useSelector((state) =>  state.Teams);
    const filter = useSelector((state) => state.filter);
  
    useEffect(() => {
      dispatch(getTeams());
    }, [dispatch]);
  
    const handleFilter = (team) => {
      setPage(0);
      dispatch(filterTeams(team));
    };
  
    return (

      <div>
        
        <div  className='type-container'>
  
        <button onClick={() =>
          handleFilter("all")}
          className='button-type'>
          All
        </button>
        {teams?.map((t, i) => (
          <button
          key={i}
          onClick={() =>
            filter === t.name ? handleFilter("all") : handleFilter(t.name)}
            
            className='button-type'
            >
            {t.name}
          </button>
        ))}
        </div>
  
      </div>
    )
  }
  

export default TeamsFilter;
