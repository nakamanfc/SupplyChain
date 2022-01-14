import React, { useState } from 'react'
import '../../Style/CompanyAddStaff.css'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { IconButton, TextField } from '@material-ui/core'
import WebThree from '../../Function/WebThree'

function CompanyAddStaff({getStaffList}) {
    const [name,setName] = useState(null)
    const [date,setDate] = useState(null)
    const [position,setPosition] = useState(null)

    function ChangeName(event){
        setName(event.target.value);
    }
    function ChangeDate(event){
        setDate(event.target.value);
    }
    function ChangePosition(event){
        setPosition(event.target.value);
    }
    async function CreateStaff(){
        var data = WebThree.createAccount(`${name},${date},${position}`)
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name:name, birthday:date, positon:position, company:localStorage.getItem('account'), address:data.address, privatekey:data.privateKey})
        };
        await fetch("http://localhost:5000/staff", requestOptions).then(res => res.text())
        .then(res => {console.log(res)})
        .then(getStaffList)
        .then(postDataToBlockchain(data.address))
    }

    async function postDataToBlockchain(address){
        WebThree.setAccount(localStorage.getItem('key'))
        await WebThree
        .staffContract().methods
        .CreateStaff(`${address}`)
        .send({from: `${localStorage.getItem('account')}`, gasPrice:'0', gas:200000})
        .on('receipt', function(receipt){puthData(receipt.events.NewEvent.returnValues.ID,receipt.transactionHash,address)})
    }

    function puthData(id,txhash,address){
        const requestOptions = {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id:id,txhash:txhash,address:address})
        };
        fetch("http://localhost:5000/staff", requestOptions).then(getStaffList)
    }

    return (
        <div className='companyaddstaff-container'>
            <IconButton onClick={CreateStaff}>
                <AddCircleIcon style={{fontSize: 30}}/>
            </IconButton>
            <TextField label="Full Name" variant="outlined" onChange={ChangeName}/>
            <TextField type='date' variant="outlined" onChange={ChangeDate}/>
            <TextField label="Position" variant="outlined" onChange={ChangePosition}/>
        </div>
    )
}

export default CompanyAddStaff
