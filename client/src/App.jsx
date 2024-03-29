import React, { useEffect } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import DetailsPage from "./Views/Detail//Detail";
import About from './Views/About/About';
import Home from './Views/Home/home';
import LandingPage from './Views/Landing/Landing';

import CreateView from './Views/Form/createView';
function App() {
 
  


  return (
    <Router>

    <Routes>
    <Route path='/' element={<LandingPage />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/details/:id' element={<DetailsPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/create' element={<CreateView />} />
      </Routes>
    </Router>
  );
}

export default App;
