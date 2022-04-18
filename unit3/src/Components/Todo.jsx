import React,{ useState, useEffect} from 'react';


const Todo = () => {

    const [title,setTitle]= useState("");
    const [data,setData]= useState([]);
    const [isLoading, setIsLoading]=useState(true);
    const [isError, setIsError]=useState(false);

    const [page,setPage]= useState(1)
    useEffect(()=>{
      getTodos() 
    },[page])


    const getTodos = ()=>{
        setIsLoading(true)
       return fetch(`https://json-server-mocker-masai.herokuapp.com/tasks?_page=${page}&_limit=2`)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            setData(res)
        })
        .catch((err)=>{
            setIsError(err)
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }

    const addTodos =(title)=>{
        const payload ={
            title,
            status:false,
        }
     setIsLoading(true)

     return fetch("https://json-server-mocker-masai.herokuapp.com/tasks",{
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
         body:JSON.stringify(payload)
     })
     .then((res)=>res.json())
     .then((res)=>{
       
       return getTodos()
     })
     .catch((err)=>{
         setIsError(err)
     })
     .finally(()=>{
         setIsLoading(false);
     })

    
     

    }
    return isLoading?<div>.....Loding</div>:isError? <div>Something went wrong</div>:(
       <>
         <div>

              <input value={title} onChange={(e) =>setTitle(e.target.value)} type="text" placeholder="Enter something" /> 

              <button onClick={(e) =>addTodos(title)}>Add</button> 


              <ul>
                 {data.map((el)=>{
                     return ( 
                        
                             <li key={el.id}>{`${el.title}  ${el.status}`}</li>
                       
                     )
                 })} 
              </ul>  

              <h3>page:{page}</h3> 
              <button disabled={page===1} onClick={()=>setPage(page-1)}>PREV</button>
              <button onClick={()=>setPage(page+1)}>Next</button>
             
        </div> 
       </> 
    );
}

export default Todo;