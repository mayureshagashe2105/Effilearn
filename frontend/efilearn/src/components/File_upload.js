import React from 'react'
import { useState, useEffect } from 'react';

import loginimg from '../images/login.jpg'






export const File_upload = () => {
const [validationData, setValidationData] = useState([]);

const uploadFile = async (e) => {
  const file = e.target.files[0];
  if (file != null) {
    const dataimg = new FormData();
    dataimg.append('file_from_react', file);
    console.log(dataimg);
    const settings = {
      method: 'POST',
      body: dataimg,
      
  };


  let newURL = `http://localhost:5000/fw/confirmHVTidentity`
        const fetchResponse = await fetch(newURL, settings);
        const data = await fetchResponse.json();
        if(data?.status == 'success'){
            setValidationData(data.data.q);
            console.log('GOT THE DATA FROM BACKEND')
            console.log(data.data.q)
        }
        else if(data?.status == 'verified'){
        }
    
      }

}



return (
    <div>
      {/* <form>
      <input type="file" name="file" onChange={uploadFile}/>
      </form> */}

<span >
<div class="contact-form">
		<img alt="" class="avatar" src="https://i.postimg.cc/zDyt7KCv/a1.jpg"/>
		<h2>Contact Form</h2>
		<form action="">
			<p><input type="file" name="file" onChange={uploadFile}/></p>
		</form>
	</div>
  </span>
      </div>
  );
}



var stylebg = {
  backgroundImage:
  `url(${loginimg})`
}