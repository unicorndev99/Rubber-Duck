import React, { Component } from 'react'
import AwesomeSwiper from 'react-awesome-swiper';
import './index.css'
const config = {
    loop : true,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 18,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }
  };

class Introduction extends Component {
    render() {
        return (
            <div className="introduction pt-20 pb-5" >
               <div className="w-container">
                   <h1 id="aboutSection" className="section-heading">Welcome </h1>
                   <p className="paragraph-5 text-white">The Rubber Duck is a collection of 10,000 rubber ducks living on the Ethereum Blockchain.<br />each rubber duck are designed in 3D with more than 130 elements.
                   <br />A big lottery will be launched for all Rubber Duck holders <br />with a cash prize of 90 ethereum,divided into 60 prizes of 1,5 ethereum.pick me,pick me !!!</p>
                </div>
                <AwesomeSwiper config={config} className="mt-12">
                    <div className="swiper-wrapper">
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                                <div key={i} className="swiper-slide">
                                    <img src={`/images/RubberDuck${i + 1}.png`}/>
                                </div>
                            ))
                        }
                       
                    </div>
                </AwesomeSwiper>
                <div className="d-block mt-10">
                    <hr />
                </div>
               
            </div>
        )
    }
}

export default Introduction