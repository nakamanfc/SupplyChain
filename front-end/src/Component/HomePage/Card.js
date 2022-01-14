import React from 'react'
import '../../Style/Card.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';

function Card({type}) {
    if(type == 1){
        return (
            <div className='Card-box'>
                <div className='Card-icon'>
                    <SentimentSatisfiedAltIcon style={{ fontSize: 100 }}/>
                </div>
                <div className='Card-title'>
                    Simple, user-friendly application
                </div>
                <div className='Card-content'>
                    You don't need a blockchain degree to implement our technology, and your customers don't need one to know their purchases are safe and real.
                </div>
            </div>
        )
    }
    if(type == 2)
    {
        return (
            <div className='Card-box'>
                <div className='Card-icon'>
                    <ShoppingCartIcon style={{ fontSize: 100 }}/>
                </div>
                <div className='Card-title'>
                    Omnichannel retail with cloud transparency
                </div>
                <div className='Card-content'>
                    Customers can pay with cryptocurrency and trace the origin of goods before intending to buy with ease and transparency.
                </div>
            </div>
        )
    }
    if(type == 3)
    {
        return (
            <div className='Card-box'>
                <div className='Card-icon'>
                    <PeopleAltIcon style={{ fontSize: 100 }}/>
                </div>
                <div className='Card-title'>
                    Connect you customers and partners
                </div>
                <div className='Card-content'>
                    Partners and customers easily track, know who processes their orders and evaluate after receiving that order.
                </div>
            </div>
        )
    }
}

export default Card