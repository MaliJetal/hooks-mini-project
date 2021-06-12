import React, {useState} from 'react';

function App(){
  const [count,setCount] = useState(4);

  function incrementalCount(){
    setCount(prevCount => prevCount+1);
  }

  function decrementalCount(){
    setCount(prevCount => prevCount-1);
  }

  return(
    <div>
      <button onClick={decrementalCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementalCount}>+</button>
    </div>
  )
};

export default App;