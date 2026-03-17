import { FaRegMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Header = () => {

    return (
        <header className='fixed top-0 right-0 left-0 pt-2 pb-2 bg-black-500 shadow-lg z-99 backdrop-blur-xs opacity-100 opacity-100'>
            <div className='container'>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="flex items-center justify-between">
                    <span>
                        <a href="./Header.jsx" className='flex gap-1 items-center font-bold'>
                            <img src="/src/assets/Logo.svg" alt="logo" width='50px' height='50px' />
                            AMIR DEV</a>
                    </span>
                    <nav className='flex gap-10 text-xl font-bold'>
                        <a href="#Home" className='active:text-green-500'>Home</a>
                        <a href="#Skills" className='active:text-green-500'>Skills</a>
                        <a href="#Experience" className='active:text-green-500'>Experience</a>
                        <a href="#Projects" className='active:text-green-500'>Projects</a>
                        <a href="#Contact" className='active:text-green-500'>Contact</a>
                    </nav>
                    <span className='flex gap-2 '>
                        <button className='bg-gray-300 bord rounded-xl p-1 cursor-pointer'><FiSun /></button>
                        <button className='bg-gray-300 bord rounded-xl p-1 cursor-pointer'><FaRegMoon /></button>
                    </span>
                </motion.div>
            </div>
        </header >
    )
}

export default Header