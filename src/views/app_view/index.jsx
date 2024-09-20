import React from 'react'
import { Outlet } from 'react-router-dom';
import SideMenu from '../../shared_components/SideMenu';
import NavBar from '../../shared_components/NavBar';

const AppView = () => {
  return (
    <div>
        <div className="flex w-screen">
            <SideMenu />

            <div className="w-full">
                <NavBar />

                <main className='p-3'>
                    <Outlet />
                </main>
            </div>
        </div>
        
        
    </div>
  )
}

export default AppView;
