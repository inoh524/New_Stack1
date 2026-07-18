import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getMe } from "../api/user_api";

function Navbar() {
    const [token, setToken] = useState(sessionStorage.getItem("token"));
    const [activeModal, setActiveModal] = useState(null);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            if (!token) {
                setUser(null);
                return;
            }

            try {
                const data = await getMe();
                setUser(data);
            } catch (err) {
                console.error(err);
                setUser(null);
            }
        };

        fetchUser();
    }, [token]);

    const handle_logout = () => {
        // Clear the authentication token from localStorage
        sessionStorage.removeItem('token');
        setToken(null);
        setActiveModal(null);
        navigate("/login");
    }

    useEffect(() => { //this updates the token state whenever the auth-change event is triggered, ensuring that the Navbar reflects the current authentication status.
        const updateToken = () => {
            setToken(sessionStorage.getItem("token"));
        };
        window.addEventListener("auth-change", updateToken);
        return () => {
            window.removeEventListener("auth-change", updateToken);
        };
    }, []);

    return (
        <div className=" bg-[#01161f] flex justify-center items-center px-60 gap-110"> {/* upper part */}
            <div className="px-4 md:px-10 lg:px-10 py-6">
                <a href="/dashboard" className="relative flex font-mono font-bold text-4xl text-white hover:text-[#00fffb] 
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-[#00fffb]
                after:transition-all
                after:duration-300
                hover:after:w-full
                cursor-pointer">
                    Portfolio <a className="text-[#00fffb]">/</a>
                </a>
            </div>


            {/*icons color [#00fffb] */}
            <div className="flex gap-12 px-4 md:px-10 lg:px-24 py-20"> {/* nav */}

                <a href="/about" className="relative text-white text-2xl font-mono font-light hover:text-[#00fffb] 
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                  after:bg-[#00fffb]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                    cursor-pointer">
                    About
                </a>

                <a href="/services" className="relative text-white text-2xl font-mono font-light hover:text-[#00fffb] 
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                  after:bg-[#00fffb]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                    cursor-pointer">
                    Projects
                </a>

                <a href="/contact" className="relative text-white text-2xl font-mono font-light hover:text-[#00fffb] 
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                  after:bg-[#00fffb]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                    cursor-pointer">
                    Contact
                </a>

                <div className="relative">
                    <a className="relative text-white text-2xl font-mono font-light hover:text-[#00fffb] 
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                  after:bg-[#00fffb]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                    cursor-pointer" onClick={() => setActiveModal('user-profile')}  >
                        Login
                    </a>

                    {activeModal === 'user-profile' && (
                        <div className="absolute top-full right-0 bg-white border border-gray-300 rounded-md shadow-lg p-4 w-64">
                            <button
                                className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700 hover:cursor-pointer"
                                onClick={() => setActiveModal(null)}
                            >
                                ×
                            </button>
                            <h5 className="font-bold text-red-600">"Made this just to try"</h5>
                            <h3 className="font-bold">User Profile</h3>
                            <div className="text-gray-600 pb-4">
                                {token && user ? (
                                    <>
                                        <p>Name: {user.first_name} {user.last_name}</p>
                                    </>
                                ) : (
                                    <p>No Account signed in</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-1">

                                {!token && (
                                    <a href="/register" className="text-blue-500 hover:text-blue-700">
                                        Sign Up
                                    </a>
                                )}

                                {token ? (
                                    <button
                                        onClick={handle_logout}
                                        className="text-left text-red-500 hover:text-red-700 hover:cursor-pointer"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <a href="/login" className="text-blue-500 hover:text-blue-700">
                                        Login
                                    </a>
                                )}

                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>

    );

};

export default Navbar;
