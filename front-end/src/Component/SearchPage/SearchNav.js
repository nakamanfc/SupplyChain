import React from 'react'
import '../../Style/SearchNav.css'
import SearchBar from './SearchBar'

function SearchNav() {
    return (
        <div className='searchbar-container'>
            <div className='searchbar-box'>
                <div className='searchbar-content'>
                    <div className='searchbar-des-1'>
                    Transparent Process 
                    </div>
                    <div className='searchbar-des-2'>Search Everything Now.</div>
                    <div>
                        <SearchBar/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchNav
