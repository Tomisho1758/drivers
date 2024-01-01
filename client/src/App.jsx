import React, { useEffect } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { getDrivers } from './Redux/actions/actions';

import Home from './Views/Home/home';

function App() {
 
  // Asegúrate de que allDogs sea un array antes de intentar mapearlo


  return (
   
      <div>
        {/* Pasa allDogs como una prop a Cards */}
        <Home  />
      </div>
    
  );
}

export default App;
