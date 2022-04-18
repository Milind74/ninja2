import React,{ useState, useEffect} from 'react';


const Counter2 = () => {
    const [counter, setCounter] = setState(0);
    const handleUpdate=()=>{
        
    }
    return (
        
        <div>
           <h3>Counter:{counter}</h3>
           <button onClick={handleUpdate}>Add 1</button>
        </div>

        
    );
}

export default Counter2;