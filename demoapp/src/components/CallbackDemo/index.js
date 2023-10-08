function factory() {
    return (a, b) => a + b;
  }
  
  const sumFunc1 = factory();
  const sumFunc2 = factory();
  
  console.log(sumFunc1(1, 2)); // => 3
  console.log(sumFunc2(1, 2)); // => 3
  
  console.log(sumFunc1 === sumFunc2); 
  console.log(sumFunc1 === sumFunc1); 
  