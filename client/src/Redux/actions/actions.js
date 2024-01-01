import axios from "axios";
import { GET_DRIVERS,GET_TEAMS,GET_DRIVERS_BY_ID,SET_PAGES,FILTER_DRIVERS,
  GET_DRIVERS_BY_NAME, FILTER_ORIGIN,FILTER_TEAMS,CLEAR_SEARCH} from "./actions-types";

export function getDrivers() {
    return async function (dispatch) {
      try {
        const response = await axios.get("http://localhost:3001/drivers");
        const driverData = response.data; 
        
  dispatch({
    type: GET_DRIVERS,
    payload: driverData, 
  });
  
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
  }
  export function getTeams() {
    return async function (dispatch) {
      try {
        const response = await axios.get("http://localhost:3001/teams");
        const teamsData = response.data; 
        
  dispatch({
    type: GET_TEAMS,
    payload: teamsData, 
  });
  
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
  }

  export function getDriversByName(name) {
    return async function (dispatch){
      try{

        const allDriversResponse = await axios ('http://localhost:3001/drivers');
        const allDriversData =  allDriversResponse.data;


        const filtereData =allDriversData.filter(drivers=>
           drivers.name.toLowerCase().includes(name.toLowerCase()));
           if(filtereData.length === 0 ){
            dispatch({
              type:"DRIVER_NOT_FOUND",
              payload:[],
            })
           }else{
            dispatch({
              type:GET_DRIVERS_BY_NAME,
              payload:filtereData
            });
           }
      }catch(error){
        alert("Error al buscar Conductor", error.message);
        throw error
      }
    }
  };
export const filterTeams = (filter) => {
  return {type : FILTER_TEAMS, payload: filter}
};
export const filterDrivers = (filterName) => {
  return {type : FILTER_DRIVERS, payload: filterName}
};
export const clearSearch = () => {
  return {type : CLEAR_SEARCH}
};
export const filterOrigin = (selectedOrigin) => {
  return {type : FILTER_ORIGIN,
          payload: selectedOrigin}
};
// Acción
export const setPages = (pageNumber) => {
  return { type: SET_PAGES, payload: pageNumber };
};