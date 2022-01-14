import React, { useState, useEffect } from 'react'
import PostImg from '../PostPage/PostImg'
import '../../Style/Introduce2.css'
import '../../Style/PostBody.css'
import PostAdd from './PostAdd'
import ProcessBody from './ProcessBody'
import WebThree from '../../Function/WebThree'

function PostBody() {
    const[db,setDd] = useState([])
    const[name,setName] = useState('')
    const[code,setCode] = useState('')
    const[weight,setWeight] = useState('')
    const[image,setImage] = useState(null)
    const[loadingCircle, setLoadingCircle] = useState(false)

    async function createProcess(){
        setLoadingCircle(true)
        const time = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name:name,
                staff:localStorage.getItem('account'),
                image:image,
                weight:weight,
                processcode:code,
                time:time
            })
        };
        await fetch("http://localhost:5000/process", requestOptions)
        .then(setLoadingCircle(false))
        .then(getDataListProcess)
        .then(addToBlokChain(time))
    }

    function getDataListProcess(){
        fetch(`http://localhost:5000/process/${localStorage.getItem("account")}`)
        .then(res => res.json())
        .then(res => setDd(res))
    }

    async function addToBlokChain(time){
        WebThree.setAccount(localStorage.getItem('key'))
        await WebThree
        .processContract().methods
        .CreateProcess(`${weight}`,`${name}`,`${code}`,`${image}`)
        .send({from: `${localStorage.getItem('account')}`, gasPrice:'0', gas:200000})
        .on('receipt', function(receipt){
            puthData(
            receipt.events.NewEvent.returnValues.ID,
            receipt.transactionHash,
            localStorage.getItem('account'),
            time
            )
        })
    }

    function puthData(id,txhash,address,time){
        console.log(id,txhash,address,time)
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id:id,txhash:txhash,staff:address,time:time})
        };
        fetch("http://localhost:5000/process", requestOptions)
        .then(getDataListProcess)
        .then(setName(''),setCode(''),setWeight(''),setImage(null))
    }

    useEffect(() => {
        getDataListProcess()
    }, [])

    return (
        <>
        <div className='postbody-container'>
            <div className='postbody-box'>
                <div className='postbody-box-left'>
                    <PostAdd
                        createProcess={createProcess}
                        setName={setName}
                        setCode={setCode}
                        setWeight={setWeight}
                        loadingCircle={loadingCircle}
                        name={name}
                        code={code}
                        weight={weight}
                    />
                </div>
                <div className='postbody-box-right'>
                    <PostImg setImage={setImage} image={image}/>
                </div>
            </div>
        </div>
        <ProcessBody db={db}/>
        </>
    )
}

export default PostBody
