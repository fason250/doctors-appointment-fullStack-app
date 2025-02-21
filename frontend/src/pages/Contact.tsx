import { assets } from "../assets/assets"

function Contact() {
    return (
        <section className="max-w-6xl w-full py-10 mx-auto px-2">
            <h1 className="text-center text-2xl font-light mb-6 uppercase">Contact <span className="font-semibold">us</span></h1>
            <div className="flex items-center gap-3 flex-col sm:flex-row">
                <img src={assets.contact_image} alt="contact us image" className="w-full sm:w-[40%]" />
                <div className="flex flex-col gap-2 text-[#4B5563] px-4 w-full md:w-[40%]">
                    <h3 className="text-xl font-semibold mb-4">Our Office</h3>
                    <p className="flex flex-col gap-1.5 text-sm mb-6">
                        <span>54709 Williams Station </span>
                        <span>Suite 350, Washington, USA</span>
                    </p>
                    <p className="flex flex-col gap-1.5 text-sm mb-6">
                        <span>Tel: (415) 555‑0132 </span>
                        <span>Email: jeyfason34@gmail.com</span>
                    </p>
                    <h3 className="text-cl font-semibold mb-3 uppercase">Careers at PRESCRIPTO</h3>
                    <p className="text-[15px] mb-4">Learn more about our teams and job openings.</p>
                    <button className="px-4 py-2 border border-[#4B5563] text-sm w-[40%] hover:scale-105 transition-all ease-in-out">Explorer Job</button>

                </div>
            </div>
        </section>
    )
}

export default Contact