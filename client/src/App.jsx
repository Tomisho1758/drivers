import React, { useEffect } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import DetailsPage from "./Views/Detail//Detail";
import About from './Views/About/About';
import Home from './Views/Home/home';
import CreateDriver from './Views/Create/Form';

function App() {
 
  


  return (
    <Router>

    <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<DetailsPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/create' element={<CreateDriver />} />
      </Routes>
    </Router>
  );
}

export default App;
