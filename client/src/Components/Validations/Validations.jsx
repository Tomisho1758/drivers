// export default function validateDriver(input) {
//     const errors = {};
  
//     // Validar el nombre
//     if (!input.name.trim()) {
//       errors.name = "Name cannot be empty";
//     } else if (!/^[A-Za-z\s]{1,10}$/.test(input.name)) {
//       errors.name = "Name must contain 1 to 10 alphabetic characters for each part";
//     }
  
//     // Validar la fecha de nacimiento
//     if (!input.dob || !isValidDob(input.dob)) {
//       errors.dob = "Invalid date of birth or driver must be at least 18 years old";
//     }
  
//     // Validar la nacionalidad
//     if (!input.nationality || !isValidNationality(input.nationality)) {
//       errors.nationality = "Invalid nationality";
//     }
  
//     // Validar la descripción
//     if (!input.description || !isValidDescription(input.description)) {
//       errors.description = "Description must be between 20 and 100 characters";
//     }
  
//     // Validar los equipos seleccionados
//     if (!input.teams || !isValidTeams(input.teams)) {
//       errors.teams = "Select up to 5 teams";
//     }
  
//     return errors;
//   }