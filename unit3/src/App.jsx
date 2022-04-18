import logo from './logo.svg';
import React from 'react'

import './App.css';
import Todo from './Components/Todo';
import Counter from './Components/Counter';
import Counters from './Components/Counters';

function App() {
  const [hideCounter,sethideCounter]=React.useState(false)
  return hideCounter?(
   <>
      {/* <Todo/> */}
      {/* <Counter/> */}
      <Counters/>
      <button onClick={()=>{sethideCounter(!hideCounter)}}>Hide Counter</button>
   </>
  ):(
    <button onClick={()=>sethideCounter(!hideCounter)}>Show Counter</button>
  )
}

export default App;
