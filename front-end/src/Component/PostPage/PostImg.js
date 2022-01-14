import React, { useState } from 'react'
import '../../Style/PostImg.css'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import IPFS from 'ipfs-api'
import CircularProgress from '@material-ui/core/CircularProgress'
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

function PostImg({image,setImage}) {
    const [loading,setLoading] = useState(false)
    async function captureFile(event) {
        setLoading(true)
        event.preventDefault()
        const file = event.target.files[0]
        const reader = await new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => {
          setImage(Buffer(reader.result))
        ipfs.files.add(Buffer(reader.result), (error, result) => {
            if(error){
              console.log(error)
            }
            console.log(result[0].hash)
            setImage(result[0].hash)
            setLoading(false)
          })
        }
      }
    return (
        <>
        {image!=null?
        (
            <>
                {loading?
                (
                    <>
                        <div className='postimg-box' for="input-imagee">
                            <CircularProgress style={{color:'#2D312F'}}/>
                        </div>
                    </>
                ):(
                    <>
                        <input type='file' accept='image/*' id="input-imagee" hidden onChange={captureFile}/>
                        <label className='postimg-img-box' for="input-imagee">
                            <img className='postimg-img' src={`https://ipfs.io/ipfs/${image}`}/>
                        </label>
                    </>
                )}
            </>
        ):(
            <>
            <input type='file' accept='image/*' id="input-image" hidden onChange={captureFile}/>
            <label for="input-image" className='postimg-box'>
                <AddPhotoAlternateIcon style={{fontSize: 200}}/>
            </label>
            </>
        )}
        </>
    )
}

export default PostImg
