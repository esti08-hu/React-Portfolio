import React from 'react'
import "./NavbarMobileView.css"
import { CiMenuBurger } from "react-icons/ci";
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
import Switch from "react-switch";

function NavbarMobileView({ theme, changeTheme }) {
    const [show, setShow] = React.useState(false)
    const handleClick = ()=>{
        setShow(!show)
    }
    
    return (
        <div  className='mobile-view-navbar'>
            <div className='navbar-header'>
                <CiMenuBurger size={25} className='menuBurgerIcon' onClick={handleClick}  />

            </div>
            {
                show ? (<div className='mobile-nav'>
                <ul>
                    <li className='nav-item-mobile-view'><Link smooth={true} spy={true} offset={-50} to='home' className='nav-bar-item-link'><FcHome size={25} /> <p>Home</p></Link></li>
                    <li className='nav-item-mobile-view'><Link smooth={true} spy={true} offset={-50} to="about" className='nav-bar-item-link'><FcNightPortrait size={25} />About</Link></li>
                    <li className='nav-item-mobile-view'><Link smooth={true} spy={true} offset={-50} to="tech-stack" className='nav-bar-item-link'><FcPieChart size={25} />Tech Stack</Link></li>
                    <li className='nav-item-mobile-view'><Link smooth={true} spy={true} offset={-50} to="projects" className='nav-bar-item-link'><FcTodoList size={25} />Projects</Link></li>
                    <li className='nav-item-mobile-view'><Link smooth={true} spy={true} offset={-50} to="work-experience" className='nav-bar-item-link'><FcFactory size={25} /> Work Experience</Link></li>
                    <li className='nav-item-mobile-view'><Link smooth={true} spy={true} offset={-50} to="education" className='nav-bar-item-link'><FcQuestions size={25} />Education</Link></li>
                    <li className='nav-item-mobile-view'><Link smooth={true} spy={true} offset={-50} to="testimonial" className='nav-bar-item-link'><FcSalesPerformance size={25} />Testimonial</Link></li>
                    <li className='nav-item-mobile-view'><Link smooth={true} spy={true} offset={-50} to="contact" className='nav-bar-item-link'><FcContacts size={25} /> Contact</Link></li>
                    <li className='nav-item-mobile-view toggle'><Switch onChange={changeTheme} checked={theme==="dark"} /></li>

                </ul>

            </div>) : null
            }

        </div>
    )
}

export default NavbarMobileView