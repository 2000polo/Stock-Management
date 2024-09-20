import React from 'react'
import { FaUser } from 'react-icons/fa';
import { HiMenuAlt1 } from 'react-icons/hi';
import { RiNotification4Fill } from 'react-icons/ri';

const NavBar = () => {
    return (
        // <div className="p-4 w-full lg:w-1/2">
        <div className="flex sticky top-0 z-20 bg-gray-900 py-3 px-2 w-full justify-between text-gray-900 border-b border-slate-700">
            <div className="flex space-x-2">
                <div className="hidden border-r border-gray-800">
                    <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                    alt="alt placeholder" className="w-8 h-8  inline mx-auto"/>
                </div>
                <div className="md:hidden cursor-pointer text-slate-400 hover:text-gray-700 p-2 bg-slate-600 rounded-full">
                    <HiMenuAlt1 fontSize={16} />  
                </div>
                {/* <div className=" cursor-pointer hover:text-gray-700 p-2 bg-gray-200 rounded-full">
                    <HiMenuAlt1 fontSize={16} />  
                </div> */}
            </div>
            
            <div className="flex space-x-2">
                <div className=" cursor-pointer hover:text-gray-700 p-2 text-slate-400 bg-slate-600 hover:text-green-500 rounded-full">
                    <RiNotification4Fill fontSize={16} />  
                </div>
                <div className="relative cursor-pointer hover:text-gray-700 p-2 text-slate-400 bg-slate-600 hover:text-green-500 rounded-full">
                    <FaUser fontSize={16} />  
                    <div className="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-green-500 text-white font-medium px-2 rounded-full">
                        3
                    </div>
                </div>
            </div>
            
        </div>
        // </div>
    )
}

export default NavBar;