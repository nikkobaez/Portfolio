import React from 'react'
import UIKitImage from '../assets/uikitimage.png'
import SwiftUIImage from '../assets/swiftuiimage.png'
import FirebaseImage from '../assets/firebaseimage.png'
import HTMLImage from '../assets/htmlimage.png'
import CSSImage from '../assets/cssimage.png'
import JavascriptImage from '../assets/javascriptimage.png'
import ReactImage from '../assets/reactimage.png'
import TailwindImage from '../assets/tailwindimage.png'
import CPlusPlusImage from '../assets/cplusplusimage.png'
import GithubImage from '../assets/githubimage.png'

const Experience = () => {
    const tech = [
        {
            id: 0,
            src: UIKitImage,
            title: 'UIKit',
            style: 'shadow-sky-500'
        },
        {
            id: 1,
            src: SwiftUIImage,
            title: 'SwiftUI',
            style: 'shadow-sky-500'
        },
        {
            id: 3,
            src: FirebaseImage,
            title: 'Firebase',
            style: 'shadow-orange-500'
        },
        {
            id: 4,
            src: HTMLImage,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 5,
            src: CSSImage,
            title: 'CSS',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src: JavascriptImage,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 7,
            src: ReactImage,
            title: 'React',
            style: 'shadow-sky-500'
        },
        {
            id: 8,
            src: TailwindImage,
            title: 'Tailwind',
            style: 'shadow-sky-500'
        },
        {
            id: 8,
            src: CPlusPlusImage,
            title: 'C++',
            style: 'shadow-sky-500'
        },
        {
            id: 9,
            src: GithubImage,
            title: 'Github',
            style: 'shadow-white'
        },
    ]

    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full text-white py-20'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-3xl font-bold border-b-4 border-gray-500 inline'> 
                        Experience
                    </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {tech.map(link => (
                        <div key={link.id} className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${link.style}`}>
                            <img src={link.src} alt="" className=' w-52 mx-auto object-contain' />
                            <p className='mt-4'> {link.title} </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience