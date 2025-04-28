import { useEffect, useState } from "react"
import { useProvider } from "../../context/useProvider"


export const RightSidebarMenu = ( { sections, activeSection, setActiveSection } ) => {

  const { state, dispatch } = useProvider()
  const [widthScreen, setWidthScreen] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth)
    }
  
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [widthScreen])


  const getPixels = () => {
    if (widthScreen < 1280) {
      return 28
    } else {
      return 32
    }
  }

  const onHandleSectionClick = ( sectionId ) => {
    activeSection 
    ? setActiveSection( sectionId )
    : dispatch({type: 'rightSidebar/SET_ACTIVE_SECTION', payload: sectionId})
  }

  const sectionsToUse = sections || state?.rightSidebar?.sections;
  const activeSectionToUse = activeSection || state?.rightSidebar?.activeSection

  if (!sectionsToUse) return 

  return (
    <div className="bg-gray-100 p-4 hidden md:w-[var(--drawer-width)] md:block xl:w-[16rem] 2xl:w-[20rem] h-screen sticky top-0 overflow-y-auto ">
      <h2 className='font-bold text-sm xl:text-base'>Viewing</h2>
        <ul className='px-4  *:py-1 relative'>

          <div className='bg-black/30 w-0.5 h-full absolute top-0 left-2'>
            <div 
              style={{
                transform: `translateY(${getPixels() * ( activeSectionToUse - 1)}px)`,
                // boxShadow: '0 0 3px #6495ed, 0 0 3px #6495ed, 0 0 3px #6495ed'
              }}
              className={`w-1 ${widthScreen < 1280 ? 'h-7' : 'h-8'} -ml-[1px] rounded-full bg-[#6495ed] absolute top-0 duration-300 ease-in-out text-indigo-500`} 
            />
          </div>

          {sectionsToUse?.map((section) => (
            <a 
            key={section.id}
            onClick={ () => onHandleSectionClick( section.id ) }
            href={`#${section.link}`}
            className={`  ${state?.rightSidebar?.activeSection === section.id ? 'text-[#3673e3]' : ''}`}
            >
              <li 
                className={`cursor-pointer text-sm xl:text-base p-1 truncate duration-300 ease-in-out rounded-md hover:bg-gray-500/10 ${state?.rightSidebar?.activeSection === section.id ? 'font-bold' : ''}`} 
                title={section.name}
              >

                {section.name}
              </li>
            </a>
          ))}

        </ul>
    </div>
  )
}
