import React from 'react'
import '../../Style/LittleCard.css'
import CropFreeIcon from '@material-ui/icons/CropFree';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AddCommentIcon from '@material-ui/icons/AddComment';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

function LittleCard({type}) {
    if(type==1){
        return (
            <div className='littlecard-box'>
                <div className='littlecard-box-icon'>
                    <CropFreeIcon style={{ fontSize: 60 }}/>
                </div>
                <div className='littlecard-box-r'>
                    <div className='littlecard-box-title'>
                        Seek An Origin.
                    </div>
                    <div className='littlecard-box-content'>
                        Traceability and production process from blockchain network.
                    </div>
                </div>
            </div>
        )
    }
    if(type==2){
        return (
            <div className='littlecard-box'>
                <div className='littlecard-box-icon'>
                    <NoteAddIcon style={{ fontSize: 60 }}/>
                </div>
                <div className='littlecard-box-r'>
                    <div className='littlecard-box-title'>
                        Seek An Origin.
                    </div>
                    <div className='littlecard-box-content'>
                        Traceability and production process from blockchain network.
                    </div>
                </div>
            </div>
        )
    }
    if(type==3){
        return (
            <div className='littlecard-box'>
                <div className='littlecard-box-icon'>
                    <LocalShippingIcon style={{ fontSize: 60 }}/>
                </div>
                <div className='littlecard-box-r'>
                    <div className='littlecard-box-title'>
                        Seek An Origin.
                    </div>
                    <div className='littlecard-box-content'>
                        Traceability and production process from blockchain network.
                    </div>
                </div>
            </div>
        )
    }
    if(type==4){
        return (
            <div className='littlecard-box'>
                <div className='littlecard-box-icon'>
                    <AddCommentIcon style={{ fontSize: 60 }}/>
                </div>
                <div className='littlecard-box-r'>
                    <div className='littlecard-box-title'>
                        Seek An Origin.
                    </div>
                    <div className='littlecard-box-content'>
                        Traceability and production process from blockchain network.
                    </div>
                </div>
            </div>
        )
    }

}

export default LittleCard
