import React from 'react';
import './Landing.css'
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='landingPage'>
      <header className='header'>
        <h1>Bienvenido a mi aplicación de F1!</h1>
        <img className='introImage' src="https://wallpapers.com/images/featured/f1-hfubqbf4vngbuqur.jpg" alt="Intro" />
      </header>
      <main>
        <p className='description'>Una aplicación para amantes de los fierros</p>
        <Link to="/home" className='homeButton'>
          ¡Explorar Ahora!
        </Link>
      </main>
      <footer>
        <p>&copy; 2024 Todos los derechos reservados</p>
      </footer>
    </div>
  );
} 
export default LandingPage;