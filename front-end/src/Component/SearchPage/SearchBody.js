import React from 'react'
import SearchNav from './SearchNav'
import SearchResult from './SearchResult'
import '../../Style/SearchBody.css'

function SearchBody() {
    return (
        <>
        <div className='searchbody-container'>
            <SearchNav/>
        </div>
        <SearchResult/>
        </>
    )
}

export default SearchBody
