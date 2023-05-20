import React from 'react'
import { Link, useParams } from 'react-router-dom';

export const DownloadFilePage = (props) => {
  const { id } = useParams()

  


  return (
    <div className='container outercontainer '>
      <div className='justify-content-center innerContainer shadow'>
        <h2 className='text-center'>Download File</h2>
        <div className='dropbox form-control form-control-lg'>
          <a href={`http://127.0.0.1:8080/file/${id}`} target='_blank' className='btn'>Download File <i class="fa fa-download" ></i></a>
          <div className='container'>
            <div className='justify-content-start'>
              <p>Name: Capture.png</p>
              <p>Size: 9343 Mb</p>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
