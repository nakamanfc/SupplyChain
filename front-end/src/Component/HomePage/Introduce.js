import React, { useEffect, useState } from 'react';
import '../../Style/Introduce.css'
import Card from './Card';

function Introduce() {
    const [offset, setOffset] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
        setOffset(window.pageYOffset)
        }
    }, []);

    if(offset >= 500 && active == false){
        setActive(true);
    }

    console.log(offset); 
    return (
        <>
            <div className='Introduce-container'>
                <div className='Introduce-content-up'>
                    <div className='Introduce-content-title'>
                        <div className='Introduce-content-title-1'>
                            Proof of Origin on the Blockchain
                        </div>
                        <div className='Introduce-content-title-2'>
                            Applying blockchain technology provides transparency, authentication, and traceability.
                        </div>
                    </div>
                </div>
                <div className='Introduce-content-down'>
                    {active ? (
                        <>
                            <Card type='1'/>
                            <Card type='2'/>
                            <Card type='3'/>
                        </>
                    ):(<></>)}
                </div>
            </div>
        </>
    )
}

export default Introduce
