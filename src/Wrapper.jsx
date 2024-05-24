import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header';

const Wrapper = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

    const isLoginPage = location.pathname === '/';
  return (
    <div className="flex h-screen">
    {!isLoginPage && (
        <>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        </>
    )}
    <div className={`flex flex-col w-full ${!isLoginPage ? 'ml-64' : 'ml-0'}`}>
        {!isLoginPage && (
            <div className="fixed w-full">
                <Header />
            </div>
        )}
        <div className={`flex-grow ${!isLoginPage ? 'pt-24 px-5' : 'pt-0'} `}>
            <Outlet />
        </div>
    </div>
</div>
  )
}

export default Wrapper 