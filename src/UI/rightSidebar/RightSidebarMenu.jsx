import { useEffect, useState } from "react"
import { RightHandIcon } from "../../assets/icons"



export const RightSidebarMenu = ( { items, activeItem, setActiveItem } ) => {

  const [widthScreen, setWidthScreen] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [widthScreen])

  console.log(widthScreen)

  const getPixels = () => {
    if (widthScreen < 1280) {
      return 28
    } else {
      return 32
    }
  }

  return (
    <div className="bg-gray-100 p-4 hidden md:w-[var(--drawer-width)] md:block xl:w-[16rem] 2xl:w-[20rem] h-screen sticky top-0 overflow-y-auto ">
      <h2 className='font-bold text-sm xl:text-base'>Viewing</h2>
        <ul className='px-4 *:py-1 relative'>
          <RightHandIcon 
            style={{
              transform: `translateY(${getPixels() * (activeItem - 1)}px)`,
            }}
            className='w-6.5 h-6.5 absolute top-1 -left-2.5 duration-300 ease-in-out text-indigo-500' 
          />

          {items.map((item) => (
            <a 
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            href={item.link}
            className={`  ${activeItem === item.id ? 'text-indigo-500' : ''}`}
            >
              <li 
                className={`cursor-pointer text-sm xl:text-base p-1 overflow-hidden text-ellipsis whitespace-nowrap duration-300 ease-in-out rounded-md hover:bg-gray-500/10 ${activeItem === item.id ? 'bg-indigo-500/10 ' : ''}`} 
                title={item.name}
              >

                {item.name}
              </li>
            </a>
          ))}

        </ul>
    </div>
  )
}
