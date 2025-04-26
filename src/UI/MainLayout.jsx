// src/layouts/MainLayout.jsx
import { useEffect } from 'react';
import Navbar from '../UI/navbar/Navbar';
import Drawer from '../UI/drawer/Drawer';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { useProvider } from '../context/useProvider';
import { RightSidebarMenu } from './rightSidebar/RightSidebarMenu';
import { Console } from './console/Console';

export const MainLayout = () => {

  const { state, dispatch } = useProvider()

  useEffect(() => {
    const handleScroll = () => {
      // Obtener todas las secciones
      const sections = document.querySelectorAll('section'); // Ajusta a tus selectores

      const scrollPosition = window.scrollY + 100; // Offset para activar un poco antes
      
      // Encontrar la sección actualmente visible
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // console.log('sectionId', sectionId);
          // console.log('index', state?.rightSidebar?.sections.findIndex( section => section.link === sectionId ));
          dispatch({ 
            type: 'rightSidebar/SET_ACTIVE_SECTION', 
            payload: state?.rightSidebar?.sections.find( section => section?.link === `${sectionId}` )?.id
          })
          // console.log('activeSection', state?.rightSidebar?.activeSection);
        }
      });
    };
    
    // Agregar event listener al montar el componente
    window.addEventListener('scroll', handleScroll);
    
    // Ejecutar una vez para establecer la sección inicial
    handleScroll();
    
    // Limpiar event listener al desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen w-full grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr_auto] relative">
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      {/* Navbar */}
      <header className="col-span-3 bg-gray-800 text-white">
        <Navbar 
          onMenuClick={
            () => dispatch({ type: 'drawer/SET_IS_EXPANDED', payload: !state?.drawer?.isExpanded })
          } 
        />
      </header>
      

      {/* Left Sidebar */}
      <aside
        className={` h-screen sticky top-0 bg-gray-100`}
      >
        <Drawer />
      </aside>

      {/* Content */}
      <main className="bg-white overflow-x-hidden z-10 relative w-full mb-24">
        <Outlet/>
      </main>

      {/* Right Sidebar */}
      <aside className="bg-gray-100 h-screen sticky top-0 overflow-y-auto ">
        
      <RightSidebarMenu />
        
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