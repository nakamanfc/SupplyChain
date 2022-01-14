import React from 'react'
import '../../Style/ProcessBody.css'
import SearchItem from '../SearchPage/SearchItem'

function ProcessBody({db}) {
    return (
        <div className='processbody-container'>
            <div className='processbody-container-title'>
                Process List
            </div>
            <div>
                {db==''?
                (
                    <>
                        <div>
                            chưa có giao dịch
                        </div>
                    </>
                ):(
                    <>
                        {db.map(db=>(
                            <SearchItem db={db}/>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default ProcessBody
