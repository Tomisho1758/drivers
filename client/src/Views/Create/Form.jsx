import React, { useState, useEffect } from 'react';
import { createDriver } from '../../Redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import {validateDriver ,isValidDob , isValidNationality, isValidDescription,isValidTeams, isValidFullname} from '../../Components/Validations/Validations';import './Form.css';

const CreateDriver = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    image: '',
    teams: [],
    description: '',
    nationality: '',
    dob: '',
  });

  const [disabler, setDisabler] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({}); // Estado para almacenar los errores

  const dispatch = useDispatch();
  const teamsData = useSelector((state) => state.Teams);

  const handleChange = (e) => {
    const { name, value } = e.target;

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
    const selectedTeams = Array.from(e.target.selectedOptions, (option) => option.value);

    const validTeams = selectedTeams.filter((team) => !isNaN(team)).map(Number);

    setFormData((prevData) => ({
      ...prevData,
      teams: validTeams,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateDriver(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setDisabler(true);

    try {
      const dobDate = new Date(formData.dob);

      if (isNaN(dobDate.getTime())) {
        throw new Error('Invalid date of birth');
      }

      const formattedDOB = format(dobDate, 'yyyy-MM-dd');
      const updatedInput = { ...formData, dob: formattedDOB };

      await dispatch(createDriver(updatedInput));

      // Mostrar alerta de éxito
      alert('Driver creado con éxito');

      // Resetear el formulario después de la creación exitosa
      setFormData({
        name: '',
        surname: '',
        image: '',
        teams: [],
        description: '',
        nationality: '',
        dob: '',
      });
    } catch (error) {
      // Mostrar alerta de error
      alert('Error creando Driver: ' + error.message);
    } finally {
      setDisabler(false);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre y apellido:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>
      <br />

      <br />
      <label>
        URl de imagen:
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
        {errors.image && <span className="error">{errors.image}</span>}
      </label>
      <br />

      <label>
        Equipos:
        <select multiple name="teams" value={formData.teams} onChange={handleTeamsChange}>
          {/* Mapear equipos existentes y mostrar opciones */}
          {teamsData.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
        {errors.teams && <span className="error">{errors.teams}</span>}
      </label>
      <br />

      <label>
        Descripcion:
        <textarea name="description" value={formData.description} onChange={handleChange} />
        {errors.description && <span className="error">{errors.description}</span>}
      </label>
      <br />

      <label>
  Nationality:
  <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
  {formData.nationality && !isValidNationality(formData.nationality) && (
    <span className="error">Invalid nationality</span>
  )}
</label>
      <br />

      <label>
        Fecha de nacimiento:
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        {errors.dob && <span className="error">{errors.dob}</span>}
      </label>
      <br />

      <button type="submit" disabled={disabler}>
        Crear Driver
      </button>
    </form>
  );
};

export default CreateDriver;
