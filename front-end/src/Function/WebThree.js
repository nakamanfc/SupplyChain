import Web3 from 'web3'
import CompanyJson from '../abi/Company.json'
import StaffJson from'../abi/Staff.json'
import ProcessJson from'../abi/Process.json'

const CompanyContract = '0xec5dBb003D95b205EFE6899d3f41B18fbb934855'
const StaffContract = '0xc3426eC6c3E3BcD34E5e7f36a48722DAc9C7cd99'
const ProcessContract = '0x28E4284d7908d3735C49F325293f970FB1edCA13'

const web3 = new Web3("http://127.0.0.1:8545")
const wallet = web3.eth.accounts.wallet;

function createAccount(entropy){
    const data = web3.eth.accounts.create(entropy)
    return data
}

function companyContract(){
    const data = new web3.eth.Contract(CompanyJson,CompanyContract)
    return data
}

function staffContract(){
    const data = new web3.eth.Contract(StaffJson,StaffContract)
    return data
}

function processContract(){
    const data = new web3.eth.Contract(ProcessJson,ProcessContract)
    return data
}

function setAccount(key){
    try {
        wallet.add(key)
        console.log(wallet)
    } catch (error) {
        console.log(error)
    }
}


export default {
    createAccount,
    companyContract,
    setAccount,
    staffContract,
    processContract
};