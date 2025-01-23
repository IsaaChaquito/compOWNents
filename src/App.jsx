

// import { AppProvider } from './context/app-provider'
import { Navbar } from './modules/Navbar/Navbar'
import Drawer from './UI/drawer/Drawer'


function App() {
  

  return (
      <div className='APP-CONTAINER min-w-screen min-h-screen bg-white dark:bg-[#242424] text-black dark:text-white flex flex-col items-center'>
        <Navbar />
        <Drawer />
      </div>
  )
}

export default App
