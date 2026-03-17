import React from 'react'
import { BsJavascript } from 'react-icons/bs'
import { FaCss3Alt, FaFigma, FaGithubSquare, FaHtml5, FaReact, FaSass } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiAntdesign, SiRedux } from 'react-icons/si'
import { motion } from 'framer-motion'


const Skills = () => {
    return (
        <section id='Skills' className='pt-1'>
            <div className='bg-gray-100'>
                <div className='container'>
                    <motion.div whileInView={{opacity: 1, y: 0}} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='mt-20 flex flex-col gap-5 items-center justify-center pt-5'>
                        <h1 className='text-4xl font-medium'>Skills & Experience.</h1>
                        <p className='pl-60 pr-60 text-center'>The main area of expertise
                            is front-end development (client side of the web).
                            HTML5, CSS3, JavaScript (ES6+), TypeScript, building responsive and interactive
                            web applications with React.js or Next.js, creating
                            custom components, features, animations, and modern user interfaces.
                            Experienced in API integration, UI/UX principles,
                            and delivering pixel-perfect layouts.</p>
                        <div className='flex gap-5 pb-20'>
                            <span className='flex flex-col gap-1 items-center justify-center'><FaHtml5 className='w-15 h-15' /> <p>HTML</p></span>
                            <span className='flex flex-col gap-1 items-center justify-center'><FaCss3Alt className='w-15 h-15' /><p>CSS</p></span>
                            <span className='flex flex-col gap-1 items-center justify-center'><BsJavascript className='w-15 h-15' /><p>JavaScript</p></span>
                            <span className='flex flex-col gap-1 items-center justify-center'><SiRedux className='w-15 h-15' /><p>Redux</p></span>
                            <span className='flex flex-col gap-1 items-center justify-center'><FaSass className='w-15 h-15' /><p>Sass</p></span>
                            <span className='flex flex-col gap-1 items-center justify-center'><FaReact className='w-15 h-15' />React</span>
                            <span className='flex flex-col gap-1 items-center justify-center'><FaFigma className='w-15 h-15' /><p>Figma</p></span>
                            <span className='flex flex-col gap-1 items-center justify-center'><RiTailwindCssFill className='w-15 h-15' /><p>Tailwind css</p></span>
                            <span className='flex flex-col gap-1 items-center justify-center'><FaGithubSquare className='w-15 h-15' /><p>Git</p></span>
                            <span className='flex flex-col gap-1 items-center justify-center'><SiAntdesign className='w-15 h-15' /><p>Ant Desing</p></span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Skills