import React from 'react'
import '../../Style/Introduce2.css'
import LittleCard from './LittleCard'

function Introduce2() {
    return (
        <div className='Introduce2-box'>
            <div className='Introduce2-box-left'>
                <img src='https://realitems.io/img/screenshots/services.png' className='body-box-1-img'/>
            </div>
            <div className='Introduce2-box-right'>
                <div className='Introduce2-box-right-back'>
                    <div className='Introduce2-box-right-title'>
                            One Scan.
                            One...
                    </div>
                    <div className='Introduce2-box-right-content'>
                        <LittleCard type='1'/>
                        <LittleCard type='2'/>
                        <LittleCard type='3'/>
                        <LittleCard type='4'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce2
