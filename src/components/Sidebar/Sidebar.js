import React, { useState } from 'react'
import "./Sidebar.css"
import Home from '../Home/Home'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import SidebarList from './SidebarList';


const Sidebar = ({theme, changeTheme}) => {
    const [expandSidebar, setExpandSidebar] = useState(false)
    const handleExpandClick = () => {
        setExpandSidebar(!expandSidebar);
    }
    
    return (
        <div className='sidebar-section'>
            <div className={expandSidebar ? "sidebar-expand sidebar" : 'sidebar'}>
                <div className='icon-for-sidebar-expand-and-collapse'>
                    <p onClick={handleExpandClick}>{
                        expandSidebar ? (
                            <FaAngleLeft size={30} />) : (<FaAngleRight size={30} />)}</p>
                </div>

                <SidebarList expandSidebar={expandSidebar}/>
            </div>
            <div>
                <Home changeTheme = {changeTheme} theme = {theme}/>
            </div>
        </div>
    )
}

export default Sidebar

