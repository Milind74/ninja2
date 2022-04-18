        var imgarr1 = [
        "https://i.gadgets360cdn.com/large/netflix_best_movies_apr_2021_1618483162075.jpg?downsize=950:*&output-quality=80&output-format=webp",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloween-movies-1600459548.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/horror-movies-1597961000.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
"https://qqcdnpictest.mxplay.com/pic/08f6d410a3eece65b5d4e262d3461498/en/16x9/492x277.5/test_pic1622649336917.webp",
        "https://www.lifewire.com/thmb/-SZnD93UYs00vWEuIhmavsX5LKw=/3280x2160/filters:no_upscale():max_bytes(150000):strip_icc()/kanopy-free-movie-app-android-a6cc6a4c2c154ffb844bdb772bc4e6ae.png"]
      var home=document.getElementById("home")
      var img1=document.createElement('img')

        img1.style.width = "98%";
        img1.style.height = "500px";
        img1.setAttribute("src", imgarr1[0]);
        img1.append(imgarr1)
        home.append(img1)

    function slideshow(){

      let i = 0;
      setInterval(function () {
        if (i == imgarr1.length) {
            i = 0;
         }
         img1.setAttribute("src", imgarr1[i]);
            i++
        },3000)  
}
slideshow()
