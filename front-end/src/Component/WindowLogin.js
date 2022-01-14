import { Button, TextField, Card, Typography, colors } from '@material-ui/core'
import React, { useState } from 'react'
import '../Style/WindowLogin.css'
import LockIcon from '@material-ui/icons/Lock'
import web3 from '../Function/WebThree'
import { useHistory } from 'react-router-dom'

function WindowLogin({windowStatus,setAccount}) {
    
    const [login, setLogin] = useState(true)
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [location, setLocation] = useState('')
    const [newPrivateKey, setNewPrivateKey] = useState('')
    const [privateKey, setPrivateKey] = useState('')
    
    function HandleClickTitle(){
        setLogin(!login)
    }
    function ChangeName(event){
        setName(event.target.value);
    }
    function ChangeType(event){
        setType(event.target.value);
    }
    function ChangePrivateKey(event){
        setPrivateKey(event.target.value);
    }
    function ChangeLocation(event){
        setLocation(event.target.value);
    }
    function Copy(){
        navigator.clipboard.writeText(newPrivateKey)
    }
    async function CreateAcount(){
        var data = web3.createAccount(`${name},${type},${location}`)
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name:name, type:type, location:location, address:data.address, privatekey:data.privateKey})
        };
        await fetch("http://localhost:5000/company", requestOptions)
        .then(res => res.text())
        .then(res => {console.log(res); setNewPrivateKey(data.privateKey)})
    }
    async function Login(){
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({privatekey:privateKey})
        };
        await fetch("http://localhost:5000/companylogin", requestOptions)
        .then(res => res.json())
        .then(res => {
            if(res[0] != null){
                console.log(res[0].address);
                setAccount(res[0].address);
                localStorage.setItem('account',`${res[0].address}`);
                localStorage.setItem('type','company');
                localStorage.setItem('key',`${privateKey}`)
                window.location.href = `/company?address=${res[0].address}`
            } else {
                fetch("http://localhost:5000/stafflogin", requestOptions)
                .then(res => res.json())
                .then(res => {
                    if(res[0] != null){
                        console.log(res[0].address);
                        setAccount(res[0].address);
                        localStorage.setItem('account',`${res[0].address}`);
                        localStorage.setItem('type','staff');
                        localStorage.setItem('key',`${privateKey}`)
                        window.location.href = `/staff?address=${res[0].address}`
                    } else {
                        alert('privateKey khong chinh xac')
                    }
                })
            }
        })
    }

    return (
        <>
        {windowStatus?
        (
            <div className={'windowlogin-modal'}>
                <div className='windowlogin-container'>
                    <div className='windowlogin-box'>
                        <div className='windowlogin-title'>
                            {login?
                            (
                                <>
                                    <Button variant="contained" style={{backgroundColor:'#2D312F', color:'white'}}>Log In</Button>
                                    <Button onClick={HandleClickTitle}>Sign Up</Button>
                                </>
                            ):(
                                <>
                                    <Button onClick={HandleClickTitle}>Log In</Button>
                                    <Button  variant="contained" style={{backgroundColor:'#2D312F', color:'white'}}>Sign Up</Button>
                                </>
                            )}
                        </div>
                        {login?
                            (
                                <>
                                    <LockIcon style={{fontSize:80, color:'2D312F'}}/>
                                    <TextField label="Private Key" onChange={ChangePrivateKey} value={privateKey}/>
                                    <Button onClick={Login}>LOGIN</Button>
                                </>
                            ):(
                                <>
                                    <TextField label="Company Name" onChange={ChangeName} value={name}/>
                                    <TextField label="Company Type" onChange={ChangeType} value={type}/>
                                    <TextField label="Company Address" onChange={ChangeLocation} value={location}/>
                                    <Button onClick={CreateAcount}>SIGNUP</Button>
                                    {newPrivateKey != 0 ?
                                    (
                                        <>
                                            <Card>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    PrivateKey
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {newPrivateKey}
                                                </Typography>
                                            </Card>
                                            <Button onClick={Copy}>COPY</Button>
                                        </>
                                    ):(
                                        <>
                                        </>
                                    )}
                                </>
                            )}
                    </div>
                </div>
            </div>
        ):(
            <></>
        )}
        </>
    )
}

export default WindowLogin
