import React, { useState, useCallback } from 'react';

// A child component that renders the count and provides 
//a button to increment it
const ChildComponent = React.memo(({ increment }) => {
  console.log('ChildComponent rendered!');
  return <button onClick={increment}>Increment Count</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent increment={incrementCount} />
    </div>
  );
}

export default ParentComponent;
