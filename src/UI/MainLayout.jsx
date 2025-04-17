// src/layouts/MainLayout.jsx
import { useState } from 'react';
import Navbar from '../UI/navbar/Navbar';
import Drawer from '../UI/drawer/Drawer';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { useProvider } from '../context/useProvider';
import { RightSidebarMenu } from './rightSidebar/RightSidebarMenu';
import { Console } from './console/Console';
import Reducers from '../context/reducers';

export const navigationItems = [
  {
    id: 1,
    name: 'Classics',
    link: '#classics',
  },
  {
    id: 2,
    name: 'Disabled',
    link: '#disabled',
  },
  {
    id: 3,
    name: 'Sizes',
    link: '#sizes',
  },
  {
    id: 4,
    name: 'Outlined',
    link: '#outlined',
  },
  {
    id: 5,
    name: 'Solid',
    link: '#solid',
  },
  {
    id: 6,
    name: 'Custom styles',
    link: '#custom-styles',
  },
  {
    id: 7,
    name: 'Custom classes',
    link: '#custom-classes',
  },
  {
    id: 8,
    name: 'Loading state',
    link: '#loading-state',
  },
  {
    id: 9,
    name: 'Timed button',
    link: '#timed-button',
  },
  {
    id: 10,
    name: 'Neon glow master mega epic 30000',
    link: '#neon-glow',
  },
]

export const MainLayout = () => {

  const [activeItem, setActiveItem] = useState(1);
  const { drawerState, drawerDispatch } = useProvider()


  return (
    <div className="min-h-screen w-full grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr_auto] relative">
      {/* Navbar */}
      <header className="col-span-3 bg-gray-800 text-white">
        <Navbar 
          onMenuClick={
            // () => setDrawerOpen(!isDrawerOpen)
            () => drawerDispatch({ type: 'SET_IS_EXPANDED', payload: !drawerState.isExpanded })
          } 
        />
      </header>
      

      {/* Left Sidebar */}
      <aside
        className={` h-screen sticky top-0 bg-gray-100`}
      >
        <Drawer isExpanded={drawerState.isExpanded} />
      </aside>

      {/* Content */}
      <main className="bg-white overflow-x-hidden z-10 relative w-full mb-24">
        <Outlet/>
        <Reducers />
      </main>

      {/* Right Sidebar */}
      <aside className="bg-gray-100 h-screen sticky top-0 overflow-y-auto ">
        {
          navigationItems?.length > 0 && (
            <RightSidebarMenu 
              items={navigationItems} 
              activeItem={activeItem} 
              setActiveItem={setActiveItem} 
            />
          )
        }
      </aside>

      <div className='flex justify-end sticky bottom-0 p-2 col-span-3 w-full z-10 pointer-events-none'>
        <Console output={'response by clicking the button'} />
      </div>


      {/* Footer */}
      <footer className="col-span-3 bg-gray-800 text-white z-10">
        <Footer />
      </footer>
    </div>
  );
}


export default MainLayout