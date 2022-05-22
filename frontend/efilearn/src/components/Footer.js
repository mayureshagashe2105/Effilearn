import React from 'react'
import '../static/styles.css'


export const Footer = () => {
  return (
    <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6 footer-info">
            <h3>Effilearn</h3>
            <p>Commited to deliver high quality learning using Machine Learning to suppress any kind of noise from pre-recorded lectures to give students hassle free online learning experience. Effilearn aims to enhance the quality of online/e-learning by applying various AI/ML solutions, thereby trying to give a new and improved learning experience. Due to the COVID-19 Pandemic, online learning has increased exponentially, to mitigate the complexities in online learning, Effilearn is an innovative approach!</p>
          </div>

          <div className="col-lg-4 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
              <li><i className="ion-ios-arrow-right"></i> <a href="#about">About us</a></li>
              <li><i className="ion-ios-arrow-right"></i> <a href="#services">Services</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              XXXXXXXXX <br/>
              YYYYYYY<br/>
              ZZZZZZ <br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>

            <div className="social-links">
              <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
              <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
              <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
              <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
              <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
            </div>

          </div>

          

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright 2022 <strong>Effilearn</strong>. All Rights Reserved
      </div>
      <div className="credits">
        <a href='#'><i className='fa fa-github'> Effilearn</i></a>
      </div>
    </div>
  </footer>

  
  )
}
