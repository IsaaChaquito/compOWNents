
import { useProvider } from '../../context/useProvider'
import { Link } from 'react-router'
import HambugerMenu from '../HambugerMenu'



export const Drawer = () => {
  
  const { drawerState, drawerDispatch } = useProvider()

  const toggleDrawer = () => {
    drawerDispatch({ 
      type: 'SET_IS_EXPANDED', 
      payload: !drawerState.isExpanded 
    });
  };

  return (
    <div className='min-w-[var(--drawer-width)] max-w-[var(--drawer-width)] h-screen sticky top-0 flex flex-col items-center shadow'>

    <div className={`duration-300 ease-in-out w-full p-2 mx-4` }>
        <HambugerMenu 
          isExpanded={drawerState.isExpanded}
          toggleDrawer={toggleDrawer}
        />
        {/* <div 
          onClick={toggleDrawer}
          className=' z-10 flex flex-col gap-2 w-8 h-8 duration-300 hover:bg-black/10 overflow-hidden my-1.5'>

          {drawerState.isExpanded 
            ? <LayoutSidebarFilled className="w-7 h-7" /> 
            : <LayoutSidebar className="w-7 h-7" />}

        </div> */}
      </div>
      
      <h1 className='DRAWER-TITLE text-2xl py-1 font-medium '>Components</h1>

      <section className='flex flex-col items-start  w-full text-sm'>
        {
          drawerState?.options &&
          Object.entries(drawerState?.options).map(([key, value]) => (
            <Link
              to={value.link}
              // to={'/components'}
              key={key}
              onClick={() => drawerDispatch({ type: 'SET_OPTION_SELECTED', payload: value.title })}
              className={`flex justify-between items-center relative overflow-hidden w-full text-left p-1.5 duration-75  ${drawerState.optionSelected === value.title ? 'bg-gray-300 ' : 'hover:bg-gray-200'}`}
            >
              <p 
                className={`select-none pointer-events-none duration-300 w-fit  ${drawerState.optionSelected === value.title ? 'translate-x-3  ' : ''}`}
              >
                {value.title}
              </p>
              {
                drawerState.optionSelected === value.title &&
                // <LineMdChevronTripleRight className={`w-5 h-5 text-slate-500 absolute right-10 top-1/2 -translate-y-1/2 select-none pointer-events-none duration-300 ${drawerState.optionSelected === value ? 'translate-x-5  ' : 'opacity-0'}`} />
                <div className='w-5 h-5 text-black rounded-md ring text-xs text-center select-none pointer-events-none duration-300'>
                  ok
                </div>
              }
            </Link>
          ))
        }
      </section>
    </div>
  )
}

export default Drawer