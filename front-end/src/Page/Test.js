import React, { useState, useEffect } from 'react'
import Web3 from 'web3';
import Contract from 'web3-eth-contract'
import MewToken from '../abi/MewToken.json'

const { ethereum } = window;

const web3 = new Web3(Web3.givenProvider || "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
const token = new web3.eth.Contract(MewToken,'0xFb7628067f0821938fE6d388Cd3cAF71dD88636B')

function User() {
    const [account, setAccount] = useState('0x00')
    const [wallet, setWallet] = useState('false')
    const [toAccount, setToAccount] = useState('0x00')
    const [x,xx] = useState('x')
    const [name, setName]=useState('kim')
    const [balance, setBanlance] = useState(0)

    const callApi = () =>{
        fetch("http://localhost:5000/staff").then(res => res.text()).then(res => xx(res))
    }

    function post(){
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({StaffName: name,StaffAddress:account})
        };
        fetch("http://localhost:5000/staff", requestOptions)
        console.log(name, account)
    }


    const isMetaMaskInstalled = () => {

        if(ethereum && ethereum.isMetaMask)setWallet('True');
    };

    async function requestWallet() {
        await ethereum.request({ method: 'eth_requestAccounts' });
    }
    
    async function loadBlockchainData() {
        const accounts = await web3.eth.getAccounts()
        setAccount(accounts)
    }

    function send(){
        web3.eth.sendTransaction({
            from: '0x5Bb46Ecc36DB1B4Af38eDa24e0D4633026D8AaD5',
            to: '0xEe175A703e605aDE10707f76F061d0D13cc58c8F',
            value: '1000000000000000'
        }).then(console.log)
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    function getBanlance(){
        token.methods.balanceOf('0x5Bb46Ecc36DB1B4Af38eDa24e0D4633026D8AaD5').call().then(r => setBanlance(r))
    }
    

    useEffect(() => {
        getBanlance()
        requestWallet()
        isMetaMaskInstalled()
        loadBlockchainData()
    }, [])

    return (
        <>
            <div>
                {balance}
            </div>
            <div>
                {account}
            </div>
            <div>
                {wallet}
            </div>
            <div>
                {x}
            </div>
            <div>
                {name}
            </div>
            <input onChange={handleChange}></input>
            {/* <button onClick={callApi}>get</button> */}
            <button onClick={send}>send</button>
        </>
    )
}

export default User