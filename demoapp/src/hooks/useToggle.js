import { Reducer, useReducer } from 'react';

const toggleReducer = (state, nextValue) =>{
  return typeof nextValue === 
  'boolean' ? nextValue : !state;
}

const useToggle = (initialValue) => {
  return useReducer(toggleReducer, 
    initialValue);
};

export default useToggle;