import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const links = [
        {
            id: 0,
            text: 'home'
        },
        {
            id: 1,
            text: 'about'
        },
        {
            id: 2,
            text: 'portfolio'
        },
        {
            id: 3,
            text: 'experience'
        },
        {
            id: 3,
            text: 'contact'
        },
    ]

    return (
        <div className='flex justify-between items-center w-full h-20 z-10 px-4 text-white bg-black fixed'>
            <div>
                <h1 className='text-3xl font-logo ml-2'> Nikko Baez </h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(link => (
                    <li key={link.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'> 
                        <Link to={link.text} smooth duration={500}>           
                            {link.text} 
                        </Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNavbar(!navbar)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {navbar ? <FaTimes size={25}/> : <FaBars size={25}/>}
            </div>

            {navbar && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    {links.map(link => (
                        <li key={link.id} className='px-4 cursor-pointer capitalize py-6 text-2xl hover:scale-105 duration-200'> 
                        <Link to={link.text} smooth duration={500}>           
                            {link.text} 
                        </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Navbar