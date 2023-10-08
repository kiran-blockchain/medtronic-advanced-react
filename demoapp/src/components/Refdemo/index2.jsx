import { useRef, useEffect } from 'react';

export const   RefDemo2=({ prop })=> {
  const myRef = useRef(0);

  useEffect(() => {
    myRef.current++; // Good!

    setTimeout(() => {
      myRef.current++; // Good!
    }, 1000);
  }, []);

  const handler = () => {
    myRef.current++; // Good!
  };

  

  return <button onClick={handler}>My button</button>;
}