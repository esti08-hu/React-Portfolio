import React from 'react'
import "./Education.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcGraduationCap } from "react-icons/fc";

function Education() {
    const data = [
        {
            name: "Adama Science And Technology University",
            degree: "Software Engineering",
            year: "2021 - 2025",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat. Sagittis nisl rhoncus mattis rhoncus urna. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sodales neque sodales ut etiam sit.",
        },
        {
            name: "AlxEthiopia",
            degree: "Software Engineering",
            year: "2023 - 2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat. Sagittis nisl rhoncus mattis rhoncus urna. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sodales neque sodales ut etiam sit.",


        },
        {
            name: "ALXEthiopia",
            degree: "AiCE",
            year: "2024 - 2025",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat. Sagittis nisl rhoncus mattis rhoncus urna. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sodales neque sodales ut etiam sit."
        },
        {
            name: "Huawei",
            degree: "Data Communication and networking",
            year: "2023 - 2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat. Sagittis nisl rhoncus mattis rhoncus urna. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sodales neque sodales ut etiam sit."

        },
        {
            name: "ALXEthiopia",
            degree: "AiCE",
            year: "2024 - 2025",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat. Sagittis nisl rhoncus mattis rhoncus urna. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sodales neque sodales ut etiam sit."
        },
        {
            name: "Huawei",
            degree: "Data Communication and networking",
            year: "2023 - 2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat. Sagittis nisl rhoncus mattis rhoncus urna. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Sodales neque sodales ut etiam sit."
        }
    ]
    const colors = [
        "#B30000",
        "#006699",
        "#CC8800",
        "#009999",
        "#4D0099",
        "#1A9900",
    ]
    return (
        <div className='Eduction-section' id='education'>

            <div class="flex flex-col items-center justify-center mb-4 text-2xl font-bold">
                <h5>Education</h5>
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
                                icon={<FcGraduationCap />}
                            >
                                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                                <h4 className="vertical-timeline-element-subtitle" style={{ color: "yellow" }}>{item.degree}</h4>

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

export default Education