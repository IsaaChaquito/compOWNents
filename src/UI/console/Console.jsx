import { useState } from "react"
import { ArrowTopRight } from "../../assets/icons"

export const Console = ({ output }) => {

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    // <div className={`relative col-span-3 flex flex-col ${!isExpanded ? 'w-80' : 'w-20'} rounded-md bg-black/90 p-2`}>
    //   <span className='text-gray-400 text-xs flex gap-2 justify-between items-center'>
    //     Console
        
    //   </span>
    //   <div className='flex-1 overflow-y-auto text-gray-200 flex gap-2 text-sm'>
    //     <p>output: </p> 
    //     <span className="italic">{output}</span>
    //   </div>

    //   <button 
    //     className='absolute top-2 right-2'
    //     onClick={() => setIsExpanded(!isExpanded)}>
    //       {isExpanded ? (
    //         <Expand className='w-5 h-5 p-0.5 text-black rounded bg-white' />
    //       ) : (
    //         <Contract className='w-5 h-5 p-0.5 text-black rounded bg-white' />
    //       )}
    //     </button>
    // </div>

    <button 
      onClick={() => setIsExpanded(!isExpanded)}
      className={`relative cursor-pointer col-span-3 flex flex-col items-center justify-center ${isExpanded ? 'w-80' : 'w-20 h-12'} rounded-md bg-black/90 py-2 px-4  pointer-events-auto transition-all duration-500 overflow-hidden `}
    >
      <ArrowTopRight className={`absolute top-0 left-0 w-5 h-5 p-0.5 text-gray-400 rounded bg-transparent duration-300 ${isExpanded ? 'rotate-90' : '-rotate-90'}`} />
      <ArrowTopRight className={`absolute top-0 right-0 w-5 h-5 p-0.5 text-gray-400 rounded bg-transparent duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      <ArrowTopRight className={`absolute bottom-0 left-0 w-5 h-5 p-0.5 text-gray-400 rounded bg-transparent duration-300 ${isExpanded ? '' : 'rotate-180'}`} />

      <code 
        className={`text-gray-400  ${isExpanded ? 'text-xs -translate-x-24' : 'text-sm'}`}
      >
        Console
      </code>
      
      { isExpanded && output && (
        <div className=' overflow-y-auto text-gray-200 flex gap-2 text-sm'>
          <p>output: </p> 
          <p className="italic truncate">{output}</p>
        </div>
      )}
      
      <ArrowTopRight className={`absolute bottom-0 right-0 w-5 h-5 p-0.5 text-gray-400 rounded bg-transparent duration-300 ${isExpanded ? 'rotate-270' : 'rotate-90'}`} />
    </button>
    
  )
}
