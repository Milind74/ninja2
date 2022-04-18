console.log("tecnology")


// import axios from 'axios';

import navbar from "../components/navbar"

import {append, getData} from './show.js'
document.body.innerHTML=navbar()





//search
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





var container=document.getElementById("container")
    let get=getData(
       `https://api.unsplash.com/search/photos?query=technology&client_id=faXod_NXOlAuy9LjskMhnbWOGxdK-x9H0UDJl7WYB0U`)
    get.then((res) => {
      console.log(get)

      append(res,container)
      // });
    })

     
    
  