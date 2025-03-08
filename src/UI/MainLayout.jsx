// src/layouts/MainLayout.jsx
import { useState } from 'react';
import Navbar from '../UI/navbar/Navbar';
import Drawer from '../UI/drawer/Drawer';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

export const MainLayout = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(true);

  // return (
  //   <div className="APP-CONTAINER w-full min-h-screen bg-white dark:bg-[#242424]d text-black dark:text-whited">

  //     <Navbar 
  //       onMenuClick={() => setDrawerOpen(!isDrawerOpen)} 
  //     />

      
  //     <div className="BODY relative w-full min-h-[calc(100vh_-_var(--navbar-height))] flex bg-blue-500/10">
  //       <Drawer isOpen={isDrawerOpen} />
        
  //       <div className="CONTENT relative min-w-[calc(200px+var(--drawer-width))] h-full bg-white px-2 ">
  //         <Outlet/>

  //         <Console />
  //       </div>

  //       {/* <div className="RIGHT-SIDE-MENU w-full h-full bg-white text-nowrap">
  //         Right side menu info
  //       </div> */}
  //     </div>
  //   </div>
  // );

  return (
    <div className="min-h-screen w-full grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr_auto] ">
      {/* Navbar */}
      <header className="col-span-3 bg-gray-800 text-white p-4">
        <Navbar 
          onMenuClick={() => setDrawerOpen(!isDrawerOpen)} 
        />
      </header>

      {/* Left Sidebar */}
      <aside
        className={`relative bg-gray-100  transition-all duration-300 ease-in-out ${
          isDrawerOpen ? 'w-[var(--drawer-width)]' : 'w-10 !px-0 overflow-hidden'
        }`}
      >
        <button
          className="mb-4 w-24 bg-blue-500 text-white px-2 py-1 rounded"
          onClick={() => setDrawerOpen(!isDrawerOpen)}
        >
          {isDrawerOpen ? 'Cerrar' : 'Abrir'}
        </button>
        <Drawer isOpen={isDrawerOpen} />
      </aside>

      {/* Content */}
      <main className="bg-white p-4 overflow-x-hidden z-10 relative">
        <Outlet/>
      </main>

      {/* Right Sidebar */}
      <aside className="bg-gray-100 p-4 w-[var(--drawer-width)]">
        Right Sidebar
      </aside>

      {/* Footer */}
      <footer className="col-span-3 bg-gray-800 text-white">
        <Footer />
      </footer>
    </div>
  );
}


export default MainLayout