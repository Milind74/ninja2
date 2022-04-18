let data = JSON.parse(localStorage.getItem('fav'))
let parent = document.getElementById('data')

    data.forEach(function (el) {
      let div = document.createElement("div");

      let p_name = document.createElement("p");
      p_name.innerHTML = `Place: ${el.name}`;
        
      let p_rating = document.createElement("p");
      p_rating.innerHTML = `Rating: ${el.rating}`;

      let img = document.createElement("img");
      img.style.width = "200px";
      img.style.height = "200px";
      img.src = el.image;

      div.append(p_name, p_rating, img);
      parent.append(div);
    });
