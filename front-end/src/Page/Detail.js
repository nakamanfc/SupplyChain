import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import DetailBody from '../Component/DetailPage/DetailBody'

function Detail() {
    const [db,setDb] = useState(null)
    async function getData(){
        var url_string = window.location.href;
        var url = new URL(url_string);
        var id = url.searchParams.get("id");
        await fetch(`http://localhost:5000/process/${id}`)
        .then(res => res.json())
        .then(res => {
            setDb(res[0])
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            {db==null?
            (
                <div>dang tai</div>
            ):(
                <>
                    <DetailBody db={db}/>
                </>
            )}
        </>
    )
}

export default Detail
