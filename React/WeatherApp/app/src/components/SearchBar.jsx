import React, { useState } from 'react';

export default function SearchBar(props) {
  // acá va tu código

  const btnStyle = {
    margin: '5px 10px',
    backgroundColor: 'rgb(241, 78, 78)',
    color: 'white',
    borderRadius: '4px',
    border: '1px solid black',
  }

  const [searchInput, setSearchInput] = useState('')

  return (<div className='searchBar'>
    <input type="text" name='ciudadInput' placeholder='Ciudad...' onChange={event => setSearchInput(event.target.value)} />
    <button onClick={() => props.onSearch(searchInput)} style={btnStyle}>Agregar</button>
  </div>)
};