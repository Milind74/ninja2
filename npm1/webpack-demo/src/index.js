// import axios from 'axios';

import navbar from "../components/navbar"
document.body.innerHTML=navbar()

import {append, getData,getData1,append1} from './show.js'
//


var container=document.getElementById("container")
var container1=document.getElementById("container1")


window.searchfun=()=>{

  container.innerHTML = null
  
  var sea=document.getElementById('search').value
 
  console.log("search",sea)



    let get=getData(
      `https://api.unsplash.com/search/photos?query=${sea}&client_id=faXod_NXOlAuy9LjskMhnbWOGxdK-x9H0UDJl7WYB0U`)
    get.then((res) => {
      console.log(get)

      append(res,container)
      });
    }

    
//debouncing
    var sea1=document.getElementById("search")
    sea1.addEventListener("keyup",function keypad(){
   
    
    if (container1.style.display != "none") {
      container1.style.display = "block";
      container1.style.backgroundColor = "white";
      container1.style.color = "black";
      container1.style.border = "1px solid grey";

    }
    //problem

     else if(container1.style.display = "none" ) {
      container1.style.display = "hidden";
    }

    // setInterval(() => {
      
    let get1=getData1(
      `https://api.unsplash.com/search/photos?query=${sea1.value}&client_id=faXod_NXOlAuy9LjskMhnbWOGxdK-x9H0UDJl7WYB0U`)
    get1.then((res1) => {
      console.log(get1)

      append1(res1,container1)
      });
     })
    
    // },3000);  
 
