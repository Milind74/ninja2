import axios from 'axios';
import navbar from "../components/navbar"


//making get request using axios
    axios.get("https://fakestoreapi.com/products").then((res) => {
    console.log("res:", res);
    console.log("hello world")
  });
document.body.innerHTML=navbar()
  
//what-optimisation (scalable developer friend)
//why-react
//how-webpack
//webpack take your javascript and will optimise your javascript
//config webpack

//1.create webpack.config.js



