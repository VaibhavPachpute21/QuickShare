import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getFileInfo } from '../Services/APIs';
import Loader from './Loader';

export const DownloadFilePage = (props) => {
  const { id } = useParams()
  const [fileData, setData] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(true)
  const SERVER_URL = 'https://quickshare-8oxn.onrender.com';
  // const SERVER_URL = 'http://127.0.0.1:8080';

  const getFileDetails = async () => {
    setLoading(true)
    var res = await getFileInfo(id)
    // console.log(res)
    if(res){
      if (res.status == 200) {
        // console.log(res.data)
        setData(res.data)
        setSuccess(true)
      }
    }
    
    setLoading(false)
  }

  useEffect(() => {
    getFileDetails();
  }, [])




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
    <div className='container outercontainer '>
      <div className='justify-content-center innerContainer shadow'>
        <h2 className='text-center'>Download File</h2>
        <div className='dropbox form-control form-control-lg'>
          {
            loading==true ? <Loader /> :
              success == true ?
                <>
                  <a href={`${SERVER_URL}/file/${id}`} target='_blank' className='btn'>Download File <i class="fa fa-download" ></i></a>
                  <div className='container'>
                    <div className='d-block justify-content-start'>
                      <p>Name: {fileData['name']}</p>
                      <p>File Type: {fileData.type}</p>
                      <p>Size: {(fileData.size / 1048576).toFixed(3)} Mb</p>
                    </div>
                  </div>
                </> : <><h2>Data not Found</h2></>}

        </div>
      </div>
    </div>
    </>

  )
}
