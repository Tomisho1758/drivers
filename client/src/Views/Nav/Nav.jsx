import React from 'react';
import  SearchBar  from '../../Components/SearchBar/SearchBar';
import "./nav.css"
import { Link } from 'react-router-dom';
import TeamsFilter from '../../Components/TeamFilter/TeamFilter';
export default function Nav({setPage}) {
  return (
    <div className='navBar-container'>
     <div className='navButtons'> 
    
      <button><a href="/Home">Home</a></button>
      
      
      <button><a href="/create">Create</a></button>
      
     
      <button><a href="/about">About</a></button>
      
      </div>
      <TeamsFilter setPage={setPage} />
      <SearchBar/>
    </div>
  )
}