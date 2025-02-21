import { createPortal } from "react-dom";
import { FaCamera } from "react-icons/fa";
// import { assets } from "../assets/assets";

interface EditAccountModal {
    isOpen: boolean;
    onClose: (isOpen: boolean) => void;
}
function EditAccountModal({ isOpen, onClose }: EditAccountModal) {
    if (!isOpen) return null
    return createPortal(
        <div onClick={() => onClose(false)} className="w-full h-full z-50 absolute inset-0 flex justify-center items-center overflow-y-hidden bg-black/50 backdrop-blur-xs px-3.5">
            <div onClick={event => event.stopPropagation()} className="w-full md:max-w-md py-5 px-4 bg-white shadow-lg border-[1px] border-gray-50 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-[#1F2937]">Edit Your Profile</h2>
                <form className="space-y-2.5">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="profile" className="w-24 h-24 rounded-full border-[1px] relative border-gray-500">
                            {/* <img src={assets.profile_pic} className="w-full h-full rounded-full" alt="" /> */}
                            <FaCamera size={18} className="absolute bottom-0 right-1 z-20" />
                        </label>
                        <input type="file" name="profile" className="px-2 py-3 border-[1px] border-[#DADADA] rounded-md" id="profile" hidden />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="fullName" className="text-[15px] text-[#4B5563]">Full Name</label>
                        <input type="text" name="fullName" className="p-2 border-[1px] text-[13px] text-[#4B5563] border-[#DADADA] rounded-md" id="fullName" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-[15px] text-[#4B5563]">Email</label>
                        <input type="text" name="email" className="p-2 border-[1px] text-[13px] text-[#4B5563] border-[#DADADA] rounded-md" id="email" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="gender" className="text-[15px] text-[#4B5563]">gender</label>
                        <select name="gender" className="p-2 border-[1px] text-[13px] text-[#4B5563] border-[#DADADA] rounded-md" id="gender">
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="N/A">prefer not to say</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="birth" className="text-base text-[#4B5563]">birth</label>
                        <input type="date" name="birth" className="p-2 border-[1px] text-[13px] text-[#4B5563] border-[#DADADA] rounded-md" id="birth" />
                    </div>
                    <button className="py-3 rounded-md px-4 bg-[#5F6FFF] text-white text-sm w-full">Update Profile</button>

                </form>

            </div>
        </div>, document.body
    )
}

export default EditAccountModal