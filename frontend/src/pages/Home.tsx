import BookAppointment from "../components/BookAppointment"
import Hero from "../components/Hero"
import Specialty from "../components/Specialty"
import TopDoctors from "../components/TopDoctors"

function Home() {
    return (
        <main className='max-w-6xl  mx-auto py-3 space-y-2.5'>
            <Hero />
            <Specialty />
            <TopDoctors />
            <BookAppointment />
        </main>
    )
}

export default Home