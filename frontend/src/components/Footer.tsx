import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='w-full space-y-2 max-w-6xl mx-auto p-4'>
            <div className='grid grid-cols-1 sm:grid-cols-[2fr_1fr] md:grid-cols-[2fr_1fr_1fr] py-10 gap-6 items-start'>
                <div className='pr-3'>
                    <img src={assets.logo} alt="company logo" className='mb-4' />
                    <p className='text-sm text-[#4B5563] py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className='md:justify-self-center'>
                    <h2 className='font-medium text-[#4B5563] text-xl uppercase mb-4'>Company</h2>
                    <div className='flex flex-col gap-2 text-sm text-[#4B5563] '>
                        <Link to={""}>Home</Link>
                        <Link to={""}>About Us</Link>
                        <Link to={""}>Contact Us</Link>
                        <Link to={""}>Privacy & policy</Link>
                    </div>
                </div>

                <div className='md:justify-self-center'>
                    <h2 className='font-medium text-[#4B5563] text-xl uppercase mb-4'>Get In Touch</h2>
                    <div className='flex flex-col gap-2 text-sm text-[#4B5563]'>
                        <Link to={""}>+1-212-456-7890</Link>
                        <Link to={""}>jeyfason25@gmail.com</Link>
                    </div>
                </div>
            </div>
            <hr className='text-[#BDBDBD] mb-4' />
            <p className='text-center text-sm text-[#4B5563]'>Copyright © {new Date().getFullYear()} Jey Fason Ltd - All Right Reserved.</p>
        </footer>
    )
}

export default Footer