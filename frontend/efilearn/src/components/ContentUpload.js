import React from 'react'
import { useState } from 'react'

import '../static/admincontent.css'
import '../static/AuthPage.css'

import uploadvidimg from '../images/upload_video.png'


export const ContentUpload = () => {
    const [validationData, setValidationData] = useState([]);
    const [formdata, setFormData] = useState({'vid':'', 'title': '', 'desc': ''})


    const handlechage = async (e)=>{
        console.log('-_-');
        e.preventDefault()
        const userdata = new FormData(document.getElementById('admin_upload_form'));
        const back = new FormData();

        // const file = e.target.files[0];
        // const title = e.target.files[1];
        // const desc = e.target.files[2];
        console.log(userdata.get('title'));
        setFormData({'vid':userdata.get('formFile'), 'title': userdata.get('title'), 'desc': userdata.get('desc')})
        back.append('vid', formdata['vid']);
        back.append('title', formdata['title']);
        back.append('desc', formdata['desc']);
        console.log('----')
        console.log(back.get('desc'))



            const settings = {
            method: 'POST',
            body: back
        };

        let newURL = `http://localhost:5000/fw/content_upload`
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



  return (
    <div className="pagebody">

        <div className="form-container">
            <div className="form-body">
            
            <form id='admin_upload_form' onSubmit={handlechage}>
            <div className="_or"><img src={uploadvidimg}/></div>
            <div className="_or"><h2>Upload Video Files Here</h2></div>
            <hr className='hr-login'/>

            <div className="mb-3">
            <center><input className="form-control" type="file" id="formFile" name='formFile' required="required"/></center>
            </div>

            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" placeholder="Title" name='title' required="required"/>
            </div>
            <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Description of Video</label>
            <textarea className="form-control" id="desc" rows="3" placeholder="Description" name='desc' required="required"></textarea>
            </div>
            <center><button type='submit' className='btn btn-outline-primary'>Upload</button></center>
            </form>



            </div>
        </div>

    </div>
  )
}
