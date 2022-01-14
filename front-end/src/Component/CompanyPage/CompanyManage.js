import React, { useState } from 'react'
import '../../Style/CompanyManage.css'
import SearchItem from '../SearchPage/SearchItem'
import CompanyAddStaff from './CompanyAddStaff'
import CompanyStaff from './CompanyStaff'

function CompanyManage({staffList,getStaffList}) {
    const[buttonStatus, setButtonStatus] = useState(true)
    function handelClick() {
        setButtonStatus(!buttonStatus)
    }
    return (
        <div className='companymanage-container'>
            <div className='companymanage-title'>
                <button className={buttonStatus?'companymanage-button-active':'companymanage-button'} onClick={handelClick}>Work List</button>
                <button className={buttonStatus?'companymanage-button':'companymanage-button-active'} onClick={handelClick}>Staff List</button>
            </div>
            {buttonStatus?
            (
                <div>
                </div>
            ):(
                <div>
                    {staffList.map(db=>(
                        <CompanyStaff id={db.id} name={db.name} date={db.birthday} address={db.address} position={db.positon} privateKey={db.privatekey}/>
                    ))}
                    <CompanyAddStaff getStaffList={getStaffList}/>
                </div>
            )}
        </div>
    )
}

export default CompanyManage