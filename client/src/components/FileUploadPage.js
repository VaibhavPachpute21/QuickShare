import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { sendFile } from '../Services/APIs'
import { FileLinksSection } from './FileLinksSection';
import Loader from './Loader';

export const FileUpload = () => {
    const fileUploadRef = useRef();
    const [file, setFile] = useState(null)
    const [dLink, setDLink] = useState('');
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const dropHandler = (ev) => {
        console.log("File(s) dropped");
        ev.preventDefault();
        if (ev.dataTransfer.items) {
            [...ev.dataTransfer.items].forEach((item, i) => {
                if (item.kind === "file") {
                    const file = item.getAsFile();
                    console.log(`… file[${i}].name = ${file.name}`);
                }
            });
        } else {
            [...ev.dataTransfer.files].forEach((file, i) => {
                console.log(`… file[${i}].name = ${file.name}`);
            });
        }
    }

    function dragOverHandler(ev) {
        console.log("File(s) in drop zone");
        ev.preventDefault();
    }


    const sendMyFiles = async () => {
        if (file != null) {
            const data = new FormData()
            data.append('name', file.name)
            data.append('file', file)
            setLoading(true)
            const res = await sendFile(data)
            console.log(res)
            if (res.status == 200) {
                setDLink(`https://quickshareweb.onrender.com/download/${res.data.path}`)
                setLoading(false)
            } else {
                setError(res.data.error || "Error occured")
                setLoading(false)
            }
            console.log(res)
        }
    }

    useEffect(() => {
        sendMyFiles()
    }, [file])


    return (
        <>
            <ul class="background">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className='container text-center outercontainer '>
                <h2 className='text-white'>QuickShare for easy and reliable file transfer</h2>

                <div className='justify-content-center innerContainer shadow'>
                    <h2>Transfer Files</h2>
                    <div
                        // id="drop_zone" onDrop={(ev) => { dropHandler(ev) }} onDragOver={(event) => { dragOverHandler(event) }}
                        className='dropbox form-control form-control-lg'>
                        <button className='btn' onClick={() => { fileUploadRef.current.click(); }}><i class="fa fa-upload"></i> Upload File</button>
                        <p>Click here to upload file</p>
                        <input type='file' className='' ref={fileUploadRef} hidden={true}
                            onChange={(e) => { setFile(e.target.files[0]) }}
                        />
                    </div>
                    <div>
                        {loading ? <div className='d-flex justify-content-center'><Loader/></div> : <></>}
                        {error == null && dLink != '' ? <FileLinksSection dLink={dLink} /> : <></>}
                        {error != null ? <p>{error}</p> : <></>}
                    </div>
                </div>
            </div>
        </>
    )
}
