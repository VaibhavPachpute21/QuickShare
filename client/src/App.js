import './App.css';
import { useEffect, useRef, useState } from 'react';
import { sendFile } from './Services/APIs'

function App() {
  const fileUploadRef = useRef();
  const [file, setFile] = useState(null)


  const sendMyFiles = async () => {
    if (file != null) {
      const data = new FormData()
      data.append('name', file.name)
      data.append('file', file)
      const res = await sendFile(data)
      console.log(res)
    }
  }

  useEffect(() => {
    sendMyFiles()
  }, [file])


  return (
    <div className='container text-center p-5 '>
      <div className='d-flex justify-content-center border border-1'>
        <div className='d-block p-5'>
          <h2 className='m-5'>QuickShare for easy and reliable file transfer</h2>
          <button className='btn btn-success m-5' onClick={() => { fileUploadRef.current.click(); }}>Upload File</button>
          <input type='file' ref={fileUploadRef} hidden={true}
            onChange={(e) => { setFile(e.target.files[0]) }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
