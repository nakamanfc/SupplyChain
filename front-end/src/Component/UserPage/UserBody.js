import React, { useEffect, useState } from 'react'
import UserProfile from './UserProfile'
import '../../Style/UserBody.css'
import UserProcess from './UserProcess'

function UserBody() {
    const [db, setDb] = useState([])
    const [staffCompany, setStaffCopany] = useState([])
    async function getInfoStaff(){
        await fetch(`http://localhost:5000/staff/${localStorage.getItem('account')}`)
        .then(res => res.json())
        .then(res => {
            setDb(res[0]);
            fetch(`http://localhost:5000/company/${res[0].company}`)
            .then(res => res.json())
            .then(res => setStaffCopany(res[0]))
        })
    }

    useEffect(() => {
        getInfoStaff()
    }, [])

    return (
        <div className='userbody-container'>
            {staffCompany.name != null ?
            (
                <>
                    <UserProfile db = {db} staffCompany={staffCompany}/>
                    <UserProcess/>
                </>
            ):(<></>)}
        </div>
    )
}

export default UserBody
