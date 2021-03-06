import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handlechange}) => (
    <input 
    type="search" 
    className='search' 
    placeholder={placeholder} 
    onChange={handlechange}
    />
);