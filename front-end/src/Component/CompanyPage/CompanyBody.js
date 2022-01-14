import React, { useEffect, useState } from 'react'
import '../../Style/CompanyBody.css'
import CompanyProfile from './CompanyProflie'
import CompanyManage from './CompanyManage'
import WebThree from '../../Function/WebThree'

function CompanyBody() {
    const [db, setDb] = useState([])
    const [staffList, setStaffList] = useState([])
    const [staffNum, setStaffNum] = useState('0')
    const [workNum, setWorkNum] = useState('0')
    const [loading, setLoading] = useState(false)

    async function getInfoCompany(){
        await fetch(`http://localhost:5000/company/${localStorage.getItem('account')}`)
        .then(res => res.json())
        .then(res => {
            setDb(res[0]);
            if(res[0].id == null){
                setLoading(true)
                addToBlockchain()
            }
        })
    }
    async function getStaffList(){
        await fetch(`http://localhost:5000/staffofcompany/${localStorage.getItem('account')}`)
        .then(res => res.json())
        .then(res => {
            setStaffList(res);
            console.log(res)
        })
    }
    function puthData(id,txhash){
        const requestOptions = {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id:id,txhash:txhash,address:localStorage.getItem('account')})
        };
        fetch("http://localhost:5000/company", requestOptions)
        console.log("puthData", id, txhash)
    }
    async function addToBlockchain(){
            WebThree.setAccount(localStorage.getItem('key'))
            await WebThree.companyContract().methods
            .CreateCompany()
            .send({from: `${localStorage.getItem('account')}`, gasPrice:'0', gas:200000})
            .on('receipt', function(receipt){puthData(receipt.events.NewEvent.returnValues.ID,receipt.transactionHash);setLoading(false)});
    }

    useEffect(() => {
        getInfoCompany()
        getStaffList()
    }, [])
    return (
        <>
        {loading?
        (
            <div>dang tai...</div>
        ):(
            <div className='companybody-container'>
                {db.name != null ?
                (
                    <>
                        <CompanyProfile db={db} staffNum={staffNum} workNum={workNum}/>
                        <CompanyManage staffList={staffList} getStaffList={getStaffList}/>
                    </>
                ):(<></>)}
            </div>
        )}
        </>
    )
}

export default CompanyBody
