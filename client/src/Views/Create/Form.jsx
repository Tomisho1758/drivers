import React, { useState, useEffect } from 'react';
import { createDriver, getTeams } from '../../Redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import './Form.css';

const CreateDriver = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    teams: [],
    description: '',
    nationality: '',
    dob: '',
  });

  const [disabler, setDisabler] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  // const [teamsData, setTeamsData] = useState([]); // Estado para almacenar los datos de los equipos
  const dispatch = useDispatch();
const teamsData = useSelector((state)=> state.Teams)
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validar el formato de fecha antes de actualizar el estado
    if (name === 'dob' && value.trim() !== '') {
      const dobDate = new Date(value);
      if (isNaN(dobDate.getTime())) {
        console.error('Invalid date format for dob');
        return;
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTeamsChange = (e) => {
    const selectedTeams = Array.from(e.target.selectedOptions, (option) => Number(option.value));
    setFormData((prevData) => ({
      ...prevData,
      teams: selectedTeams,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setDisabler(true);
  
    try {
      const dobDate = new Date(formData.dob);
  
      if (isNaN(dobDate.getTime())) {
        throw new Error('Invalid date of birth');
      }
  
      const formattedDOB = format(dobDate, 'yyyy-MM-dd');
      const updatedInput = { ...formData, dob: formattedDOB };
  
      console.log('Updated Input:', updatedInput); // Log the updated input
  
      const response = await dispatch(createDriver(updatedInput));
  
      // Rest of the code remains unchanged...
    } catch (error) {
      console.error('Error creating Driver:', error.message);
      setSuccessMessage('');
    } finally {
      setDisabler(false);
    }
  };
  

  


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />

      <label>
        Image URL:
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
      </label>
      <br />

      <label>
        Teams:
        <select multiple name="teams" value={formData.teams} onChange={handleTeamsChange}>
          {/* Mapear equipos existentes y mostrar opciones */}
          {teamsData.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </label>
      <br />

      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <br />

      <label>
        Nationality:
        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
      </label>
      <br />

      <label>
        Date of Birth:
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
      </label>
      <br />

      <button type="submit" disabled={disabler}>
        Create Driver
      </button>
    </form>
  );
};

export default CreateDriver;
