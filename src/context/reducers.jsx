// Definimos los tipos de acciones para nuestro estado
const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
const TODOS_ADD = 'TODOS_ADD';
const TODOS_TOGGLE = 'TODOS_TOGGLE';
const TODOS_REMOVE = 'TODOS_REMOVE';
const USER_UPDATE = 'USER_UPDATE';

// Reducer para manejar el contador
function counterReducer(state = 0, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + (action.payload || 1);
    case COUNTER_DECREMENT:
      return state - (action.payload || 1);
    default:
      return state;
  }
}

// Reducer para manejar la lista de tareas
function todosReducer(state = [], action) {
  switch (action.type) {
    case TODOS_ADD:
      return [...state, {
        id: Date.now(),
        text: action.payload,
        completed: false
      }];
    case TODOS_TOGGLE:
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case TODOS_REMOVE:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

// Reducer para manejar datos del usuario
function userReducer(state = { name: '', email: '' }, action) {
  switch (action.type) {
    case USER_UPDATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

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
  counter: counterReducer,
  todos: todosReducer,
  user: userReducer
});

// Ejemplo de uso en un componente de React utilizando useReducer
import { useReducer } from 'react';

function Reducers() {
  const initialState = {
    counter: 0,
    todos: [],
    user: { name: '', email: '' }
  };
  
  const [state, dispatch] = useReducer(rootReducer, initialState);
  
  const incrementCounter = () => {
    dispatch({ type: COUNTER_INCREMENT });
  };
  
  const addTodo = (text) => {
    dispatch({ type: TODOS_ADD, payload: text });
  };
  
  const updateUser = (userData) => {
    dispatch({ type: USER_UPDATE, payload: userData });
  };
  
  return (
    <div className=' z-50'>
      <h1>Counter: {state.counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      
      <h2>Todos:</h2>
      <ul>
        {state.todos.map(todo => (
          <li 
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => dispatch({ type: TODOS_TOGGLE, payload: todo.id })}
          >
            {todo.text}
            <button onClick={() => dispatch({ type: TODOS_REMOVE, payload: todo.id })}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <input 
        type="text" 
        placeholder="Nueva tarea..."
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value.trim()) {
            addTodo(e.target.value.trim());
            e.target.value = '';
          }
        }}
      />
      
      <h2>Usuario:</h2>
      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={state.user.name}
          onChange={(e) => updateUser({ name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={state.user.email}
          onChange={(e) => updateUser({ email: e.target.value })}
        />
      </div>
      
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default Reducers;