import React from 'react'
import { Link, useParams } from 'react-router-dom';

export const DownloadFilePage = (props) => {
    const {id}=useParams()
  return (
    <div className='container'>
        <h2>Download File</h2>
        <a href={`http://127.0.0.1:8080/file/${id}`} target='_blank' className='btn'>Download File</a>
    </div>
  )
}
