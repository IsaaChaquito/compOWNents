import drawerReducer from "./drawerReducer";
import consoleReducer from "./consoleReducer";

// Reducer combinado que maneja todos los reducers anteriores
function combineReducers(reducers) {

  return function(state = {}, action) {
    // Crear un nuevo objeto que será el nuevo estado
    const nextState = {};
    
    // Para cada clave en el objeto de reducers
    let hasChanged = false;
    for (const key in reducers) {
      // Obtener el reducer específico
      const reducer = reducers[key];
      
      // Obtener el estado anterior para este reducer
      const previousStateForKey = state[key];
      
      // Llamar al reducer con su porción de estado y la acción
      const nextStateForKey = reducer(previousStateForKey, action);
      
      // Guardar el resultado en el nuevo objeto de estado
      nextState[key] = nextStateForKey;
      
      // Verificar si algo ha cambiado
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    
    // Devolver el estado anterior o el nuevo estado si ha cambiado
    return hasChanged ? nextState : state;
  };
}


// Combinando los reducers
const rootReducer = combineReducers({
  drawer: drawerReducer,
  console: consoleReducer,
});

export default rootReducer;
