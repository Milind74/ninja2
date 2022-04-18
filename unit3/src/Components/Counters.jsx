import React,{useState,useEffect} from 'react';


const Counters = () => {

    const [counter, setCounter] = React.useState(5)

    useEffect(()=>{
        console.log("Mounting")
      const clearValue= setInterval(()=>{
          setCounter(function(prevcount){
              console.log("updating")
              if(prevcount===0){
                  clearInterval(clearValue)
                  return 0;
              }
              return prevcount-1;
          })

    },1000)
      
      return function(){
         clearInterval(clearValue) ;
         console.log("unmounting")
      }

    },[])
    return (
        <>
           <div>
               <h3>Counter:{counter}</h3>
           </div>
        </>
    );
}

export default Counters;