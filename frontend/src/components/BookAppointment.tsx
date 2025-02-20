import { assets } from "../assets/assets"

function BookAppointment() {
    return (
        <section className="w-full flex items-center bg-[#5F6FFF] text-white gap-2 flex-row rounded-lg h-[440px] relative px-10">
            <div className="w-2/4 ">
                <h1 className="text-xl md:text-4xl  font-medium mb-3.5">Book Appointment
                    With 100+ Trusted Doctor</h1>
                <button className="px-6 md:px-10 py-3 bg-white text-black text-sm rounded-3xl">Create account</button>
            </div>
            <div className="md:h-full h-[400px] w-1/2 md:absolute md:-top-6 md:right-1.5 md:w-1/2">
                <img src={assets.appointment_img} alt="" className="w-full md:w-4xl h-full object-contain" />
            </div>
        </section>
    )
}

export default BookAppointment