import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [currentState, setCurrentState] = useState<string>("sign in");

    return (
        <section className="max-w-6xl mx-auto w-full py-6 flex items-start justify-center">
            <div className="px-6 py-10 border border-gray-50 shadow-lg rounded-lg  w-[476px] text-[#4B5563]">
                <h3 className="text-[#4B5563] text-2xl font-semibold mb-3">
                    {currentState === 'sign up' ? ' Create account' : 'Login '}
                </h3>
                <p className="text-sm mb-4">please {currentState} to book an appointment</p>
                <form>
                    {
                        currentState === 'sign up' && (<div className="flex flex-col gap-1.5 mb-2">
                            <label htmlFor="fullName" className="text-[15px]">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                className="border-[1px] border-[#DADADA] rounded-md outline-none focus:ring-[1px] focus-[#4B5563] py-2 px-4"
                            />
                        </div>)
                    }
                    <div className="flex flex-col gap-1.5 mb-2">
                        <label htmlFor="Email" className="text-[15px]">
                            Email
                        </label>
                        <input
                            type="email"
                            name="Email"
                            id="Email"
                            className="border-[1px] border-[#DADADA] rounded-md outline-none focus:ring-[1px] focus-[#4B5563] py-2 px-4"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5 mb-4">
                        <label htmlFor="Password" className="text-[15px]">
                            Password
                        </label>
                        <input
                            type="password"
                            name="Password"
                            id="Password"
                            className="border-[1px] border-[#DADADA] rounded-md outline-none focus:ring-[1px] focus-[#4B5563] py-2 px-4"
                        />
                    </div>
                    <button className="w-full p-3 rounded-md text-center bg-[#5F6FFF] text-white text-sm mb-4">{currentState === 'sign up' ? 'Create account' : 'Login'}</button>
                </form>
                <Link to="." className="text-sm">
                    {currentState === 'sign up' ? ' Already have an account?' : 'Donʹt have an account?'} {currentState === 'sign up' ? (<span className="text-[#5F6FFF]" onClick={() => setCurrentState('sign in')}>Login here</span>) : (<span onClick={() => setCurrentState('sign up')} className="text-[#5F6FFF]">Register here</span>)}
                </Link>
            </div>
        </section>
    );
}

export default Login;
