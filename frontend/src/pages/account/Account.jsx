import React, { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import {Phone, Mail} from "lucide-react"
import useLogout from "../../hooks/useLogout";

const toPascalCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

const Account = () => {
  const [isPublic, setIsPublic] = useState(false);
  const { loading, logout } = useLogout();


  const { authUser } = useAuthContext();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 w-full">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4">
            <img
              src={`https://avatar.iran.liara.run/public/girl?username=${authUser.username}`}
              alt="Profile Picture"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{toPascalCase(authUser.fullName)}</h2>
          <p className="text-gray-600 mb-4">@{authUser.username}</p>
        </div>
        
        <div className="space-y-4 mb-6 flex flex-col">
          <div className="flex items-center space-x-4">
          <Mail/>
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="text-gray-800">{authUser.username}@gmail.com</p>
            </div>
            
          </div>
          <div className="flex items-center space-x-4">
          <Phone/>
            <div>
              <p className="text-sm font-medium text-gray-500">Phone</p>
              <p className="text-gray-800">+917895452420</p>
            </div>
            
          </div>
          
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-medium text-gray-700">Make profile public</span>
          <button
            className={`${
              isPublic ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            onClick={() => setIsPublic(!isPublic)}
          >
            <span
              className={`${
                isPublic ? 'translate-x-5' : 'translate-x-0'
              } inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
            />
          </button>
        </div>
        
        <button
          onClick={logout}
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Account;
