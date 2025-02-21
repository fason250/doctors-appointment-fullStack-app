import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { FaArrowRightLong } from 'react-icons/fa6'

function Hero() {
    const navigate = useNavigate()


    return (
        <div className='w-full bg-[#5F6FFF] p-8 flex items-center gap-4 flex-col-reverse md:flex-row rounded-lg text-white mb-6'>
            <div className='px-6 md:w-[65%] w-full'>
                <h1 className='text-4xl capitalize font-semibold mb-6'>book appointment with trusted Doctors</h1>
                <div className='flex items-center gap-3 mb-4'>
                    <div className=''>
                        <img src={assets.group_profiles} alt="" className='w-80 md:w-52' />
                    </div>
                    <p className='text-[14px]'>Simply browse through our extensive list of trusted doctors,
                        schedule your appointment hassle-free.</p>
                </div>
                <button
                    className='py-3 px-4 bg-white flex gap-2 items-center justify-center text-black rounded-3xl cursor-pointer hover:scale-105 transition-all'
                    onClick={() => navigate("/allDoctors")}
                >Book appointment <FaArrowRightLong size={18} /></button>
            </div>
            <div className='w-full md:flex-1/2'>
                <img src={assets.header_img} alt="doctors hero image" />
            </div>
        </div>
    )
}

export default Hero