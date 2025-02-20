import { Link } from "react-router-dom";

interface DoctorCardPropType {
    image: string;
    doctorName: string;
    specialty: string;
    doctorId: string;
}
function DoctorCard({ image, doctorName, specialty, doctorId }: DoctorCardPropType) {
    return (
        <Link to={`/doctor/${doctorId}`} className=" block mx-w-[273px] border border-slate-200 rounded-md cursor-pointer">
            <div className="w-full bg-[#EAEFFF]">
                <img src={image} alt="doctor image" className="w-full h-full object-cover hover:scale-105 transition-all ease-in-out" />
            </div>
            <p className="text-[#0FBF00] flex items-center gap-1.5 px-2 mt-2 font-semibold text-sm"><span className="text-2xl">•</span>Available</p>
            <p className="font-semibold text-base px-2 mb-2">{doctorName}</p>
            <p className="text-[#4B5563] text-xs px-2  pb-3">{specialty}</p>

        </Link>
    )
}

export default DoctorCard