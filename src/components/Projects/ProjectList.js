import React, { useState } from 'react'
import { FcExpand, FcCollapse } from "react-icons/fc";
import "./Project.css"
import "./ProjectList.css"

const ProjectList = ({ name, details, project_link, techused }) => {
    const [show, setShow] = useState(false)

    const handleShowandCollapse = () => {
        setShow(!show)
    }


    return (

        <div className={show ? "project-list-opened project-list" : 'project-list'} onClick={handleShowandCollapse}
        // onMouseEnter={()=> handleShowandCollapse(true)} 
        // onMouseLeave={() => handleShowandCollapse(false)}
        >
            <div className='title-and-collapse-option'>
                <h1 className='text-xl font-bold'>{name}</h1>
                    <p>
                        {
                            show ? <FcCollapse size={20} /> : <FcExpand size={20} />
                        }
                    </p>
            </div>
            <div className='description'>
                {show ? (<p>{details}</p>) : <p>{details.substring(0, 60) + " . . ."} <p style={{color: 'tomato'}}>Read More</p></p>}
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {techused && techused.map((tech, index) => (
                    <div key={index} className="tech-used-in-project flex flex-col items-center justify-center">
                        <p className="">{tech.techname}</p>
                    </div>
                ))}
            </div>
            <div className='live-demo-button'>
                <a target="_" href={project_link}>Live Demo</a>
            </div>

        </div>
    )
}

export default ProjectList

