import React from 'react'
import '../../Style/SearchBar.css'
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
    return (
        <>
            <div className='searchbar-container'>
                <input className='searchbar-search' placeholder="Looking For Process By Txhash, ID, Address Staff,..."/>
                <button className='searchbar-button'>
                    <div className='searchbar-button-text'>
                        Search
                    </div>
                    <SearchIcon style={{ fontSize: 30 }} />
                </button>
            </div>
        </>
    )
}

export default SearchBar
