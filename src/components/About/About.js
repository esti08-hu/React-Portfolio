// import React from 'react'
// import "./About.css"
// import PorfilePic from "../Images/profile.png"

// const About = () => {
//     return (
//         <div className="container about-section py-12 px-4 grid grid-cols-1 sm:grid-cols-2 gap-4" id='about'>
//             <div className="about-image-container flex flex-col items-center justify-center">
//                 <div className="about-image w-50 h-50 overflow-hidden">
//                     <img src={PorfilePic} alt="profile-pic" />
//                 </div>
//             </div>
//             <div className='flex flex-col items-center justify-center'>
//                 <div className='about-details'>
//                     <div class="flex flex-col items-center justify-center mb-4 text-2xl font-bold">
//                         <h5 class="text-gray-900">About Me</h5>
//                         <span class="block h-2 bg-gray-400 flex-grow w-10 rounded-full"></span>
//                     </div>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat. Sagittis nisl rhoncus mattis rhoncus urna. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sodales neque sodales ut etiam sit. Vulputate odio ut enim blandit. Non diam phasellus vestibulum lorem sed risus. Elit ullamcorper dignissim cras tincidunt lobortis. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Malesuada pellentesque elit eget gravida cum. Dolor sit amet consectetur adipiscing elit. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Dolor purus non enim praesent elementum facilisis leo.</p>
//                 </div>

//             </div>
//         </div>

//     )
// }

// export default About

import React from 'react';
import './About.css';
import PorfilePic from '../Images/profile.png';

const About = () => {
  return (
    <div className="container about-section py-12 px-4 grid grid-cols-1 sm:grid-cols-2  grid-template-columns-1fr 3fr gap-4" id="about">
      <div className="about-image-container">
        {/** Ensure consistent image size across viewports */}
        <div className="about-image md:w-48 md:h-48 overflow-hidden">
          <img src={PorfilePic} alt="profile-pic" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="about-details">
          <div className="flex flex-col items-center justify-center mb-4 text-2xl font-bold">
            <h5 className="text-gray-900">About Me</h5>
            <span className="block h-2 bg-gray-400 flex-grow w-10 rounded-full"></span>
          </div>
          {/** Wrap long paragraphs for better readability */}
          <p className='about-me-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat. Sagittis nisl rhoncus mattis rhoncus urna. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sodales neque sodales ut etiam sit. Vulputate odio ut enim blandit. Non diam phasellus vestibulum lorem sed risus. Elit ullamcorper dignissim cras tincidunt lobortis. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Malesuada pellentesque elit eget gravida cum. Dolor sit amet consectetur adipiscing elit. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Dolor purus non enim praesent elementum facilisis leo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
