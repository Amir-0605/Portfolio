import React from 'react'
import { CiMail, CiShare1 } from 'react-icons/ci'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'

const Contact = () => {
    return (
        <section id='Contact' className='pt-1'>
            <div className='container'>
                <div className='flex flex-col gap-3 items-center'>
                    <h1 className='flex text-4xl font-medium'>Contact<p className='text-blue-500'>.</p></h1>
                    <p className='text-gray-500'>A selection of my best works combining creativity, performance, and modern tech.</p>
                    <div className='grid grid-cols-2 gap-5 mt-4 mb-5'>
                        <a className='flex text-xl items-center gap-22 border border-cyan-500 rounded-2xl p-5 shadow-lg hover:bg-blue-500 hover:text-[#fff] hover:shadow-lg hover:shadow-cyan-500 duration-300 ease-out hover:scale-105'>
                            <span className='flex gap-3 items-center'><FaFacebook />FaceBook</span>
                            <span><CiShare1 /></span>
                        </a>
                        <a href='https://github.com/Amir-0605' className='flex text-xl items-center gap-24 border border-cyan-500 rounded-2xl p-5 shadow-lg hover:bg-blue-500 hover:text-[#fff] hover:shadow-lg hover:shadow-cyan-500 duration-300 ease-out hover:scale-105'>
                            <span className='flex gap-3 items-center'><FaGithub />GitHub</span>
                            <span><CiShare1 /></span>
                        </a>
                        <a href='https://instagram.com/aashirbaev89' className='flex text-xl items-center gap-20 border border-cyan-500 rounded-2xl p-5 shadow-lg hover:bg-blue-500 hover:text-[#fff] hover:shadow-lg hover:shadow-cyan-500 duration-300 ease-out hover:scale-105'>
                            <span className='flex gap-3 items-center'><FaInstagram />Instagram</span>
                            <span><CiShare1 /></span>
                        </a>
                        <a className='flex text-xl items-center gap-25 border border-cyan-500 rounded-2xl p-5 shadow-lg hover:bg-blue-500 hover:text-[#fff] hover:shadow-lg hover:shadow-cyan-500 duration-300 ease-out hover:scale-105'>
                            <span className='flex gap-3 items-center'><CiMail />E-mail</span>
                            <span><CiShare1 /></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact