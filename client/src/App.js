import { FileUpload } from './components/FileUploadPage';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { DownloadFilePage } from './components/DownloadFilePage';
function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<FileUpload />} />
    <Route path="/download/:id" element={<DownloadFilePage />} />

    </Routes>

    </>
  );
}




export default App;
