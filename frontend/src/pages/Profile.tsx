import { useState } from 'react'
import { assets } from '../assets/assets'
import EditAccountModal from '../components/EditAccountModal'

function Profile() {
    const [editProfile, setEditProfile] = useState<boolean>(false)


    return (
        <section className='max-w-6xl mx-auto w-full py-8 relative'>
            <div className='max-w-md text-[#4B5563] px-3'>
                <div className='flex items-center gap-2 mb-6'>
                    <img className='w-[150px] rounded-md' src={assets.profile_pic} alt="profile pic" />
                    <img className='w-[150px] rounded-md' src={assets.profile_pic} alt="profile pic" />
                </div>
                <h2 className='text-[#1F2937] text-xl font-semibold mb-3'>Edward Vincent</h2>
                <hr className='h-[1px] opacity-30 text-[#4B5563] mb-5' />
                <div className='flex flex-col gap-1.5 w-[80%] mb-4 text-sm'>
                    <h3 className='text-[#797979] font-semibold uppercase text-md mb-3 underline opacity-90'>Contact Information</h3>
                    <p className='grid grid-cols-2 items-center'><span>Email:</span> <span className='text-[#3C96FF]'>jeyfason34@gmail.com</span></p>
                    <p className='grid grid-cols-2 items-center'><span>phone:</span> <span className='text-[#3C96FF]'>0829121212</span></p>
                </div>
                <div className='flex flex-col gap-1.5 w-[80%] text-sm mb-4'>
                    <h3 className='text-[#797979] font-semibold uppercase text-md mb-3 underline opacity-90'>Basic Information</h3>
                    <p className='grid grid-cols-2 items-center'><span>Gender:</span> <span>Male</span></p>
                    <p className='grid grid-cols-2 items-center'><span>BirthDay:</span> <span>20 july 2004</span></p>
                </div>
                <div className='flex items-center gap-3'>
                    <button className='px-6 py-2 border text-sm rounded-3xl border-[#5F6FFF] hover:bg-[#5F6FFF] hover:text-white transition-all ease-in-out' onClick={() => setEditProfile(true)}>Edit</button>
                    <button className='px-6 py-2 border text-sm rounded-3xl border-[#5F6FFF] hover:bg-[#5F6FFF] hover:text-white transition-all ease-in-out'>save Information</button>
                </div>
            </div>
            <EditAccountModal isOpen={editProfile} onClose={setEditProfile} />
        </section>
    )
}

export default Profile