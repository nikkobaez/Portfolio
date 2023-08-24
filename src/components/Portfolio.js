import React from 'react'
import TaskFlow from '../assets/taskflow.png'
import ClearSky from '../assets/clearsky.png'
import VivaDesign from '../assets/vivadesign.png'

const Portfolio = () => {
    const portfolio = [
        {
            id: 0,
            src: TaskFlow,
            demo: "https://www.figma.com/file/fVSbr5dNaEyjGzJ5gcb25b/TaskFlow?type=design&node-id=0-1&mode=design",
            code: "https://github.com/nikkobaez/TaskFlow",

        },
        {
            id: 1,
            src: ClearSky,
            demo: "https://www.figma.com/file/d53AimKJ5BjSItHpzrZbfK/ClearSky?type=design&node-id=0-1&mode=design",
            code: "https://github.com/nikkobaez/ClearSky",
        },
        {
            id: 3,
            src: VivaDesign,
            demo: "https://zingy-pie-1b91c3.netlify.app/",
            code: "https://github.com/nikkobaez/Viva-Design",
        }
    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white py-20'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-3xl font-bold inline border-b-4 border-gray-500'> 
                        Portfolio
                    </p>
                </div>
                
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {portfolio.map(link => (
                    <div key={link.id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={link.src} alt="" className='rounded-md duration-300 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                <a href={link.demo} rel="noreferrer" target="_blank"> Demo </a>
                            </button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                <a href={link.code} rel="noreferrer" target="_blank"> Code </a>
                            </button>
                        </div>
                    </div>
                ))}
                </div>

            </div>
        </div>
    )
}

export default Portfolio