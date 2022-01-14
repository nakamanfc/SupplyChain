import React from 'react'
import '../../Style/BodyButton.css'

function BodyButton({text, type, clickToAccount}) {
    return (
        <>
        {type?(
        <div className='BodyButton-box-1' onClick={clickToAccount}>
            {text}
        </div>
        ):(
        <div className='BodyButton-box'>
            {text}
        </div>
        )}
        </>
    )
}

export default BodyButton
