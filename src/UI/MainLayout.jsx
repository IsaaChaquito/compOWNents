// src/layouts/MainLayout.jsx
import { useState } from 'react';
import Navbar from '../UI/navbar/Navbar';
import Drawer from '../UI/drawer/Drawer';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { RightHandIcon } from '../assets/icons';
import { useProvider } from '../context/useProvider';

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
    name: 'Neon glow master mega epic 3000',
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
        className={`relative bg-gray-100  transition-all duration-300 ease-in-out ${
          drawerState.isExpanded ? 'w-[var(--drawer-width)]' : 'w-16 !px-0 '
        }`}
      >
        <Drawer />
      </aside>

      {/* Content */}
      <main className="bg-white overflow-x-hidden z-10 relative w-full">
        <Outlet/>
      </main>

      {/* Right Sidebar */}
      <aside className="bg-gray-100 p-4 w-[var(--drawer-width)] sticky top-0 right-0 bottom-0 left-0 h-[calc(100vh_+_var(--navbar-height))] overflow-y-auto">
        <h2 className='font-bold text-sm'>Viewing</h2>
        <ul className='px-4 *:py-1 relative'>
          <RightHandIcon 
            style={{
              transform: `translateY(${32 * (activeItem - 1)}px)`,
            }}
            className='w-6.5 h-6.5 absolute top-1 -left-2.5 duration-300 ease-in-out text-indigo-500' 
          />

          {navigationItems.map((item) => (
            <li 
              onClick={() => setActiveItem(item.id)}
              className={`cursor-pointer p-2 overflow-hidden text-ellipsis whitespace-nowrap duration-300 ease-in-out rounded-r-full hover:bg-gray-500/10 ${activeItem === item.id ? 'bg-indigo-500/10 ' : ''}`} 
              key={item.id}
              title={item.name}
            >
              <a 
                href={item.link}
                className={` ${activeItem === item.id ? 'text-indigo-500/100' : ''}`}
              >
                {item.name}
              </a>
            </li>
          ))}

        </ul>
      </aside>

      {/* Footer */}
      <footer className="col-span-3 bg-gray-800 text-white z-10">
        <Footer />
      </footer>
    </div>
  );
}


export default MainLayout