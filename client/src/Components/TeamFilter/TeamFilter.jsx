import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTeams, getTeams } from '../../Redux/actions/actions';
import "./TeamFilter.css"
const TeamsFilter = ({ setPage }) => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.Teams);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  const handleFilter = (team) => {
    console.log("Clicked Filter Button:", team);
    setPage(0);
    dispatch(filterTeams(team));
  };

  const [selectedTeam, setSelectedTeam] = useState('all');

  const handleDropdownChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  return (
    <div>
      <div className='type-container'>
        <select
          value={selectedTeam}
          onChange={handleDropdownChange}
          className='dropdown-type'
        >
          <option value='all'>All</option>
          {teams?.map((t, i) => (
            <option key={i} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
        <button
          onClick={() => handleFilter(selectedTeam)}
          className='button-type'
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default TeamsFilter;