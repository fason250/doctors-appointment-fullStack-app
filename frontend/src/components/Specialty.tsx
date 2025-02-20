import { specialtyData } from "../assets/assets"
import SectionTitle from "./SectionTitle"

function Specialty() {
    return (
        <section className="py-6 md:py-10 flex flex-col items-center md:justify-center">
            <SectionTitle title="Find By Specialty" text="Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free." />
            <div className="flex items-center gap-4 flex-wrap px-3">
                {
                    specialtyData.map((specialty, index) => (
                        <div key={index}>
                            <img src={specialty.image} alt="specialty image" className='w-24 h-24 object-cover rounded-full mb-2' />
                            <p className="text-[#4B5563] text-sm">{specialty.specialty}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Specialty