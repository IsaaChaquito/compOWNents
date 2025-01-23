
import { useContext } from 'react';
import { AppContext } from '../context/app-provider'; 

export const useProvider = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useProvider must be used within a AppProvider');
  }
  return context; 
};
