
import { useProvider } from '../../context/useProvider'

export const Drawer = () => {
  
  const { drawerState, drawerDispatch } = useProvider()

  return (
    <div>
      
      <h1>Drawer</h1>

      <section>
        <h1>Options</h1>
        {
          drawerState?.options &&
          Object.entries(drawerState?.options).map(([key, value]) => (
            <button
              key={key}
              onClick={() => drawerDispatch({ type: 'SET_OPTION_SELECTED', payload: value })}
              className={drawerState.optionSelected === value ? 'active' : ''}
            >
              {value}
            </button>
          ))
        }
      </section>
    </div>
  )
}

export default Drawer