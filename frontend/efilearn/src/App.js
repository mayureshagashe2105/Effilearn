import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import {File_upload} from './components/File_upload'
import { Services } from './components/Services';
import { AboutUs } from './components/AboutUs';
import { API_Services } from './components/API_Services'

import './loader.js';
import './static/main.js';
import { AuthPage } from './components/AuthPage';
import { ContentUpload } from './components/ContentUpload';
import { VideoTile } from './components/VideoTile';






function App(){
  return (
    <>
    <Router>
      
        <Routes> 
          <Route path='/' element={<><Navbar styleid='intro'/><Services/><AboutUs/><API_Services/></>}></Route> 
          {/* <Route path='/HVT_identity' element={<><Navbar styleid='hvt'/><File_upload /></>}></Route> */}
          <Route path='/adminAuth' element={<><Navbar styleid='hvt'/><AuthPage/></>}></Route>
          <Route path='/admin/content' element={<><Navbar styleid='hvt'/><ContentUpload/></>}></Route>
          <Route path='/video_lectures' element={<><Navbar styleid='hvt'/><VideoTile/></>}></Route>


        
        </Routes>
    </Router>
    <Footer />
    </>

  );
}

export default App;
