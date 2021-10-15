import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({handleSearchNote}) => {
    return (
        <div className='search'>
            <MdSearch className='search-btn' size='1.3rem' />
            <input onChange={(event)=>handleSearchNote(event.target.value)} type="text" placeholder='Search...' />
        </div>
    )
};

export default Search