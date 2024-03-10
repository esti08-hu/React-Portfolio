import React from 'react'
import "./SidebarList.css"
import profilepic from "../Images/profile.png"
import {
    FcHome,
    FcNightPortrait,
    FcTodoList,
    FcContacts,
    FcSalesPerformance,
    FcFactory,
    FcQuestions,
    FcPieChart
} from "react-icons/fc";
import { Link } from 'react-scroll';

const SidebarList = ({ expandSidebar }) => {
    return (
        <React.Fragment>

            {expandSidebar ? (<div className='navbar-items'>
                <div className='sidebar-profile-pic'>
                    <img src={profilepic} alt='Profile-pic' />
                </div>
                <div className='navbar-items-icons-and-text'>
                    <ul>
                        <li className='nav-item'><Link smooth={true} spy={true} offset={-50} to='home' className='nav-bar-item-link'><FcHome size={25} /> <p>Home</p></Link></li>
                        <li className='nav-item'><Link smooth={true} spy={true} offset={-50} to="about" className='nav-bar-item-link'><FcNightPortrait size={25} />About</Link></li>
                        <li className='nav-item'><Link smooth={true} spy={true} offset={-50} to="tech-stack" className='nav-bar-item-link'><FcPieChart size={25} />Tech Stack</Link></li>
                        <li className='nav-item'><Link smooth={true} spy={true} offset={-50} to="projects" className='nav-bar-item-link'><FcTodoList size={25} />Projects</Link></li>
                        <li className='nav-item'><Link smooth={true} spy={true} offset={-50} to="work-experience" className='nav-bar-item-link'><FcFactory size={25} /> Work Experience</Link></li>
                        <li className='nav-item'><Link smooth={true} spy={true} offset={-50} to="education" className='nav-bar-item-link'><FcQuestions size={25} />Education</Link></li>
                        <li className='nav-item'><Link smooth={true} spy={true} offset={-50} to="testimonial" className='nav-bar-item-link'><FcSalesPerformance size={25} />Testimonial</Link></li>
                        <li className='nav-item'><Link smooth={true} spy={true} offset={-50} to="contact" className='nav-bar-item-link'><FcContacts size={25} /> Contact</Link></li>
                    </ul>
                </div>

            </div>) : (
                <div className='navbar-items-only-icons'>
                    <lu>
                    <li className='nav-item'><Link smooth={true} spy={true} offset={-50} to='home' className='nav-bar-item-link'><FcHome size={25} /></Link></li>
                    <li className='nav-item'><Link smooth={true} spy={true} offset={-50} to='about' className='nav-bar-item-link'><FcNightPortrait size={25} /></Link></li>
                    <li className='nav-item'><Link smooth={true} spy={true} offset={-50} to='tech-stack' className='nav-bar-item-link'><FcPieChart size={25} /></Link></li>
                    <li className='nav-item'><Link smooth={true} spy={true} offset={-50} to='projects' className='nav-bar-item-link'><FcTodoList size={25} /></Link></li>
                    <li className='nav-item'><Link smooth={true} spy={true} offset={-50} to='work-experience' className='nav-bar-item-link'><FcFactory size={25} /></Link></li>
                    <li className='nav-item'><Link smooth={true} spy={true} offset={-50} to='education' className='nav-bar-item-link'><FcQuestions size={25} /></Link></li>
                    <li className='nav-item'><Link smooth={true} spy={true} offset={-50} to='testimonial' className='nav-bar-item-link'><FcSalesPerformance size={25} /></Link></li>
                    <li className='nav-item'><Link smooth={true} spy={true} offset={-50} to='contact' className='nav-bar-item-link'><FcContacts size={25} /></Link></li>
                </lu>
                </div>
    )
}
        </React.Fragment >

    )
}

export default SidebarList