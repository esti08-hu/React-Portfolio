import React from 'react'
import "./Home.css"
import Typewriter from 'typewriter-effect';
import MyCv from "./React_Cheatsheet_Zero_To_Mastery_V1.02.pdf"

const Home = () => {
  return (
    <div className='w-full overflow-hidden home' id='home'>
      <div className='container home-content'>
        <h1>Hi I'm a </h1>
        <h2>
          <Typewriter
            options={{
              strings: [
              'Full Stack Software Developer', 
              'Python Developer',
              'Web Developer',
              'Logo Designer',
              'BackEnd Developer'
            ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <div className='btn-for-action'>
          <div className='hire-me-btn'>
            Hire Me
          </div>
          <div className='get-resume'>
            <a href={MyCv} download='Estifaons_cv.pdf'>
              Get Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home