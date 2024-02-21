// Validar que la fecha de nacimiento sea válida y el conductor tenga al menos 18 años
import validCountries from '../../Utils/Countries'
export function isValidDob(dob) {
    // Verificar que la fecha de nacimiento no esté vacía
    if (!dob) {
      return false;
    }
  
    // Obtener la fecha actual
    const currentDate = new Date();
  
    // Obtener la fecha de nacimiento del conductor
    const dobDate = new Date(dob);
  
    // Calcular la diferencia en años
    const ageDiff = currentDate.getFullYear() - dobDate.getFullYear();
  
    // Verificar que el conductor tenga al menos 18 años
    if (ageDiff < 18) {
      return false;
    }
  
    // Verificar si ya cumplió años en este año
    if (
      ageDiff === 18 &&
      currentDate.getMonth() < dobDate.getMonth() ||
      (currentDate.getMonth() === dobDate.getMonth() &&
        currentDate.getDate() < dobDate.getDate())
    ) {
      return false;
    }
  
    return true;
  }
  export function isValidFullname(fullname) {
    return fullname.split(' ').length >= 2;
  }
  
  export  function  isValidNationality (nationality)  {
    
    if (validCountries.includes(nationality)){
      return true}
      else return false
    }
  ;
  export function isValidDescription(description){
    if  (description.length > 10 && description.length<100){
      return true
    }else return false
  }
  export function isValidTeams(teams) {
    if (teams.length === 0 || teams.length > 5) {
      return false; // Cambiado a false si no es válido
    } else {
      return true; // Cambiado a true si es válido
    }
  }
  
export  function validateDriver(input) {
    const errors = {};
  
    // Validar el nombre
    if (!input.name.trim()) {
      errors.name = "Name cannot be empty";
    } else if (!/^[A-Za-z\s]{1,20}$/.test(input.name)) {
      errors.name = "Name must contain 1 to 10 alphabetic characters for each part";
    } else if (!isValidFullname(input.name)) {
      errors.name = "Please enter at least a first name and a last name";
    }
  
    // Validar la fecha de nacimiento
    if (!input.dob || !isValidDob(input.dob)) {
      errors.dob = "Invalid date of birth or driver must be at least 18 years old";
    }
  
    // Validar la nacionalidad
   
    if (!input.nationality || !isValidNationality(input.nationality)) {
      errors.nationality = "Invalid nationality";
    }
  
    // Validar la descripción
    if (!input.description || !isValidDescription(input.description)) {
      errors.description = "Description must be between 20 and 100 characters";
    }
  
    // Validar los equipos seleccionados
    if (!input.teams || !isValidTeams(input.teams)) {
      errors.teams = "Select up to 5 teams";
    }
  
    return errors;
  }