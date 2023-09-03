// import React, { useState, useEffect } from 'react'
import HeroImage from '../assets/heroimage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'
// import Typed from 'react-typed'
const Home = () => {
    // const [showCursor, setShowCursor] = useState(true)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setShowCursor(false)
    //     }, 22000)
    // }, []) 

    return (
        <div name="home" className= 'h-full w-full bg-gradient-to-b from-black via-black to-gray-800 pt-10'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row py-20'>
                <div className='flex flex-col justify-center h-full'>
 
                    {/* {showCursor ? (
                        <Typed className='text-3xl sm:text-5xl font-bold text-white' strings={['I\'m a student at the University of Houston', 'I\'m a Web and iOS Developer']} typeSpeed={150} backSpeed={120} backDelay={1200} showCursor={true}/>
                    ) : ( */}
                        <h2 className='text-3xl sm:text-5xl font-bold text-white'>
                            I'm a Web and Mobile Developer
                        </h2>
                    {/* )} */}
                    <p className='text-gray-500 py-4'>
                        Hello there! My name is Nikko Baez and I have 1 year of experience building web applications with React and 6 months of experience building iOS applicatons with SwiftUI and UIKit. My goal to one day be able to help businesses create and maintain their web and mobile applications motivates me to continue learning, growing, and expanding my skillset.
                    </p>
                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200'>
                            <Link to={"portfolio"} smooth duration={500}>           
                                <div className="flex">
                                    Portfolio
                                    <span className='group-hover:rotate-90 duration-300'>
                                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                                    </span>
                                </div>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='mt-20'>
                    <img src={HeroImage} alt="profile" className=' rounded-2xl mx-auto w-1/2 md:w-3/4'/>
                </div>
            </div>
        </div>
    )
}

export default Home