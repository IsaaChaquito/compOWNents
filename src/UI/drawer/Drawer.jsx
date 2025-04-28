
import { useProvider } from '../../context/useProvider'
import { Link } from 'react-router'
import HambugerMenu from '../HamburgerMenu'
import { LineMdChevronTripleRight, Logo } from '../../assets/icons'



export const Drawer = () => {
  

  const { state, dispatch } = useProvider()

  const toggleDrawer = () => {
    dispatch({ 
      type: 'drawer/SET_IS_EXPANDED', 
      payload: !state.drawer.isExpanded 
    });
  };

  return (
    <div className={`${
          state.drawer.isExpanded ? ' w-[var(--drawer-width)] xl:w-[12rem]' : 'w-16 !px-0 '
        } transition-all duration-300 ease-in-out h-screen sticky top-0 left-0 bottom-0 flex flex-col items-center shadow`}>

      {/* <div className={`duration-300 ease-in-out w-full p-2 mx-4` }>
        <HambugerMenu 
          isExpanded={state.drawer.isExpanded}
          toggleDrawer={toggleDrawer}
        />
      </div> */}
      
      <button 
        onClick={toggleDrawer} 
        className='w-full cursor-pointer hover:bg-black/20 flex items-center justify-center gap-2'
        title={`${state.drawer.isExpanded ? 'Close' : 'Open'} drawer`}
      >
        <div className='DRAWER-TITLE text-xl flex items-center py-1 font-medium '>
          <span>{state.drawer.isExpanded && 'comp'}</span>
          <Logo className={`'w-20 w-20  ${state.drawer.isExpanded ? '-mx-2' : ''}`} />
          <span>{state.drawer.isExpanded && 'ents'}</span>
        </div>
      </button>

      <section className='flex flex-col items-start  w-full text-sm xl:text-base'>
        {
          state.drawer?.options &&
          Object.entries(state.drawer?.options).map(([key, value]) => (
            <Link
              to={value.link}
              // to={'/components'}
              key={key}
              onClick={
                  () => dispatch({ 
                  type: 'drawer/SET_OPTION_SELECTED', 
                  payload: value.title 
                })
              }
              className={`flex justify-between items-center relative overflow-hidden w-full text-left py-1.5 px-3 duration-75  ${state.drawer.optionSelected === value.title ? 'bg-gray-300 ' : 'hover:bg-gray-200'}`}
            >
              <p 
                className={`select-none pointer-events-none duration-300 w-fit  ${state.drawer.optionSelected === value.title ? 'translate-x-3  ' : ''}`}
              >
                {value.title}
              </p>
              {
                state.drawer.optionSelected === value.title &&
                <LineMdChevronTripleRight 
                  className={`w-5 h-5 text-slate-500 absolute right-10 top-1/2 -translate-y-1/2 select-none pointer-events-none duration-300 ${state.drawer.optionSelected === value ? 'translate-x-5  ' : 'opacity-0'}`} 
                />
                // <div className='w-5 h-5 text-black rounded-md ring text-xs text-center select-none pointer-events-none duration-300'>
                //   ok
                // </div>
              }
            </Link>
          ))
        }
      </section>
    </div>
  )
}

export default Drawer