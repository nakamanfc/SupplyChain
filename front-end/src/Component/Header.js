import { Button } from '@material-ui/core'
import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import '../Style/Header.css'

function Header({account,clickToAccount,setAccount}) {
    const pathname = window.location.pathname
    function LogOut(){
        localStorage.clear()
        setAccount(null)
        window.location.href = '/'
    }
    function clickToSearch(){
        window.location.href = '/search'
    }
    function clickToHome(){
        window.location.href = `/${localStorage.getItem('type')}`
    }
    function clickToPost(){
        window.location.href = '/post'
    }
    return (
        <>
            <div className='header-box'>
                <div className='header-items'>
                    <img src="https://realitems.io/img/ri-logo-black.png"/>
                    <div>
                    {pathname=='/'?
                    (
                        <>
                            <Button>Solution</Button>
                            <Button>About Us</Button>
                        </>
                    ):(
                        <>
                        {pathname=='/search'&&localStorage.getItem('type')=='staff'?
                        (
                            <>
                                <Button onClick={clickToHome}>Home</Button>
                                <Button onClick={clickToPost}>Post</Button>
                            </>
                        ):(<></>)}
                        {pathname=='/search'&&localStorage.getItem('type')=='company'?
                        (
                            <>
                                <Button onClick={clickToHome}>Home</Button>
                            </>
                        ):(<></>)}
                        {pathname=='/post'?
                        (
                            <>
                                <Button onClick={clickToHome}>Home</Button>
                                <Button onClick={clickToSearch}>Search</Button>
                            </>
                        ):(<></>)}
                        {pathname=='/company'?
                        (
                            <>
                                <Button onClick={clickToSearch}>Search</Button>
                            </>
                        ):(<></>)}
                        {pathname=='/staff'?
                        (
                            <>
                                <Button onClick={clickToSearch}>Search</Button>
                                <Button onClick={clickToPost}>Post</Button>
                            </>
                        ):(<></>)}
                        </>
                    )}
                    {account==null?
                    (
                        <Button
                        onClick={clickToAccount}
                        variant="contained"
                        style={{backgroundColor:'#2D312F', color:'white'}}
                        endIcon={<AccountCircleIcon/>}>
                            Account
                        </Button>
                    ):(
                        <Button
                        onClick={LogOut}
                        variant="contained"
                        style={{backgroundColor:'#2D312F', color:'white'}}
                        endIcon={<AccountCircleIcon/>}>
                            {account[0]}
                            {account[1]}
                            {account[2]}
                            {account[3]}
                            ...
                            {account[39]}
                            {account[40]}
                            {account[41]}
                        </Button>
                    )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
