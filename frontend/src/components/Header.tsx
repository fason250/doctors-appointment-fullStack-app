import { NavLink, useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

function Header() {
    const navigate = useNavigate()

    return (
        <header className="max-w-6xl w-full py-3 border-b-[1px] border-gray-200 mx-auto flex justify-between items-center mb-4">

            <img src={assets.logo} alt="logo image" onClick={() => navigate("/")} className="cursor-pointer" />
            <ul className="md:flex gap-6 items-center hidden">
                <li><NavLink to={"/"} className={({ isActive }) => isActive ? `text-[#5F6FFF] font-semibold` : ``}>Home</NavLink></li>
                <li><NavLink to={"/allDoctors"} className={({ isActive }) => isActive ? `text-[#5F6FFF]` : ``}>All Doctors</NavLink></li>
                <li><NavLink to={"/about"} className={({ isActive }) => isActive ? `text-[#5F6FFF]` : ``}>About</NavLink></li>
                <li><NavLink to={"/contact"} className={({ isActive }) => isActive ? `text-[#5F6FFF]` : ``}>Contact</NavLink></li>
            </ul>
            <button onClick={() => navigate("/login")} className="py-3 px-6 rounded-3xl text-sm bg-[#5F6FFF] text-white cursor-pointer">Create Account</button>
        </header>
    )
}

export default Header