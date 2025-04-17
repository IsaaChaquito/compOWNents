
import { ArrowTopRight } from "../../assets/icons"
import { useProvider } from "../../context/useProvider"

export const Console = ({ output }) => {

  const { state, dispatch } = useProvider()

  const toggleConsole = () => {
    dispatch({ type: 'console/SET_IS_EXPANDED', payload: !state?.console?.isExpanded })
  }

  // console.log(state?.console?.isExpanded)

  return (

    <button 
      onClick={toggleConsole}
      className={`relative cursor-pointer col-span-3 flex flex-col items-center justify-center ${state?.console?.isExpanded ? 'w-80' : 'w-20 h-12'} rounded-md bg-black/90 py-2 px-4  pointer-events-auto transition-all duration-500 overflow-hidden `}
    >
      <ArrowTopRight className={`absolute top-0 left-0 w-5 h-5 p-0.5 text-gray-400 rounded bg-transparent duration-300 ${state?.console?.isExpanded ? 'rotate-90' : '-rotate-90'}`} />
      <ArrowTopRight className={`absolute top-0 right-0 w-5 h-5 p-0.5 text-gray-400 rounded bg-transparent duration-300 ${state?.console?.isExpanded ? 'rotate-180' : ''}`} />
      <ArrowTopRight className={`absolute bottom-0 left-0 w-5 h-5 p-0.5 text-gray-400 rounded bg-transparent duration-300 ${state?.console?.isExpanded ? '' : 'rotate-180'}`} />

      <code 
        className={`text-gray-400  ${state?.console?.isExpanded ? 'text-xs -translate-x-24' : 'text-sm'}`}
      >
        Console
      </code>
      
      { state?.console?.isExpanded && output && (
        <div className=' overflow-y-auto text-gray-200 flex gap-2 text-sm'>
          <p>output: </p> 
          <p className="italic truncate">{output}</p>
        </div>
      )}
      
      <ArrowTopRight className={`absolute bottom-0 right-0 w-5 h-5 p-0.5 text-gray-400 rounded bg-transparent duration-300 ${state?.console?.isExpanded ? 'rotate-270' : 'rotate-90'}`} />
    </button>
    
  )
}
