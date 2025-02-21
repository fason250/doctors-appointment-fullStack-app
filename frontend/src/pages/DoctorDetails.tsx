import { useParams } from "react-router-dom"
import { allDoctors, assets, type DoctorType } from "../assets/assets"
import { useEffect, useState } from "react"
import { MdInfoOutline } from "react-icons/md";
import SectionTitle from "../components/SectionTitle";
import DoctorCard from "../components/DoctorCard";


//getting next 7 days dates dynamically

function generate7days(): AppointmentDaysType[] {
    const days = []
    const currentDate = new Date()

    for (let i = 0; i < 7; i++) {
        const futureDay = new Date()
        futureDay.setDate(currentDate.getDate() + i)
        days.push({
            dayName: futureDay.toLocaleDateString("en-Us", { weekday: "short" }),
            date: futureDay.getDate()
        })
    }
    return days
}

interface AppointmentDaysType {
    date: number;
    dayName: string;
}
function DoctorDetails() {
    const [doctor, setDoctor] = useState<DoctorType | undefined>(undefined)
    const [appointmentDays, setAppointmentDays] = useState<AppointmentDaysType[]>(generate7days())
    const [selectedAppointment, setSelectedAppointment] = useState<AppointmentDaysType | undefined>(undefined)
    const [relatedDoctors, setRelateDoctors] = useState<DoctorType[]>([])
    const [selectedHour, setSelectedHour] = useState<string>('')
    const { doctorId } = useParams()
    const hours: string[] = ["8:00Am", "9:30Am", "11:00Am", "14:45PM", "18:00PM"]


    useEffect(() => {
        const doctorDetails = allDoctors.find(doctor => doctor._id === doctorId)
        const filterRelatedDoc = allDoctors.filter(doctor => doctor?.specialty === doctorDetails?.specialty)
        setDoctor(doctorDetails)
        setRelateDoctors(filterRelatedDoc)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [doctorId])

    // update appointments days on midnight
    useEffect(() => {
        const intervalId = setInterval(() => {
            setAppointmentDays(generate7days())
        }, 1000 * 60 * 60 * 24)

        return () => clearInterval(intervalId)
    }, [])

    console.log(selectedAppointment)
    const handleBookAppointment = (selectedDate: AppointmentDaysType) => {
        setSelectedAppointment((prevSelectedAppointment) => {
            if (prevSelectedAppointment?.date === selectedDate.date && prevSelectedAppointment?.dayName === selectedDate.dayName) {
                return undefined
            }
            return selectedDate
        })
    }

    const handleSelectHour = (hour: string) => {

        setSelectedHour(prevSelectedHour => {
            if (prevSelectedHour === hour) {
                return ""
            } else {
                return hour
            }
        })
    }

    return (
        <div className="max-w-6xl mx-auto py-6 mb-4 px-2 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-3 mb-6">
                <div className="w-full md:w-2/3 h-full">
                    <div className="bg-[#5F6FFF] rounded-lg md:h-70 flex items-center justify-center">
                        <img src={doctor?.image} alt="doctor image" className="h-full" />
                    </div>
                </div>

                <section className="space-y-2.5">
                    <div className="border border-[#d7dce6] rounded-md p-6 flex flex-col gap-2">
                        <h2 className="text-2xl text-[#1F2937] font-medium flex items-center gap-2">{doctor?.name} <img src={assets.verified_icon} alt="verified image" /></h2>
                        <p className="text-[#4B5563] text-base">{doctor?.degree} - <span className="capitalize mr-1.5">{doctor?.specialty}</span> <span className="px-3 py-1 text-sm border border-[#1F2937] rounded-3xl">{doctor?.experience}</span></p>
                        <p className="text-[#1F2937] font-semibold text-base flex items-center gap-1">About <span><MdInfoOutline size={18} className="" /></span></p>
                        <p className="text-sm text-[#4B5563] leading-relaxed">{doctor?.about}</p>
                        <p className="text-base text-[#4B5563] my-3">Appointment Fee: <span className="font-semibold text-[#1F2937]">{doctor?.fees}$</span></p>
                    </div>

                    <section className="flex flex-col gap-2 py-2">
                        <div className=" p-4 flex flex-col gap-2">
                            <h2 className="text-lg text-[#565656] font-semibold">Booking slots</h2>
                            <div className="flex items-center gap-2 py-2 flex-wrap mb-2">
                                {
                                    appointmentDays.map((day, index) => (
                                        <div
                                            key={index}
                                            className={`${selectedAppointment?.date === day.date && selectedAppointment?.dayName === day.dayName ? 'bg-[#5F6FFF] text-white border-transparent' : ''}border-gray-500 border-[1px] text-[#565656] py-4 drop-shadow-md px-2 w-16 rounded-4xl `}
                                            onClick={() => handleBookAppointment(day)}>
                                            <p className="flex flex-col gap-2 items-center justify-center">
                                                <span>{day.dayName}</span>
                                                <span>{day.date}</span>
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="flex items-center gap-2 flex-wrap mb-3">
                                {
                                    hours.map((hour, index) => (
                                        <button
                                            key={index}
                                            className={`px-10 rounded-3xl py-2 text-sm border-[1px] border-[#565656] ${hour === selectedHour ? 'bg-[#5F6FFF] text-white' : ''}`}
                                            onClick={() => handleSelectHour(hour)}
                                        >{hour}</button>
                                    ))
                                }

                            </div>

                            <button className="px-6 py-3 w-50 rounded-3xl bg-[#5F6FFF] text-white text-sm cursor-pointer hover:scale-105 transition-all ease-in-out">Book an Appointment</button>
                        </div>
                    </section>
                </section>
            </div>
            <div className="py-6 w-full space-y-1.5">
                <div className="w-full flex justify-center items-center">
                    <SectionTitle title="Relate Doctors" text="Simply browse through our extensive list of trusted doctors." />
                </div>
                <div className="px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                    {
                        relatedDoctors.map(doctor => (
                            <DoctorCard key={doctor._id} image={doctor.image} doctorName={doctor.name} specialty={doctor.specialty} doctorId={doctor._id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DoctorDetails