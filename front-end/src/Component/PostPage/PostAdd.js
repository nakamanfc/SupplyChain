import React from 'react'
import '../../Style/PostAdd.css'
import CircularProgress from '@material-ui/core/CircularProgress'

function PostAdd({createProcess,setName,setCode,setWeight,loadingCircle,name,code,weight}) {
    function ChangeName(event){
        setName(event.target.value);
    }
    function ChangeCode(event){
        setCode(event.target.value);
    }
    function ChangeWeight(event){
        setWeight(event.target.value)
    }
    return (
        <div className='postbody-box-right-back'>
            <div className='postbody-box-right-title'>
                Add Infomation
            </div>
            <div className='postbody-box-right-content'>
                <div>
                    <input className='postbody-input' placeholder="ProductName" onChange={ChangeName} value={name}/>
                </div>
                <div>
                    <input className='postbody-input' placeholder="Code" onChange={ChangeCode} value={code}/>
                </div>
                <div>
                    <input className='postbody-input' placeholder="Weight" onChange={ChangeWeight} value={weight}/>
                </div>
                {loadingCircle?
                (
                    <CircularProgress style={{color:'#2D312F'}}/>
                ):(
                    <button className='postbody-button' onClick={createProcess}>Send</button>
                )}

            </div>
        </div>
    )
}

export default PostAdd
