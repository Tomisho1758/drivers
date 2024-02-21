import {
        GET_DRIVERS,
        GET_DRIVERS_BY_NAME,
        GET_TEAMS,
        FILTER_TEAMS,
        FILTER_DRIVERS,
        FILTER_ORIGIN,
        SET_PAGES,
        CLEAR_SEARCH,
        GET_DETAILS,
        POST_DRIVER,
CLEAN_DETAILS,
        }from "../actions/actions-types.js"


let initialState = {
                     drivers: [],
                     driversBackUp: [],
                     Teams: [],
                     teamsBackUp:[],
                     currentPage: 1,
                     searchResults: [],
                     driverById: null,
                     teamsFilter: "all",  
                     originFilter: 'all',   
                     createdDriver: [],
                     error: null,   
                     driverOrder:[] ,
                     totalPages:1,
                     filterDrivers:[],
                     filter:"all",
                     details: {},
                    };
      
function rootReducer(state = initialState, action) {
 switch (action.type) {
  case SET_PAGES:
    return{
      ...state,
      currentPage: action.payload,
    }
  case GET_DRIVERS:
   return {
         ...state,
         drivers: action.payload, 
         driversBackUp: action.payload, 
           };

case GET_TEAMS:
  return {
    ...state,
    Teams: action.payload,
   
  };


  case GET_DRIVERS_BY_NAME:
   return{
             ...state,
             drivers: action.payload,
        }

        case FILTER_TEAMS:
          console.log("Original driversBackUp:", state.driversBackUp);
          if (action.payload === "all") {
            return {
              ...state,
              teamsFilter: 'all',
              drivers: [...state.driversBackUp],
            };
          } else {
            const filteredDrivers = [...state.driversBackUp].filter((driver) => {
             
              if (driver.teams) {
         
                const teamsArray = driver.teams.split(',').map(team => team.trim());
        
               
                return teamsArray.includes(action.payload);
              } else {
              
                return false;
              }
            });
        
            return {
              ...state,
              teamsFilter: action.payload,
              drivers: [...filteredDrivers],
            };
          }
        
          case GET_DETAILS:
            return {
              ...state,
              details: action.payload,
            };
      
          case CLEAN_DETAILS:
            return { ...state, details: {} };
    
  

     case FILTER_DRIVERS:
     let sortedDriverCopy;
     switch (action.payload){
      case "aToZ":
        sortedDriverCopy= [...state.drivers].sort((a,b)=>
        a.name.localeCompare(b.name)
        );
        break
     case "zToA":
          sortedDriverCopy= [...state.drivers].sort((a,b)=>
          b.name.localeCompare(a.name)
          );
          break
     case "youngToOld":
          sortedDriverCopy= [...state.drivers].sort((a,b)=>
          b.dob.localeCompare(a.dob)
          );
          break
     case "oldToYoung":
          sortedDriverCopy= [...state.drivers].sort((a,b)=>
          a.dob.localeCompare(b.dob)
          );
          break;
          default:
            sortedDriverCopy = [...state.driversBackUp];
        }
        return {
          ...state,
          drivers:[ ...sortedDriverCopy],
         
        };
     case CLEAR_SEARCH:
      return{
        ...state,
        drivers:state.driverOrder,
        currentPage: 1,
        totalPages : Math.ceil(state.driverOrder.length)
      }
     case FILTER_ORIGIN:
      const selectedOrigin = action.payload;
      let filterDrivers=[];
      if( selectedOrigin === "all"){
        filterDrivers = state.driversBackUp;
      }else{
        const isNumericOrigin = selectedOrigin === "numeric";
        filterDrivers = state.driversBackUp.filter((p)=>{
          const isNumericId = typeof p.id === "number";
          return isNumericOrigin=== isNumericId
        })
      }
      return{
        ...state,
        originFilter:selectedOrigin,
        drivers: filterDrivers
      }
      case POST_DRIVER:
      
        return {
          ...state,
         
          createdDriver: [...state.createdDriver, action.payload],
        };
  default:
   return state;}}
            
        export default rootReducer;
        