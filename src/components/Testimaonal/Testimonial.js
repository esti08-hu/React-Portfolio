import React from 'react'
import "./Testimonual.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileImg from "../Images/profile.png"
import { Zoom } from 'react-reveal';

function Testimonial() {
  const data = [
    {
      name: "Jhon Tod",
      position: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: ProfileImg
    },
    {
      name: "Jhon Tod",
      position: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: ProfileImg
    },
    {
      name: "Jhon Tod",
      position: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: ProfileImg

    },
    {
      name: "Jhon Tod",
      position: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: ProfileImg

    }
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    row: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className='testimonial-section mt-10' id='testimonial'>
      <div class="flex flex-col items-center justify-center mb-4 text-2xl font-bold">
                <h5>Testimonial</h5>
                <span class="block h-2 bg-gray-400 flex-grow w-12 rounded-full"></span>
            </div>
      <div className='testimonial'>

        <Slider {...settings}>
          {
            data.map((item, index) => (
              <Zoom>
                
              <div className='testimonial-section-main '>
                <div className="slider-content" key={index}>

                  <img src={item.img} alt='testimonial img' className='testimonial-img' />
                  <p>{item.description}</p>
                  <h3>{item.name}</h3>
                  <h4>{item.position}</h4>
                </div>
              </div>
              </Zoom>
            ))
          }
        </Slider>

      </div>

    </div>
  )
}

export default Testimonial