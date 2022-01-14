import React from 'react'
import CompanyBody from '../Component/CompanyPage/CompanyBody'

var search = window.location.search
function Company() {
    if(search == `?address=${localStorage.getItem('account')}`) {
        return (
            <>
                <CompanyBody/>
            </>
        )   
    } else {
        window.location.href = '/'
    }
}

export default Company
