/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { allDoctors, type DoctorType, specialtyData } from "../assets/assets"
import DoctorCard from "../components/DoctorCard"

function DoctorsList() {
    const [doctorsList, setDoctorsList] = useState<DoctorType[]>(allDoctors)
    const [docSpecialty, setDocSpecialty] = useState<string>("")

    const filterSpecialty = (doctors: DoctorType[], specialty: string): DoctorType[] => {
        if (specialty) {
            const newDoctorsList = doctors.filter(doctor => doctor.specialty.toLowerCase() === docSpecialty.toLowerCase())
            if (newDoctorsList.length > 0) {
                return newDoctorsList
            }
        }
        return doctors
    }

    useEffect(() => {
        const newDocs = filterSpecialty(allDoctors, docSpecialty)
        setDoctorsList(newDocs)
    }, [docSpecialty])



    return (
        <section className="max-w-6xl w-full py-6 mx-auto mb-4 px-2">
            <p className="capitalize text-[#4B5563] text-sm mb-3">browser through the doctors specialists</p>
            <div className="flex gap-2 flex-col md:flex-row w-full items-start">
                <aside className="w-full sm:w-[200px] flex flex-row md:flex-col gap-2 md:gap-3 flex-wrap">
                    {
                        specialtyData.map(((specialty, index) => (
                            <button
                                className={`w-full px-6 py-2 rounded-lg text-sm text-left text-[#414040] cursor-pointer border border-[#B4B4B4] ${docSpecialty.toLowerCase() === specialty.specialty.toLowerCase() && 'bg-[#E2E5FF]'}`}
                                key={index}
                                onClick={() => setDocSpecialty(prevS => prevS.toLowerCase() === specialty.specialty.toLowerCase() ? '' : specialty.specialty)}
                            >{specialty.specialty}</button>
                        )))
                    }
                </aside>

                {/* doctors */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                    {
                        doctorsList.map(doctor => (
                            <DoctorCard key={doctor._id} image={doctor.image} doctorName={doctor.name} specialty={doctor.specialty} doctorId={doctor._id} />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default DoctorsList