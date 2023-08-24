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
                    Having graduated from Texas A&M in 2020 with a degree in Biomedical Science and initial aim to pursue advanced studies, my journey into the tech world began when I discovered my passion for coding and started studying web development in 2022. Over the course of a year using reputable platforms like the Odin Project and FreeCodeCamp, I gained a solid understanding of several programming languages, frameworks, developer tools, and libraries such as HTML, CSS, JavaScript, React, TailwindCSS, and Firebase. These skills gave me the ability to construct visually appealing and dynamic user interfaces and applications. 
                </p>

                <br/>

                <p className='text-md sm:text-l'>
                    Wanting to focus on mastery of a specific technology and gain a solid understanding of computer science concepts, I decided to start studying iOS development in 2023 as well as enroll at the University of Houston to pursue a bachelor’s degree in Computer Science. Over the course of the last few months drawing knowledge from resources such as Kodeo (formerly Raywenderlich), Hacking with Swift, iOS programming texts by Mark Neuburg, and my college courses I have learned a variety of new programming languages and frameworks including C++, Swift, SwiftUI, and UIKit.  
                </p>

                <br/>

                <p className='text-l'>
                    My transition from a scientific background to the world of programming showcases my adaptability and commitment to continuous learning and personal development. Blending my diverse insights with technical proficiency, I am dedicated to producing impacting and lasting results in the world of technology. Join me in this exciting venture, where I transform innovative ideas into tangible software solutions.  Be it crafting exceptional web interfaces or architecting immersive iOS experiences, I am resolute in my pursuit of excellence and drive to make a difference in helping startups to fourtune 500 companies.
                </p>
            </div>
        </div>
  )
}

export default About