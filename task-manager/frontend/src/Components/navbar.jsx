import reactLogo from '../assets/react.svg';
import {useState} from 'react';
import { FaUser, FaShoppingCart, FaBell } from "react-icons/fa";

function Navbar() {
    const [activeModal, setActiveModal] = useState(null);
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
      <div className="fixed bg-white border border-gray-300 rounded-md shadow-lg p-4 w-64">
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 hover:cursor-pointer"
          onClick={() => setActiveModal(null)}
        >
          ×
        </button>
        <h3 className="font-bold mb-2">Notifications</h3>
        <p>You have 3 new notifications.</p>
      </div>
    )}
    {activeModal === 'shopping-cart' && (
      <div className="fixed top-16 right-4 bg-white border border-gray-300 rounded-md shadow-lg p-4 w-64">
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 hover:cursor-pointer"
          onClick={() => setActiveModal(null)}
        >
          ×
        </button>
        <h3 className="font-bold mb-2">Shopping Cart</h3>
        <p>Your cart is empty.</p>
      </div>
    )}
    {activeModal === 'user-profile' && (
      <div className="fixed top-16 right-4 bg-white border border-gray-300 rounded-md shadow-lg p-4 w-64">
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 hover:cursor-pointer"
          onClick={() => setActiveModal(null)}
        >
          ×
        </button>
        <h3 className="font-bold mb-2">User Profile</h3>
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
      </div>
    )}
    </div>
        
  );
  
};

export default Navbar;
