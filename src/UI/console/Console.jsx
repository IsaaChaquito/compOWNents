
import { ArrowTopRight } from "../../assets/icons"
import { useProvider } from "../../context/useProvider"

/**
 * Componente que muestra una consola que puede expandirse o contraerse,
 * dependiendo del estado global `console.isExpanded`.
 * 
 * Muestra el texto contenido en el estado global `console.text` si `console.isExpanded` es verdadero.
 * 
 * @returns Un elemento JSX de tipo `button` que contiene el botón de expansión.
 */
export const Console = () => {

  const { state, dispatch } = useProvider()

  const toggleConsole = () => {
    dispatch({ type: 'console/SET_IS_EXPANDED', payload: !state?.console?.isExpanded })
  }


  return (

    <button 
      onClick={toggleConsole}
      className={`relative cursor-pointer col-span-3 gap-1 flex flex-col items-start justify-center h-20 ${state?.console?.isExpanded ? 'w-80' : 'w-22'} rounded-md bg-black/90 py-4 px-4 pointer-events-auto transition-all duration-500 overflow-hidden group `}
    >
      <ArrowTopRight className={`group-hover:text-white absolute top-0 left-0 w-5 h-5 p-0.5 text-gray-400 rounded bg-transparent duration-300 ${state?.console?.isExpanded ? 'rotate-90' : '-rotate-90'}`} />
      <ArrowTopRight className={`group-hover:text-white absolute top-0 right-0 w-5 h-5 p-0.5 text-gray-400 rounded bg-transparent duration-300 ${state?.console?.isExpanded ? 'rotate-180' : ''}`} />
      <ArrowTopRight className={`group-hover:text-white absolute bottom-0 left-0 w-5 h-5 p-0.5 text-gray-400 rounded bg-transparent duration-300 ${state?.console?.isExpanded ? '' : 'rotate-180'}`} />

      <code 
        className={`text-gray-400 overflow-hidden truncate ${state?.console?.isExpanded ? 'text-xs -translate-x-0' : 'text-sm'}`}
      >
        Console { state.console.isExpanded && 'output' }
      </code>
      
      { state?.console?.isExpanded && state.console.text && (
        <div className=' overflow-y-auto text-gray-200 flex gap-2 text-xs overflow-y- auto'> 
          <code className="  text-start">{state.console.text}</code>
          <div className="flex flex-col items-center justify-center p-0.5 rounded bg-gray-600">
          <code className="text-[.65rem]">{state.console.counter}</code>
          </div>
        </div>
      )}
      
      <ArrowTopRight className={`group-hover:text-white absolute bottom-0 right-0 w-5 h-5 p-0.5 text-gray-400 rounded bg-transparent duration-300 ${state?.console?.isExpanded ? 'rotate-270' : 'rotate-90'}`} />
    </button>
    
  )
}
