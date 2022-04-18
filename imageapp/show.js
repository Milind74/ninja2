


// async function getData(url) {
//     let res = await fetch(url);
//       let data = await res.json();
//       console.log("meal=",data.results)

//       return data.results
//   }


// function append(d,con){
//     parent.innerHTML = null


    
//     d.forEach(({alt_description,full }) => {
//         let div = document.createElement("div");
//         let p = document.createElement("p");
//         p.innerText = alt_description
//         let img = document.createElement("img");
//         img.src = el.urls.full
//         img.style.width="100px"

//         div.append(img, p)
    
//         con.append(div);
//       });
//     }

    
// export {getData, append};
































//https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata


//new


async function getData(url) {
    let res = await fetch(url);
      let data = await res.json();
      console.log(data.results)

      return data.results
  }
  
  function append(d,container) {

    d.forEach(({ alt_description,urls }) => {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.innerText =  alt_description
      let img = document.createElement("img");
      img.src = urls.full
      div.append(p,img)
  
      container.append(div);
    });
  }
  
  export {getData, append};
  
