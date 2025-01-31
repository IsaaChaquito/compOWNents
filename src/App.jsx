

// import { AppProvider } from './context/app-provider'
// import { Navbar } from './UI/navbar/navbar'
// import Drawer from './UI/drawer/Drawer'
import MainLayout from "./UI/MainLayout"


function App() {
  

  return (
    <MainLayout>
      <div className="BODY w-full h-[calc(100vh_-_var(--navbar-heigth))] flex bg-red-300">BODY</div>
    </MainLayout>
      // <div className='APP-CONTAINER min-w-screen min-h-screen bg-white dark:bg-[#242424]d text-black dark:text-whited '>

      //   <div className='NAVBAR w-full h-full text-center'>
      //     <Navbar />
      //   </div>
      //   <div className='BODY w-full h-[calc(100vh_-_var(--navbar-heigth))] flex'>
      //     <Drawer />

      //     <div className='CONTENT w-full h-full flex justify-center items-center'>
      //       BODY
      //     </div>
      //   </div>
        
      // </div>
  )
}

export default App
