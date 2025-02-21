import { assets } from '../assets/assets'

interface WhyChooseUsData {
    title: string;
    description: string;
}
function About() {
    const whyChooseUsData: WhyChooseUsData[] = [
        { title: 'Efficiency', description: 'Streamlined appointment scheduling that fits into your busy lifestyle.' },
        { title: 'Convenience', description: 'Access to a network of trusted healthcare professionals in your area.' },
        { title: 'Personalization', description: 'Tailored recommendations and reminders to help you stay on top of your health.' },

    ]
    return (
        <section className='w-full max-w-6xl mx-auto py-6'>
            <h2 className='text-2xl capitalize text-center font-light mb-4'>About <span className='font-semibold'>Us</span></h2>
            <div className='flex items-start gap-4 flex-col md:flex-row px-2 md:px-0 mb-10'>
                <img src={assets.about_image} alt="About us image" className='w-full md:w-[35%]' />
                <div className='text-[#4B5563] text-[15px] flex flex-col flex-nowrap gap-3'>
                    <p className='leading-relaxed'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                    <p className='leading-relaxed'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
                    <span className='font-semibold my-3'>Our Mission</span>
                    <p className='leading-relaxed'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                </div>
            </div>

            <div className='py-10 px-2'>
                <h1 className='text-center md:text-left font-light text-2xl uppercase mb-6'>Why <span className='font-semibold'>Choose us</span></h1>
                <div className='flex items-center flex-col md:flex-row'>
                    {
                        whyChooseUsData.map((item, index) => (
                            <div key={index} className="border px-12 py-10 flex flex-col text-[#4B5563] gap-4 w-full">
                                <h3 className='font-semibold text-[#1F2937] text-lg'>{item.title}</h3>
                                <p className='text-sm text-light'>{item.description}</p>
                            </div>
                        ))
                    }

                </div>
            </div>

        </section>
    )
}

export default About