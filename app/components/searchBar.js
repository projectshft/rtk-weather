import React from 'react'
import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [searchCity, setSearchCity] = useState('');

    //trim removing whitespace to help validate search parameters
    const handleSearch = () => {
        if (searchCity.trim() !=='') { 
            onSearch(searchCity.trim());
            setSearchCity('');
        }
    };
    //convenience to hit 'enter' instead of only clicking by calling handlesearch via 'enter' keydown
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div>
          <input
            className='city-input'
            type='text'
            placeholder='Enter city'
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className='button'
            
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      );
}

export default SearchBar;