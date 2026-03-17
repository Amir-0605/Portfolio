import React from 'react'
import { BsJavascript } from 'react-icons/bs'
import { CiShare1 } from 'react-icons/ci'
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <section id='Projects' className='pt-8'>
            <div className='container'>
                <div viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.8 }} className='flex items-center flex-col mt-10 mb-10 gap-3'>
                    <h1 className='text-4xl font-medium flex'>Projects <p className='text-blue-500'>.</p></h1>
                    <p className='text-gray-500'>A selection of my best works combining creativity, performance, and modern tech.</p>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className='border border-gray-300 w-110 rounded-xl hover:scale-103 cursor-pointer duration-300 ease-out hover:shadow-lg shadow-cyan-500/50'>
                            <div>
                                <img src="/src/assets/Portfolio2.png" alt="Portfolio" className='w-100% h-60 hover:scale-103 duration-300 ease-out rounded-xl' />
                            </div>
                            <div className='p-5 flex flex-col gap-3'>
                                <h1 className='font-bold text-2xl'>Modern Frontend developer portfolio</h1>
                                <p className='text-gray-500'>Front-end developer with a passion for scalable architecture, clean code,
                                    and high-quality UI/UX. Experienced in React, Tailwind. I enjoy building systems that are both visually beautiful
                                    and  technically solid. Always improving, always learning.</p>
                                <span className='flex items-center justify-center gap-4 text-3xl pt-2'>
                                    <FaHtml5 />
                                    <FaCss3Alt />
                                    <BsJavascript />
                                    <RiTailwindCssFill />
                                    <FaReact />
                                </span>
                                <div className='flex justify-between items-center pl-4 pr-4 mt-2'>
                                    <a className='flex items-center gap-5 border rounded-xl p-2 duration-300 ease-out text-blue-500 hover:bg-blue-500 hover:text-white'><CiShare1 />Demo</a>
                                    <a href='https://github.com/Amir-0605' className='flex items-center gap-5 border rounded-xl p-2 duration-300 ease-out hover:bg-black hover:text-white'><FaGithub />Code</a>
                                </div>
                            </div>
                        </div>
                        <div className='border flex flex-col border-gray-300 w-110 rounded-xl hover:scale-103 cursor-pointer duration-300 ease-out hover:shadow-lg shadow-cyan-500/50'>
                            <div>
                                <img src="/src/assets/Calculator.png" alt="Portfolio" className='w-110 h-60 hover:scale-103 duration-300 ease-out rounded-xl' />
                            </div>
                            <div className='p-5 flex flex-col gap-3'>
                                <h1 className='font-bold text-2xl'>Modern Calculator</h1>
                                <p className='text-gray-500 mt-8'>Front-end developer with a passion for scalable architecture, clean code,
                                    and high-quality UI/UX. Experienced in React, Tailwind. I enjoy building systems that are both visually beautiful
                                    and  technically solid. Always improving, always learning.</p>
                                <span className='flex items-center justify-center gap-4 text-3xl pt-2'>
                                    <FaHtml5 />
                                    <FaCss3Alt />
                                    <BsJavascript />
                                    <RiTailwindCssFill />
                                    <FaReact />
                                </span>
                                <div className='flex justify-between items-center pl-4 pr-4 mt-2'>
                                    <a className='flex items-center gap-5 border rounded-xl p-2 duration-300 ease-out text-blue-500 hover:bg-blue-500 hover:text-white'><CiShare1 />Demo</a>
                                    <a href='https://github.com/Amir-0605' className='flex items-center gap-5 border rounded-xl p-2 duration-300 ease-out hover:bg-black hover:text-white'><FaGithub />Code</a>
                                </div>
                            </div>
                        </div>
                        <div className='border flex flex-col border-gray-300 w-110 rounded-xl hover:scale-103 cursor-pointer duration-300 ease-out hover:shadow-lg shadow-cyan-500/50'>
                            <div>
                                <img src="/src/assets/To do List.png" alt="Portfolio" className='w-110 h-60 hover:scale-103 duration-300 ease-out rounded-xl' />
                            </div>
                            <div className='p-5 flex flex-col gap-3'>
                                <h1 className='font-bold text-2xl'>To Do List</h1>
                                <p className='text-gray-500 mt-8'>To-Do List is a simple yet powerful productivity tool where users can
                                    add, view, edit, and delete tasks. It keeps daily goals organized and improves time
                                    management. The app provides a smooth user experience with a minimal
                                    and intuitive interface.</p>
                                <span className='flex items-center justify-center gap-4 text-3xl pt-2'>
                                    <FaHtml5 />
                                    <FaCss3Alt />
                                    <BsJavascript />
                                    <RiTailwindCssFill />
                                    <FaReact />
                                </span>
                                <div className='flex justify-between items-center pl-4 pr-4 mt-2'>
                                    <a className='flex items-center gap-5 border rounded-xl p-2 duration-300 ease-out text-blue-500 hover:bg-blue-500 hover:text-white'><CiShare1 />Demo</a>
                                    <a href='https://github.com/Amir-0605' className='flex items-center gap-5 border rounded-xl p-2 duration-300 ease-out hover:bg-black hover:text-white'><FaGithub />Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects