import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full bg-gradient-to-b from-gray-800 to-black text-white'> 
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-3xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>
                <p className='text-md sm: text-l'>
                    After graduating from Texas A&M University in 2020 with a bachelor’s degree in Biomedical Science, my plan was to pursue further studies and apply to dental school. It was during this time though I discovered my passion for coding and started studying web development in 2022. Over the course of a year, using reputable platforms such as CodeAcademy, The Odin Project, FreeCodeCamp, and Udemy I gained a solid understanding of several programming languages, frameworks, developer tools, and libraries including HTML, CSS, JavaScript, React, TailwindCSS, and Firebase. These skills have given me the ability to develop visually appealing and dynamic web applicaitons. 
                </p>

                <br/>

                <p className='text-md sm:text-l'>
                    Wanting to focus on mastery of a specific technology due to the wide variety avaliable for web development and gain a solid understanding of computer science concepts, I decided to start studying iOS development in 2023 as well as enroll at the University of Houston to pursue a bachelor’s degree in Computer Science. Over the course of the past few months drawing knowledge from resources such as Kodeco, Hacking with Swift, and my college courses I have learned a variety of new programming languages and frameworks including C++, Swift, SwiftUI, and UIKit.
                </p>

                <br/>

                <p className='text-l'>
                    I am still in the process of learning iOS development, but in the meantime I am also in the works of preparing and setting up my startup BanesTech a company that provides new and small businesses access to web and mobile applicaitons at an affordable rate. In conclusion, my transition from a scientific background to the world of programming showcases my adaptability and commitment to continuous learning and personal development. Blending my diverse insights with technical proficiency, I am dedicated to producing impacting and lasting results in the world of technology.
                </p>
            </div>
        </div>
  )
}

export default About