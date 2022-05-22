import React from 'react'
import '../static/styles.css'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import jQuery from 'jquery';
import { useEffect } from 'react'
import WOW from 'wowjs';


export const API_Services = () => {
 


  return (
      <>
    <main id="main">

    <section id="services">
      <div className="container">

        <header className="section-header wow fadeInUp">
          <h3>Services</h3>
          <p>These are the ML solutions that Effilearn offers to mitigate common problems</p>
        </header>

        <div className="row">
          <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
        <Link to='/video_lectures'>
            <div className="icon"><i className="ion-ios-analytics-outline"></i></div>
            <h4 className="title"><a href="">De-Noised Video Lectures</a></h4>
            <p className="description">High Quality video lectures by using Noise-Suppression Technology</p>
          </Link>
          </div>
          <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
            <Link to='/adminAuth'>
            <div className="icon"><i className="ion-ios-bookmarks-outline"></i></div>
            <h4 className="title"><a href="">Secured Portal</a></h4>
            <p className="description">Only authenticated faculties can create new video lectures. Face recognition technology eliminates the risk of unauthorized access!</p>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
            <div className="icon"><i className="ion-ios-paper-outline"></i></div>
            <h4 className="title"><a href="">Online Attendance(Under development)</a></h4>
            <p className="description">Face Recognition Systems logs the attendace of the student authomatically(Work in progress)</p>
          </div>
          

        </div>

      </div>
    </section>
    </main>
    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
    </>
  )
}
