// src/layouts/MainLayout.jsx
import { useState } from 'react';
import Navbar from '../UI/navbar/Navbar';
import Drawer from '../UI/drawer/Drawer';
import { Outlet } from 'react-router';

export const MainLayout = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(true);

  return (
    <div className="APP-CONTAINER min-w-screen min-h-screen bg-white dark:bg-[#242424]d text-black dark:text-whited">
      {/* <div className="NAVBAR w-full h-full text-center"> */}
        <Navbar onMenuClick={() => setDrawerOpen(!isDrawerOpen)} />
      {/* </div> */}
      
      <div className="BODY w-full h-[calc(100vh_-_var(--navbar-height))] flex bg-blue-500/10">
        <Drawer isOpen={isDrawerOpen} />
        
        <div className="CONTENT w-full h-full bg-red-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout