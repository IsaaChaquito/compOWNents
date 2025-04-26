import { useEffect, useState } from "react"
import { RightHandIcon } from "../../assets/icons"
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
    // console.log('click on section', sectionId);
    activeSection 
    ? setActiveSection( sectionId )
    : dispatch({type: 'rightSidebar/SET_ACTIVE_SECTION', payload: sectionId})
  }

  const sectionsToUse = sections || state?.rightSidebar?.sections;
  const activeSectionToUse = activeSection || state?.rightSidebar?.activeSection

  return (
    <div className="bg-gray-100 p-4 hidden md:w-[var(--drawer-width)] md:block xl:w-[16rem] 2xl:w-[20rem] h-screen sticky top-0 overflow-y-auto ">
      <h2 className='font-bold text-sm xl:text-base'>Viewing</h2>
        <ul className='px-4 *:py-1 relative'>
          <RightHandIcon 
            style={{
              transform: `translateY(${getPixels() * ( activeSectionToUse - 1)}px)`,
            }}
            className='w-6.5 h-6.5 absolute top-1 -left-2.5 duration-300 ease-in-out text-indigo-500' 
          />

          {sectionsToUse?.map((section) => (
            <a 
            key={section.id}
            onClick={ () => onHandleSectionClick( section.id ) }
            href={`#${section.link}`}
            className={`  ${state?.rightSidebar?.activeSection === section.id ? 'text-indigo-500' : ''}`}
            >
              <li 
                className={`cursor-pointer text-sm xl:text-base p-1 truncate duration-300 ease-in-out rounded-md hover:bg-gray-500/10 ${state?.rightSidebar?.activeSection === section.id ? 'bg-indigo-500/10 ' : ''}`} 
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
