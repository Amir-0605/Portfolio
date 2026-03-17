import React from 'react'
import TypingText from './Animation'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <section id='Home' className='pt-1'>
            <div className='container'>
                <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}} className='flex mt-50 items-center justify-center gap-30'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-5xl flex flex-col gap-5 items-center justify-center '>Hello! my name is <p className='text-blue-600'>Ashirbaev Amir.</p></h2>
                        <span className='flex items-center justify-center text-3xl'><TypingText /></span>
                    </div>
                    <div className='relative z-1'>
                        <img src="/src/assets/softhistoria.jpg" alt="IT" className='w-190 mask-b-from-60% mask-l-from-70% mask-r-from-50% mask-t-from-60%' />
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default Home