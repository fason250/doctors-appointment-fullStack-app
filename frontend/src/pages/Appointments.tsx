import { assets } from '../assets/assets'

function Appointments() {
    return (
        <section className='w-full max-w-6xl py-10 mx-auto text-[#4B5563]'>
            <h2 className='font-medium text-xl capitalize py-4'>My appointments</h2>
            <hr className='text-[#4B5563] opacity-50 h-[1px] my-4' />
            <div className='flex flex-col gap-3'>
                <div className='grid grid-cols-[1fr_3fr] md:grid-cols-[1fr_3fr_1fr]'>
                    <div className='w-[155px]'>
                        <img src={assets.doc1} alt="doctor profile" />
                    </div>
                    <div className='flex flex-col text-sm gap-1'>
                        <h3 className='text-base font-semibold text-[#262626]'>Dr.Richard</h3>
                        <p>General physician</p>
                        <span className='font-semibold my-1'>Address:</span>
                        <span>57th Cross, Richmond</span>
                        <span>Circle, Church Road, London</span>
                        <p><span className='font-semibold'>Date & Time:</span> 25, July, 2024 |  8:30 PM</p>
                    </div>
                    <div className='flex flex-row md:flex-col  md:justify-end gap-1 w-full'>
                        <button className='px-6 md:px-4 py-1.5 md:py-2.5 border cursor-pointer hover:scale-105 transition-all ease-in-out bg-[#5F6FFF] whitespace-nowrap text-[13px] text-white md:text-sm rounded-md'>Payment</button>
                        <button className='px-6 md:px-4 py-1.5s md:py-2.5 border cursor-pointer hover:scale-105 transition-all ease-in-out whitespace-nowrap text-[13px] md:text-sm rounded-md'>Cancel Payment</button>
                    </div>

                </div>
                <hr className='text-[#4B5563] opacity-35 h-[1px] my-2' />
            </div>
        </section>
    )
}

export default Appointments