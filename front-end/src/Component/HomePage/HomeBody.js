import React from 'react'
import "../../Style/HomeBody.css"
import BodyButton from '../Button/BodyButton'
import Introduce from './Introduce'
import Introduce2 from './Introduce2'


function HomeBody({clickToAccount}) {
    return (
        <>
            <div className='body-container'>
                <div className='body-box-1'>
                    <div className='body-box-1-content-box'>
                        <div className='body-box-1-title-left'>
                            <div className='body-box-1-title-text'>
                                <div>Real Items</div>
                                <div>Transparent Process</div>
                                <div>Join Now.</div>
                            </div>
                            <div className='body-box-1-title-button'>
                                <BodyButton clickToAccount={clickToAccount} text='Join With Us' type='true'/>
                                <BodyButton text='White Paper'/>
                                <BodyButton text='Explore'/>
                            </div>
                        </div>
                        <div className='body-box-1-title-right'>
                            <img src='https://realitems.io/img/blockchain-digital-receipt.png' className='body-box-1-img'/>
                        </div>
                    </div>
                </div>
                <div className='body-box-2'>
                    <Introduce/>
                </div>
                <div className='body-box-3'>
                    <Introduce2/>
                </div>
                <div className='body-box-4'>
                </div>
            </div>
        </>
    )
}

export default HomeBody
