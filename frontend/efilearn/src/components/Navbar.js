import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../static/styles.css'
import $ from 'jquery';
import jQuery from 'jquery';

import WOW from 'wowjs';

import img1 from '../images/intro-carousel/1.jpg'
import img2 from '../images/intro-carousel/2.jpg'
import img3 from '../images/intro-carousel/3.jpg'
import img4 from '../images/intro-carousel/4.jpg'
import img5 from '../images/intro-carousel/5.jpg'




export const Navbar = (props) => {
  useEffect (()=>{
    new WOW.WOW({
      live: false
  }).init();
  
  });
  jQuery(document).ready(function(){
    jQuery('.nav-menu').superfish({
      animation: {
        opacity: 'show'
      },
      speed: 400
    });
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });


  jQuery(document).ready(function( $ ) {

   


// Smooth scroll for the menu and links with .scrollto classes
$('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
  if (window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && window.location.hostname == this.hostname) {
    var target = $(this.hash);
    if (target.length) {
      var top_space = 0;

      if ($('#header').length) {
        top_space = $('#header').outerHeight();

        if( ! $('#header').hasClass('header-fixed') ) {
          top_space = top_space - 20;
          console.log(top_space+ "sdsfsdf");
        }
      }

      $('html, body').animate({
        scrollTop: target.offset().top - top_space
      }, 1500, 'easeInOutExpo');

      if ($(this).parents('.nav-menu').length) {
        $('.nav-menu .menu-active').removeClass('menu-active');
        $(this).closest('li').addClass('menu-active');
      }

      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
        $('#mobile-body-overly').fadeOut();
      }
      return false;
    }
  }
});

// Header scroll class
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  } else {
    $('#header').removeClass('header-scrolled');
  }
});

// Intro carousel
var introCarousel = $(".carousel");
var introCarouselIndicators = $(".carousel-indicators");
introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
  (index === 0) ?
  introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
  introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
});

$(".carousel").swipe({
  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');
  },
  allowPageScroll:"vertical"
});
    // Mobile Navigation
    if ($('#nav-menu-container').length) {
      var $mobile_nav = $('#nav-menu-container').clone().prop({
        id: 'mobile-nav'
      });
      $mobile_nav.find('> ul').attr({
        'class': '',
        'id': ''
      });
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
      $('body').append('<div id="mobile-body-overly"></div>');
      $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');
  
      $(document).on('click', '.menu-has-children i', function(e) {
        e.preventDefault();
        $(this).next().toggleClass('menu-item-active');
        $(this).nextAll('ul').eq(0).slideToggle();
        $(this).toggleClass("fa-chevron-up fa-chevron-down");
      });
  
      $(document).on('click', '#mobile-nav-toggle', function(e) {
        e.preventDefault();

        $('body').toggleClass('mobile-nav-active');
        $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
        $('#mobile-body-overly').toggle();
      });
  
      $(document).click(function(e) {
        e.preventDefault();

        var container = $("#mobile-nav, #mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').fadeOut();
          }
        }
      });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
      $("#mobile-nav, #mobile-nav-toggle").hide();
    }
  });
  

    return (
      <>
      <header id="header">
      <div className="container-fluid">
  
        <div id="logo" className="pull-left">
          <h1><a href="#intro" className="scrollto">Effilearn</a></h1>
        </div>
  
        <nav id='nav-menu-container'>
          <ul className="nav-menu">
            <li className="menu-active"><Link to='/'>Home</Link></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </nav>
      </div>
    </header>
    {props.styleid === 'hvt' ? console.log('using new styleid'):

<section id="intro">
<div className="intro-container">
  <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">

    <ol className="carousel-indicators">
      

    </ol>

    <div className="carousel-inner" role="listbox">

      <div className="carousel-item active" style={ style1 }>
        <div className="carousel-container">
          <div className="carousel-content">
            <h2>We are Effilearn</h2>
            <p>Commited to deliver high quality learning using Machine Learning to suppress any kind of noise from pre-recorded lectures to give students hassle free online learning experience</p>
            <a href="#services" className="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
      </div>

      <div className="carousel-item" style={ style2 }>
        <div className="carousel-container">
          <div className="carousel-content">
            <h2>Secured Portal for Faculties</h2>
            <p>We here @ Effilearn, provides real time face recognition systems to authenticate faculties. Only authenticated faculties can push the new materials and videos!</p>
            <a href="#services" className="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
      </div>

      <div className="carousel-item" style={ style3 }>
        <div className="carousel-container">
          <div className="carousel-content">
            <h2>Scalable and User-Freindly</h2>
            <p>Due to the independed backend and frontend, this website is highly Scalable</p>
            <a href="services" className="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
      </div>

      <div className="carousel-item" style={ style4 }>
        <div className="carousel-container">
          <div className="carousel-content">
            <h2>Production Level Architecture</h2>
            <p>All the machine learning models used for this product are saved on a backend server which provides an inference at each API call. API has been carefully designed with Flask micro-service to achieve highly robust server framework</p>
            <a href="#services" className="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
      </div>

      <div className="carousel-item" style={ style5 }>
        <div className="carousel-container">
          <div className="carousel-content">
            <h2>Innovation</h2>
            <p>This product is an effort towards enhancement of online learning</p>
            <a href="services" className="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
      </div>

    </div>

    <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>

    <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>

  </div>
</div>
</section>
}
</>




    )
}

var style1 = {
  backgroundImage: `url(${img1})`
};

var style2 = {
  backgroundImage: `url(${img2})`
};

var style3 = {
  backgroundImage: `url(${img3})`
};

var style4 = {
  backgroundImage: `url(${img4})`
};

var style5 = {
  backgroundImage: `url(${img5})`
};