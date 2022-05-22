import React from 'react'
import '../static/styles.css'




export const Services = () => {
  return (
    <>
    <main id="main">
    <section id="featured-services">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 box">
            <i className="ion-ios-bookmarks-outline"></i>
            <h4 className="title"><a href="">De-Noised Video Lectures</a></h4>
            <p className="description">High Quality video lectures</p>
          </div>

          <div className="col-lg-4 box box-bg">
            <i className="ion-ios-stopwatch-outline"></i>
            <h4 className="title"><a href="">Secured Portal</a></h4>
            <p className="description">Face recognition authentication</p>
          </div>

          <div className="col-lg-4 box">
            <i className="ion-ios-heart-outline"></i>
            <h4 className="title"><a href="">Online Attendance(Under development)</a></h4>
            <p className="description">Face Recognition Systems logs the attendace</p>
          </div>

        </div>
      </div>
    </section>
    </main>
    </>
    
  )
}

