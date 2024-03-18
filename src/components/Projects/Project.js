import React from 'react'
import "./Project.css"
import ProjectList from './ProjectList'
import "../TechStack/TechStack.css"

const data = [
    {
        name: "MERN Stack Job Portal",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        project_link: "http://google.com/",
        techused: [
            {
                techname: "Django"
            },
            {
                techname: "React js"
            }, {
                techname: "Tailwind"
            }, {
                techname: "MySql"
            },

        ]
    }, {
        name: "ABC Payment System",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        project_link: "http://google.com/",
        techused: [
            {
                techname: "Django"
            },
            {
                techname: "React js"
            }, {
                techname: "Tailwind"
            }, {
                techname: "MySql"
            },

        ]
    },
    {
        name: "Full Stack Library Managment System",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        project_link: "http://google.com/",
        techused: [
            {
                techname: "Django"
            },
            {
                techname: "React js"
            }, {
                techname: "Tailwind"
            }, {
                techname: "MySql"
            },

        ]
    },
    {
        name: "MERN Stack Social Media",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        project_link: "http://google.com/",
        techused: [
            {
                techname: "Django"
            },
            {
                techname: "React js"
            }, {
                techname: "Tailwind"
            }, {
                techname: "MySql"
            },
        ]
    },
    {
        name: "MERN Stack Netflix  Clone",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        project_link: "http://google.com/",
        techused: [
            {
                techname: "Django"
            },
            {
                techname: "React js"
            }, {
                techname: "Tailwind"
            }, {
                techname: "MySql"
            },
        ]
    },
    {
        name: "MERN Stack E-Commerce",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        project_link: "http://google.com/",
        techused: [
            {
                techname: "Django"
            },
            {
                techname: "React js"
            }, {
                techname: "Tailwind"
            }, {
                techname: "MySql"
            },
        ]
    }
]

const Project = () => {
    return (
        <div className='project-container mt-10' id='projects'>
             <div class="flex flex-col items-center justify-center mb-4 text-2xl font-bold">
                        <h5>Projects</h5>
                        <span class="block h-2 bg-gray-400 flex-grow w-10 rounded-full"></span>
                    </div>
            <div class="container mx-auto py-12 px-4 grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                {data.map((item, index) => (
                    <div key={index}>
                        <ProjectList {...item} />
                    </div>
                ))}
            </div>

            


        </div>
    )
}

export default Project