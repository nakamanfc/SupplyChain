import React from 'react'
import '../../Style/DetailBody.css'

function DetailBody({db}) {
    return (
        <div className='detail-container'>
            <div className='detail-box'>
                <div className='detail-title'>
                    Detail Process
                </div>
                <div className='detail-data-box'>
                <div className='detail-img-box'>
                    <img className='detail-img' src={`https://ipfs.io/ipfs/${db.image}`}/>
                </div>
                <div className='detail-content'>
                    <div>
                        ID
                    </div>
                    <div>
                        Product Name
                    </div>
                    <div>
                        Company Name
                    </div>
                    <div>
                        Staff Name
                    </div>
                    <div>
                        TXhash
                    </div>
                    <div>
                        Code
                    </div>
                    <div>
                        Weight
                    </div>
                    <div>
                        Time
                    </div>
                    <div>
                        Status
                    </div>
                </div>
                <div className='detail-data'>
                    <div>
                        {db.id}
                    </div>
                    <div>
                        {db.name}
                    </div>
                    <div>
                        Trí Nam
                    </div>
                    <div>
                        {db.staff}
                    </div>
                    <div>
                        {db.txhash}
                    </div>
                    <div>
                        {db.processcode}
                    </div>
                    <div>
                        {db.weight}
                    </div>
                    <div>
                        {db.time}
                    </div>
                    <div>
                        Done
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DetailBody
