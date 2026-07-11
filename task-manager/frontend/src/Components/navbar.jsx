import reactLogo from '../assets/react.svg';
import {useState, useEffect} from 'react';
import { FaUser, FaShoppingCart, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getMe } from "../api/user_api";    

function Navbar() {
    const [token, setToken] = useState(localStorage.getItem("token"));
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
      localStorage.removeItem('token');
      setToken(null);
      setActiveModal(null);
      navigate("/login");
    }

    useEffect(() => { //this updates the token state whenever the auth-change event is triggered, ensuring that the Navbar reflects the current authentication status.
      const updateToken = () => {
        setToken(localStorage.getItem("token"));
    };
        window.addEventListener("auth-change", updateToken);
     return () => {
        window.removeEventListener("auth-change", updateToken);
    };
    }, []);

  return (
    <div className="bg-gray-900 flex items-center justify-between px-4 md:px-10 lg:px-64 py-4"> {/* upper part */}
          <div className="shrink-0"> {/* logo */}
            <a href="/">
              <img src={reactLogo} alt="React Logo" className="h-14 w-14 md:h-20 md:w-20 lg:h-25 lg:w-25"/>
            </a>
          </div>
          <div className="flex-1 flex justify-center"> {/* search bar */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-xs md:max-w-md md:h-12 lg:max-w-3/5 lg:h-14 border border-gray-300 rounded-md px-3 py-2 text-white"
            />
          </div>
          <div className="flex items-center gap-12 shrink-0"> {/* icons */}
            <FaBell className="text-2xl text-gray-600 hover:text-blue-400 cursor-pointer" 
            onClick={() => setActiveModal('notifications')}
            />
            <FaShoppingCart className="text-2xl text-gray-600 hover:text-blue-400 cursor-pointer " 
            onClick={() => setActiveModal('shopping-cart')}
            />
            <FaUser className="text-2xl text-gray-600 hover:text-blue-400 cursor-pointer " 
            onClick={() => setActiveModal('user-profile')}  
            />
          </div>

        
    {/* modals */}
    {activeModal === 'notifications' && (
      <div className="fixed top-36 right-97 bg-white border border-gray-300 rounded-md shadow-lg p-4 w-64">
        <button 
          className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700 hover:cursor-pointer"
          onClick={() => setActiveModal(null)}
        >
          ×
        </button>
        <h3 className="font-bold mb-2">Notifications</h3>
        <p>You have 3 new notifications.</p>
      </div>
    )}
    {activeModal === 'shopping-cart' && (
      <div className="fixed top-36 right-78 bg-white border border-gray-300 rounded-md shadow-lg p-4 w-64">
        <button 
          className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700 hover:cursor-pointer"
          onClick={() => setActiveModal(null)}
        >
          ×
        </button>
        <h3 className="font-bold mb-2">Shopping Cart</h3>
        <p>Your cart is empty.</p>
      </div>
    )}
    {activeModal === 'user-profile' && (
      <div className="fixed top-36 right-60 bg-white border border-gray-300 rounded-md shadow-lg p-4 w-64">
        <button 
          className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700 hover:cursor-pointer"
          onClick={() => setActiveModal(null)}
        >
          ×
        </button>
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
        
  );
  
};

export default Navbar;
