import { useEffect, useRef } from 'react';

export const  usePrevious= (state)=> {
  const ref = useRef(state);

  useEffect(() => {
    ref.current = state;
  });

  return ref.current;
}