import React from 'react'
import { router } from '../config/routes'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt1 } from 'react-icons/hi'

const MenuItem = (
    <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:text-primary" href="#">
        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span className="ml-2 hidden lg:block text-sm font-medium">Dasboard</span>
    </a>
)

const MobileSideMenu = () => {

    let location = useLocation();

    console.log(location)

    return (
        // <div className="sticky absolute top-0 left-0 sm:flex md:hidden flex-col items-center w-fit lg:w-64 h-screen overflow-hidden rounded border-r border-slate-700">
        //     <a className="flex items-center w-full px-3 mt-3" href="#">
        //         <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        //             <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        //         </svg>
        //         <span className="ml-2 hidden lg:block text-sm font-bold">The App</span>
        //     </a>
        //     <div className="w-full ">
        //         <div className="flex flex-col items-center w-full mt-3 border-t border-slate-700">
                    
        //             {/* {
        //                 router?.routes[1]?.children?.map((route) => {
        //                     return (
        //                         <Link className="flex items-center w-full h-12 px-3 mt-2 rounded hover:text-primary" to={route.path}>
        //                             <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        //                             </svg>
        //                             <span className="ml-2 hidden lg:block text-sm font-medium">Dasboard</span>
        //                         </Link>
        //                     )
        //                 })
        //             } */}
        //         </div>
        //     </div>
        //     <a className="flex items-center justify-center w-full h-16 mt-auto  hover:text-primary" href="#">
        //         <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        //         </svg>
        //         <span className="ml-2 hidden lg:block text-sm font-medium">Account</span>
        //     </a>
        // </div>
        <div className="drawer drawer-start">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                {/* <label  className="drawer-button btn btn-primary">Open drawer</label> */}
                <label htmlFor="my-drawer-4" className="drawer-button">
                <HiMenuAlt1 fontSize={16} />  
                </label>
            </div>
            <div className="drawer-side z-30">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="sticky bg-gray-900 absolute top-0 left-0 sm:flex md:hidden flex-col items-center w-fit w-64 h-screen overflow-hidden rounded border-r border-slate-700">
                    <a className="flex items-center w-full px-3 mt-3 text-gray-900" href="#">
                        <svg className=" bg-green-500 rounded p-1 w-9 h-9 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                        </svg>
                        <span className="ml-2 lg:block font-bold text-green-500">Stock<span className='font-normal text-green-600'>Manager</span></span>
                    </a>
                    <div className="w-full ">
                        <div className="flex flex-col items-center w-full mt-3 border-t border-slate-700">
                            {
                                router?.routes[1]?.children?.map((route) => {
                                    return (
                                        <Link className={`flex items-center w-full h-12 px-3 mt-2 text-gray-400 hover:text-primary ${location?.pathname === route?.path ? 'border-l-2 border-green-400 border-outer' : 'text-gray-200' } `} to={route.path}>
                                            {/* <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                            </svg> */}
                                            <span className={`${location?.pathname === route?.path ? 'text-green-400' : 'text-gray-200' } bg-gray-800 text-white p-2 rounded`}>{route?.icon}</span>
                                            <span className={`${location?.pathname === route?.path ? 'text-green-400' : 'text-gray-200' } ml-2 block font-base`}>{route?.title}</span>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <a className="flex items-center justify-center w-full h-16 mt-auto  hover:text-primary" href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="ml-2 hidden lg:block text-sm font-medium">Account</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MobileSideMenu