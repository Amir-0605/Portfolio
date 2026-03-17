import React from 'react'
import { motion } from 'framer-motion'


const Experience = () => {
    return (
        <section id='Experience' className='bg-gray-100 pt-19'>
            <div className='container'>
                <motion.div whileInView={{opacity: 1, y: 0}} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <div className='flex items-center justify-center flex-col gap-5'>
                        <h1 className='text-4xl font-medium'>Work Experince</h1>
                        <h5 className='text-gray-500'>My professional and teaching journey so far</h5>
                    </div>
                    <div className='flex items-center justify-center pb-50'>
                        <span className='z-2 absolute -translate-y-40 bg-linear-to-r from-cyan-400 to-blue-500 border w-4 h-4 border-blue-600 rounded-3xl'></span>
                        <span className='z-2 absolute translate-y-55 bg-linear-to-r from-cyan-400 to-blue-500 border w-4 h-4 border-blue-600 rounded-3xl'></span>
                        <span className='z-1 bg-linear-to-r from-cyan-400 to-blue-500 absolute translate-x-16 -translate-y-40 bg-liner-to-r from-cyan-400 to-blue-500 w-30 h-1'></span>
                        <span className='z-1 bg-linear-to-r from-cyan-400 to-blue-500 absolute -translate-x-16 translate-y-55 bg-liner-to-r from-cyan-400 to-blue-500 w-30 h-1'></span>
                        <div className='h-170 w-1 bg-linear-to-r from-cyan-400 to-blue-500 mt-20'></div>
                        <div className='border border-blue-400 w-90 h-80 absolute translate-x-75 -translate-y-40 bg-[#fff] z-10 rounded-xl hover:scale-105 duration-300 ease-out hover:shadow-lg shadow-cyan-300'></div>
                        <div className='border border-blue-400 w-90 h-80 absolute -translate-x-75 translate-y-57 bg-[#fff] z-10 rounded-xl hover:scale-105 duration-300 ease-out hover:shadow-lg shadow-cyan-300'></div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience