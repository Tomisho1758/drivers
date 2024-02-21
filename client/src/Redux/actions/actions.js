import axios from "axios";
import { GET_DRIVERS,GET_TEAMS,POST_DRIVER,SET_PAGES,FILTER_DRIVERS,
  GET_DRIVERS_BY_NAME, FILTER_ORIGIN,FILTER_TEAMS,CLEAR_SEARCH,CLEAN_DETAILS, GET_DETAILS} from "./actions-types";
  export function createDriver(driverData) {
    return async function (dispatch) {
  try {
        
        const response = await axios.post("http://localhost:3001/drivers", driverData);
           console.log("Request Payload:", driverData);
        
        dispatch({
          type: POST_DRIVER,
          payload: response.data,
        });
      } catch (error) {
        console.error("Error creating Driver:", error.response.data);
      }
    };
  }
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

export const setPages = (pageNumber) => {
  return { type: SET_PAGES, payload: pageNumber };
};

export function getDetails(id) {
  return async function (dispatch) {
    try {
      let driverData;

     
      driverData = await axios.get(`http://localhost:3001/drivers/${id}`);

      
      if (driverData.data) {
        // console.log('Driver Data:', driverData.data);
        dispatch({
          type: GET_DETAILS,
          payload: driverData.data,
        });
        
        
      }
  }catch (error) {
      console.log(error);
    };
}}

export const cleanDetails = () => {
  return { type: CLEAN_DETAILS };
};