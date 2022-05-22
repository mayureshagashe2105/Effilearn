import React from 'react'
import abtmission from '../images/about-mission.jpg'
import abtplan from '../images/about-plan.jpg'
import abtvision from '../images/about-vision.jpg'
import '../static/styles.css'



export const AboutUs = () => {
  return (
      <>
    <main id="main">
            <section id="about">
      <div className="container">

        <header className="section-header">
          <h3>About Us</h3>
          <p>Effilearn aims to enhance the quality of online/e-learning by applying various AI/ML solutions, thereby trying to give a new and improved learning experience. Due to the COVID-19 Pandemic, online learning has increased exponentially, to mitigate the complexities in online learning, Effilearn is an innovative approach!</p>
        </header>

        <div className="row about-cols">

          <div className="col-md-4 wow fadeInUp">
            <div className="about-col">
              <div className="img">
                <img src={abtmission} alt="" className="img-fluid"/>
                <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
              </div>
              <h2 className="title"><a href="#">Our Mission</a></h2>
              <p>
                To make E-Learning more efficient by introducing ML solutions to the commonly faced problems!
              </p>
            </div>
          </div>

          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="about-col">
              <div className="img">
                <img src={abtplan} alt="" className="img-fluid"/>
                <div className="icon"><i className="ion-ios-list-outline"></i></div>
              </div>
              <h2 className="title"><a href="#">Our Plan</a></h2>
              <p>
              The institutes who prefer pre-recorded lectures often lack infrastructures or auditoriums to record these lectures in a quiet place. Effilearn eliminates the need of such sophesticated infrastructure by using noise suppression technology. With this product, faculties can record their lectures at the comfort of their home without worrying about the background noise! 
              
              </p>
            </div>
          </div>

          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="about-col">
              <div className="img">
                <img src={abtvision} alt="" className="img-fluid"/>
                <div className="icon"><i className="ion-ios-eye-outline"></i></div>
              </div>
              <h2 className="title"><a href="#">Our Vision</a></h2>
              <p>
              Aimimng towards the pre-recorded lectures, our plan is to  make them noise free, for blissful learning!
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

    </main>
    </>
  )
}
