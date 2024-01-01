import { React, useState } from 'react'
import {useDispatch} from 'react-redux'
import {getDriversByName} from "../../Redux/actions/actions"
import "./SearchBar.css"

const SearchBar = () => {
const [ searchString, setSearchString ] = useState ("")

function handleChange(e){
    setSearchString( e.target.value );
}
const dispatch = useDispatch()
async function onSubmit(){
    try {
    const response = await dispatch(getDriversByName(`${searchString.toLowerCase()}`));
    const searchStringLower= searchString.toLowerCase()
    if (response.payload){
        const matchFound = response.payload
        matchFound.includes(searchStringLower)
    }else{
        alert(`No se encontro ningun conductor con el nombre ${searchString}`)
    }
    }catch(error){
        console.error("error searching:",error)
    }
}
const handleSubmitForm = async (e)=> {
    e.preventDefault();
    
    try{
    await onSubmit(searchString);
    setSearchString("")  
}catch(error){
console.error('Error in form subbmission:', error)
}};
  return (
    <div className='searchContainer'>
        <form onSubmit={handleSubmitForm}>
            <input type="search" placeholder='busqueda' className='inputSearch' onChange={handleChange} />
            <button type='submit' className='button'>Buscar</button>
        </form>
    </div>
  )
}
export default SearchBar