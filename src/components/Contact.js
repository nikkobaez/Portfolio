import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const submitForm = () => {
        const formData = {
            name: name,
            email: email,
            message: message
        }

        fetch("https://getform.io/f/0637dbb6-d725-4e0f-bc6e-cadd2191575e", {
            method: "POST",
            body: formData
        }).then(() => {
            setName("")
            setEmail("")
            setMessage("")
        })
    }   

    return (
        <div name="contact" className='w-full bg-gradient-to-b from-black to-gray-800 py-20 p-4 text-white'> 
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-3xl font-bold inline border-b-4 border-gray-500'>
                        Contact
                    </p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/0637dbb6-d725-4e0f-bc6e-cadd2191575e" method="POST" className='flex flex-col w-full' onSubmit={() => submitForm()}>
                        <input type="text" name="name" placeholder="Enter your name" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type="text" name="email" placeholder="Enter your email" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-8' value={email} onChange={(e) => setEmail(e.target.value) }/>
                        <textarea name="message" rows="10" placeholder="Enter your message" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' value={message} onChange={(e) => setMessage(e.target.value)}>

                        </textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300 w-full justify-center'> 
                            Let's Talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact