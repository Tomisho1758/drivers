import React, { useState } from 'react';
import { createDriver } from '../../Redux/actions/actions';
import { useDispatch } from 'react-redux';
const CreateDriver = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    teams: [],
    description: '',
    nationality: '',
    dob: '',
  });
  const [disabler, setDisabler] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [input, setInput] = useState(formData)
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTeamsChange = (e) => {
    // Puedes manejar la selección de equipos aquí, por ejemplo, obteniendo los IDs seleccionados
    const selectedTeams = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData((prevData) => ({
      ...prevData,
      teams: selectedTeams,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Disable the button to prevent multiple clicks
    setDisabler(true);
  
    try {
      const response = await dispatch(createDriver(input));
  
      if (response && response.error) {
        alert('Error creating Driver:', response.error);
        // Handle error as needed
        setSuccessMessage("");
      } else {
        console.log('Response from server:', response);
        // Reset the form or handle success as needed
        setInput(formData);
        setSuccessMessage("Driver successfully created!");
        alert("Driver successfully created!"); // Display the success message using alert
      }
    } catch (error) {
      console.error('Error creating Driver:', error);
      // Handle error as needed
      setSuccessMessage("");
    } finally {
      // Enable the button after the request is complete (whether success or failure)
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
          {/* Aquí puedes mapear tus equipos existentes y mostrar opciones */}
          <option value="1">Team 1</option>
          <option value="2">Team 2</option>
          {/* ... */}
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

      <button type="submit">Create Driver</button>
    </form>
  );
};

export default CreateDriver;
