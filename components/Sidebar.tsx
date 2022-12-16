import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { FiMail, FiPhone } from 'react-icons/fi'
import { FcDocument } from 'react-icons/fc'

export const Sidebar = () => {
  return (
    <div>
        <img src="tranGH.jpeg" alt="profile picture" className='w-32 h-32 mx-auto rounded-full'/>
        <h3 className='my-4 text-3xl font-medium tracking-wider font-ubuntu'>
            <span className='text-green'>Tran </span>Huynh
        </h3>
        <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Software Engineer</p>
        <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full' href="" download=""><FcDocument className='w-6 h-6' /> Download Resume</a>

        <div className='flex justify-around w-9/12 my-5 text-green md:w-full'>
            <a href="https://github.com/hnhtran"><AiFillGithub className='w-8 h-8 cursor-pointer'/></a>
            <a href="https://www.linkedin.com/in/tran-huynh-jade/"><AiFillLinkedin className='w-8 h-8 cursor-pointer'/></a>
        </div>
        <div className='py-4 my-5 bg-gray-200' style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
            <div className='flex items-center justify-center space-x-2'>
                <GoLocation />
                <span>Tasmania, Australia</span>
            </div>
            <p className='flex items-center justify-center my-2'><FiMail/>&nbsp; tran_eetas@yahoo.com</p>
            <p className='flex items-center justify-center my-2'><FiPhone/>&nbsp; 0470501309</p>
        </div>

        <button 
        className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
        onClick={() => window.open('mailto:tran_eetas@yahoo.com')}
        >Email Me</button>
        <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400'>Toggle Theme</button>
    </div>
  )
}
