import React, { useState, useEffect } from 'react'
import '../../Style/SearchItem.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CircularProgress from '@material-ui/core/CircularProgress'

function SearchItem({db}) {
    const [company, setComapny] = useState('')
    const [staff, setStaff] = useState('')

    async function getData(){
        await fetch(`http://localhost:5000/staff/${db.staff}`)
        .then(res => res.json())
        .then(res => {
            setStaff(res[0].name); 
            fetch(`http://localhost:5000/company/${res[0].company}`)
            .then(res => res.json())
            .then(res => setComapny(res[0].name))
        })
    }

    function handelClick(){
        window.location.href = `/detail?id=${db.id}`
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='searchitem-container'>
            <div className='searchitem-container-time'>
                {db.id}
            </div>
            <div className='searchitem-container-data'>
                {db.name}
            </div>
            <div className='searchitem-container-data'>
                {company}
            </div>
            <div className='searchitem-container-data'>
                {staff}
            </div>
            <div className='searchitem-container-data'>
                {db.txhash}
            </div>
            <div className='searchitem-container-data'>
                {db.processcode}
            </div>
            {db.id!=null?
            (
                <>
                    <div className='searchitem-container-link' onClick={handelClick}>
                        Details
                    </div>
                    <div className='searchitem-container-status-green'>
                        <CheckCircleIcon/>
                    </div>
                </>
            ):(
                <div className='searchitem-container-status-orange'>
                    <CircularProgress style={{color:'#2D312F'}}/>
                </div>
            )}
        </div>
    )
}

export default SearchItem
