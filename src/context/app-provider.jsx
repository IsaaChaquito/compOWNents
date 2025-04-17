
import { createContext, useReducer } from 'react'
import rootReducer from './reducers'
import { initialState as drawerInitialState } from './reducers/drawerReducer'
import { initialState as consoleInitialState } from './reducers/consoleReducer'

export const AppContext = createContext();

/**
 * @fileoverview Proveedor de contexto principal para la aplicación
 * 
 * Este archivo define el contexto de la aplicación y el proveedor que envuelve
 * la aplicación para proporcionar acceso al estado global y las funciones de despacho.
 * 
 * @module AppProvider
 */

/**
 * Contexto de la aplicación que contiene el estado global y las funciones de despacho.
 * Utilizado por los componentes para acceder y modificar el estado de la aplicación.
 * 
 * @type {React.Context}
 */


export const AppProvider = ({ children }) => {

  const initialState = {
    drawer: drawerInitialState,
    console: consoleInitialState,
  }
  
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <AppContext.Provider value={
      { 
        state,
        dispatch,
      }
    }>
      {children}
    </AppContext.Provider>
  );
};
