import React from 'react'
import Webcam from "react-webcam";
import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

import '../static/AuthPage.css';
import login_img from '../images/loginimageauth.jpg'

export const AuthPage = () => {

  const navigate= useNavigate();
  const [validationdesc, setValidationdesc] = useState([]);
  const [formData, setFormData] = useState({'image': ''});

  const videoConstraints = {
    width: 350,
    height: 350,
    facingMode: "user"
  };

  const screenshotFormat = "image/jpeg";
  
    
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc != null)
      {
        setFormData({'image': imageSrc});
      console.log('df')
      console.log(formData);
      captureafter();
      }
    },
  );
  const captureafter = async (e) => {
      console.log('in');
      
        const settings = {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
           
        }
          
      };
      let newURL = `http://localhost:5000/fw/adminAuth`
        const fetchResponse = await fetch(newURL, settings);
        const data = await fetchResponse.json();
        if(data?.status == 'success'){
            setValidationdesc(data.message);
            console.log('GOT THE DATA FROM BACKEND')
            console.log(data.message)
            if (data?.message[0] === 'Authenticated')
            {
              console.log('auth');
              navigate('/admin/content')
            }
        }
        else if(data?.status == 'verified'){
        }
    
      
      
    };


  return (
    <div className='authbody'>
        <div><div className="main-container">
        <div className="form-container">


        <div className="form-body">

            <div className="_or"><img src={login_img}/></div>
            
            <div className="_or"><h2>Admin Authenticarion</h2></div>
            <hr className='hr-login'/>
            
            <div className='vid-stream-container'>
            <Webcam
        audio={false}
        height={350}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={350}
        videoConstraints={videoConstraints}
        >
        
          </Webcam>
</div>
          <center><button onClick={capture} type='submit' className='btn btn-outline-primary'>Capture photo</button></center>
              
  
          </div>
      

    </div>
</div>
</div>
</div>
  )
}


