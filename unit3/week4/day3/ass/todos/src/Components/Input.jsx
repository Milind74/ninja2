import { useState,useEffect } from "react"
import axios from "axios"
import {v4 as uuid} from "uuid"

const Todos=()=>{
    const[query,setQuery]=useState("")
    const[list,setList]=useState([])

    useEffect(() => {
        getTodos();
    
      }, []);

      const getTodos = async () => {
    
        try {
          const { data } = await axios.get("http://localhost:3001/todos");
         console.log(data)
          setList(data);
        } catch (err) {
        console.log(err);
        }
      };

      const postData = () => {
        const payload = {
          title: query,
        };
        
        axios
          .post("http://localhost:3001/todos", payload)
          .then(() => {
              getTodos()
          })
          .catch((err) => {
            console.log(err);
          });
    
        setQuery("");
      };

    return(
        <>
    <div> <input  value = {query}         
          onChange={(e) => setQuery(e.target.value)}
          type="text" />
                  <button onClick={postData}>Add</button>
     </div>
     <div>
         {list.map((items)=>{
             return <div> {items.title}</div>
         })}
     </div>





        </>
    )
}
export {Todos}