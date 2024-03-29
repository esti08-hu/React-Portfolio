import React from 'react'
import "./TechStack.css"
import "../About/About.css"
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

const TechStack = () => {
    const data = [
        {
            name: "Full Stack Developer"
        },
        {
            name: "BackEnd Developer"
        },
        {
            name: "BackEnd Developer"
        },
        {
            name: "BackEnd Developer"
        },
        {
            name: "BackEnd Developer"
        },
        {
            name: "BackEnd Developer"
        },
        {
            name: "BackEnd Developer"
        },

        {
            name: "Full Stack Developer"
        },
        {
            name: "BackEnd Developer"
        },
        {
            name: "BackEnd Developer"
        },
        {
            name: "BackEnd Developer"
        },
        {
            name: "BackEnd Developer"
        },
        {
            name: "BackEnd Developer"
        },
        {
            name: "BackEnd Developer"
        }
    ]

    const colors = [
        "#F5B041",
        "#3498DB",
        "#F5B041",
        '#4d0099',
        "#CB4335",
        "#006699",
        "#F1C40F",
        "#B3B6B7",
        "#73C6B6",
        "#E74C3C",
        "#6C3483",
        "#D35400",
        "#73C6B6",
        "#3498DB"
    ]

    const [showMoreTechStack, setShowMoreTechStack] = React.useState(9)

    const loadMore = () => {
        setShowMoreTechStack((prev) => prev + 3);
    }


    // const loadLess = () => {
    //     setShowMoreTechStack((prev) => prev - 3)
    // }
    return (
        <div className='techstack-section mt-10' id='tech-stack'>

            <div class="flex flex-col items-center justify-center mb-4 text-2xl font-bold">
                <Fade right>
                    <h5>Tech Stack</h5>
                </Fade>
                <span class="block h-2 bg-gray-400 flex-grow w-10 rounded-full"></span>
            </div>



            <div class="tech-stack-container mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Fade right>
                    {data.slice(0, showMoreTechStack).map((item, index) => (
                        <div key={index} className={index === 1 ? "tech-content-marked tech-content shadow-xl p-4 flex flex-col items-center justify-center" : "tech-content shadow-xl p-4 flex flex-col items-center justify-center"}>
                            <span className='tech-number' style={{ backgroundColor: colors[index] }}>
                                {index + 1}
                            </span>
                            <p class="text-xl font-bold">{item.name}</p>
                        </div>
                    ))}
                </Fade>
            </div>
            <Zoom>
                <span onClick={loadMore} className='load-more-tech-stack shadow-md' style={{ display: showMoreTechStack >= data.length ? "none" : "block" }}>Load More</span>
            </Zoom>

        </div>
    )
}

export default TechStack