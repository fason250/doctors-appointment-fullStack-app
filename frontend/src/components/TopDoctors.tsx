import SectionTitle from './SectionTitle'
import DoctorCard from './DoctorCard'
import { allDoctors, type DoctorType } from '../assets/assets'
import { useEffect, useState } from 'react'

function TopDoctors() {
    const [topDoctors, setTopDoctors] = useState<DoctorType[]>([])

    useEffect(() => {
        const doctors = allDoctors.slice(0, 8)
        setTopDoctors(doctors)
    }, [])

    return (
        <section className='flex flex-col gap-3.5 w-full items-center justify-center py-10 mb-4'>
            <SectionTitle title='Top Doctors To Book' text='Simply browse through our extensive list of trusted doctors.' />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 py-3 px-2  ">
                {
                    topDoctors.map(doctor => (
                        <DoctorCard key={doctor._id} image={doctor.image} doctorName={doctor.name} specialty={doctor.specialty} doctorId={doctor._id} />
                    ))
                }
            </div>
            <button className='px-12 py-2 bg-[#EAEFFF] rounded-3xl text-[#4B5563]'>More</button>
        </section>
    )
}

export default TopDoctors