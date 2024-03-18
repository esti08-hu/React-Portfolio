import React from 'react'
import "./WorkExperience.css"
import "../About/About.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWorkOutline, MdHomeWork } from "react-icons/md";

const WorkExperience = () => {
    const data = [
        {
            companyname: "Google",
            position: "Full stack Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat. Sagittis nisl rhoncus mattis rhoncus urna. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sodales neque sodales ut etiam sit. Vulputate odio ut enim blandit. Non diam phasellus vestibulum lorem sed risus. Elit ullamcorper dignissim cras tincidunt lobortis. Mauris cursus mattis",
            year: "2024 - 2023",

            techskills: [
                {
                    techname: "Django"
                },
                {
                    techname: "React Js"
                },
                {
                    techname: "MySql"
                },
                {
                    techname: "Tailwinf"
                }
            ]
        },
        {
            companyname: "Google",
            position: "Full stack Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat. Sagittis nisl rhoncus mattis rhoncus urna. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sodales neque sodales ut etiam sit. Vulputate odio ut enim blandit. Non diam phasellus vestibulum lorem sed risus. Elit ullamcorper dignissim cras tincidunt lobortis. Mauris cursus mattis",
            year: "2024 - 2023",

            techskills: [
                {
                    techname: "Django"
                },
                {
                    techname: "React Js"
                },
                {
                    techname: "MySql"
                },
                {
                    techname: "Tailwinf"
                }
            ]
        },
        {
            companyname: "Google",
            position: "Full stack Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat. Sagittis nisl rhoncus mattis rhoncus urna. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sodales neque sodales ut etiam sit. Vulputate odio ut enim blandit. Non diam phasellus vestibulum lorem sed risus. Elit ullamcorper dignissim cras tincidunt lobortis. Mauris cursus mattis",
            year: "2024 - 2023",

            techskills: [
                {
                    techname: "Django"
                },
                {
                    techname: "React Js"
                },
                {
                    techname: "MySql"
                },
                {
                    techname: "Tailwinf"
                }
            ]
        },
        {
            companyname: "Google",
            position: "Full stack Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat. Sagittis nisl rhoncus mattis rhoncus urna. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sodales neque sodales ut etiam sit. Vulputate odio ut enim blandit. Non diam phasellus vestibulum lorem sed risus. Elit ullamcorper dignissim cras tincidunt lobortis. Mauris cursus mattis",
            year: "2024 - 2023",

            techskills: [
                {
                    techname: "Django"
                },
                {
                    techname: "React Js"
                },
                {
                    techname: "MySql"
                },
                {
                    techname: "Tailwinf"
                }
            ]
        },
        {
            companyname: "Google",
            position: "Full stack Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat. Sagittis nisl rhoncus mattis rhoncus urna. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sodales neque sodales ut etiam sit. Vulputate odio ut enim blandit. Non diam phasellus vestibulum lorem sed risus. Elit ullamcorper dignissim cras tincidunt lobortis. Mauris cursus mattis",
            year: "2024 - 2023",

            techskills: [
                {
                    techname: "Django"
                },
                {
                    techname: "React Js"
                },
                {
                    techname: "MySql"
                },
                {
                    techname: "Tailwinf"
                }
            ]
        },
        {
            companyname: "Google",
            position: "Full stack Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat. Sagittis nisl rhoncus mattis rhoncus urna. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sodales neque sodales ut etiam sit. Vulputate odio ut enim blandit. Non diam phasellus vestibulum lorem sed risus. Elit ullamcorper dignissim cras tincidunt lobortis. Mauris cursus mattis",
            year: "2024 - 2023",

            techskills: [
                {
                    techname: "Django"
                },
                {
                    techname: "React Js"
                },
                {
                    techname: "MySql"
                },
                {
                    techname: "Tailwinf"
                }
            ]
        },
        {
            companyname: "Google",
            position: "Full stack Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat. Sagittis nisl rhoncus mattis rhoncus urna. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sodales neque sodales ut etiam sit. Vulputate odio ut enim blandit. Non diam phasellus vestibulum lorem sed risus. Elit ullamcorper dignissim cras tincidunt lobortis. Mauris cursus mattis",
            year: "2024 - 2023",

            techskills: [
                {
                    techname: "Django"
                },
                {
                    techname: "React Js"
                },
                {
                    techname: "MySql"
                },
                {
                    techname: "Tailwinf"
                }
            ]
        },
        {
            companyname: "Google",
            position: "Full stack Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat. Sagittis nisl rhoncus mattis rhoncus urna. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sodales neque sodales ut etiam sit. Vulputate odio ut enim blandit. Non diam phasellus vestibulum lorem sed risus. Elit ullamcorper dignissim cras tincidunt lobortis. Mauris cursus mattis",
            year: "2024 - 2023",

            techskills: [
                {
                    techname: "Django"
                },
                {
                    techname: "React Js"
                },
                {
                    techname: "MySql"
                },
                {
                    techname: "Tailwinf"
                }
            ]
        }
    ]
    const colors = [
        "#B30000",
        "#006699",
        "#800080",
        "#CC8800",
        "#1A9900",
        "#B31E00",
        "#4D0099",
        "#009999"
    ]
    return (
        <div className='work-experience-container mt-10' id='work-experience'>

            <div class="flex flex-col items-center justify-center mb-4 text-2xl font-bold">
                <h5>Work Experience</h5>
                <span class="block h-2 bg-gray-400 flex-grow w-12 rounded-full"></span>
            </div>

            <div className='timeline-section'>
                <VerticalTimeline lineColor='tomato'>
                    {
                        data.map((item, index) => (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: colors[index], color: '#fff' }}
                                contentArrowStyle={{ borderRight: `7px solid black` }}
                                date={item.year}
                                dateClassName='date-my-project'
                                iconStyle={{ background: colors[index], color: '#fff' }}
                                icon={<MdWorkOutline />}
                            >
                                <h3 className="vertical-timeline-element-title">{item.companyname}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>
                                <div class="py-5 px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                                    {item.techskills && item.techskills.map((tech, index) => (
                                        <div key={index} style={{ backgroundColor: "" }} className="tech-name-container">
                                            <p style={{ fontWeight: "bolder" }}>{tech.techname}</p>
                                        </div>
                                    ))}
                                </div>

                                <p style={{ color: "white", fontFamily: "monospace" }}>
                                    {item.description}
                                </p>
                            </VerticalTimelineElement>
                        ))
                    }
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default WorkExperience