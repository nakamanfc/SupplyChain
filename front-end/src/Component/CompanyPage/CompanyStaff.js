import React from 'react'
import '../../Style/CompanyStaff.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import AutorenewIcon from '@material-ui/icons/Autorenew'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import { IconButton } from '@material-ui/core'

function CompanyStaff({id,name,date,address,position,privateKey}) {
    function handelCopy(){
        navigator.clipboard.writeText(privateKey)
    }
    return (
        <div className='companystaff-container'>
            <div className='companystaff-container-id'>
                {id}
            </div>
            <div className='companystaff-container-data'>
                {name}
            </div>
            <div className='companystaff-container-data'>
                {date}
            </div>
            <div className='companystaff-container-address'>
                {address}
            </div>
            <div className='companystaff-container-data'>
                {position}
            </div>
            <div className='companystaff-container-data'>
                7 Công Việc
            </div>
            <div className='companystaff-container-data'>
                <IconButton onClick={handelCopy}>
                    <FileCopyIcon/>
                </IconButton>
            </div>
            <div className='companystaff-container-link'>
                Details
            </div>
            {id!=null?
            (
                <div className='searchitem-container-status-green'>
                    <CheckCircleIcon/>
                </div>
            ):(
                <div className='searchitem-container-status-orange'>
                    <AutorenewIcon/>
                </div>
            )}
        </div>
    )
}

export default CompanyStaff
