import axios from 'axios'
import navbar from "../components/navbar"

//making GET request using axios

  axios.get("https://fakestoreapi.com/products").then((res) => {
    console.log("res:", res);
    console.log("hello world")
  });


document.body.innerHTML=navbar()