import React from 'react';

const Counter = () => {
    const [counter, setCounter]=React.useState(0)
    const handleAdd=()=>{
       
        setTimeout(() => {

          setCounter(function (prev){
              return prev+1;
          })
            
        }, 1000);
    }
    return (
       <>
         <div>
             <h1>Counter:{counter}</h1>
             <button onClick={handleAdd}>+</button>
         </div>
       </> 
    );
}

export default Counter;