
import axios from 'axios';
import navbar from "../components/navbar"

document.body.innerHTML=navbar()
//container
async function getData(url) {
    let res = await axios(url);
      let data1 =  res.data.results;
      console.log(data1)

      return data1
  }

//container1 debouncing
  
async function getData1(url) {
  let res1 = await axios(url);
    let data2 =  res1.data.results;
    console.log(data2)

    return data2
}

  function append(d,container) {
    d.forEach(({ urls }) => {
      let div = document.createElement("div");
      // let p = document.createElement("p");
      // p.innerText =  alt_description
      let img = document.createElement("img");
      img.src = urls.small
      div.append(img)
  
      container.append(div);
    });
  }




  function append1(d,container1) {
    container1.innerHTML=null
    d.forEach(({ alt_description }) => {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.innerHTML =  `${alt_description}<br/>`
      // let img = document.createElement("img");
      // img.src = urls.small
      div.append(p)
  
      container1.append(div);
    });
  }

  
  export {getData, append,getData1,append1 };
