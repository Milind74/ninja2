function navbar() {
    return `

    <div id="navbar">
    <div id="nav2">
            <div id="left">
            <img style="height:38px;width:30px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_yXtfutg4DXwUHt8xf5AGJQfU70TLB7LFA&usqp=CAU" alt=""> 
   
            
            </div>
            <div id="right">

                <input  id="search" type="text" placeholder="search">
                <button id="searchfu" onclick="searchfun()">search</button>
               
                <h3><a href="">Brand</a></h3>
                <h3><a href="">Explore</a></h3>
                <h3><a href="">Blog</a></h3>
                <i style="margin-top:15px" class="fas fa-ellipsis-h"></i>

                                
                <div style="border-right:1px solid black;height: 38px;">
                <button style=" border:1px solid grey;height:35px;margin-right:15px;margin-top:5px;background-color:white;border-radius:2px;">Submit a photo</button>
                </div>

                <h3><a href="">Login</a></h3>
                <button style="background:green;color:white;height:38px;margin-top:5px"                ">Join Now</button>


            </div>
            
            </div>
            <div id="nav3">
            <h3><a href="technology.html">Editorial</a></h3>
            <h3><a href="tech1.html">FeaturedTechnology</a></h3>
            <h3><a href="featuredsummer.html">FeaturedSummer on Film</a></h3>
            <h3><a href="technology.html"></a>Wallpapers</h3>
            <h3><a href="technology.html">Nature</a></h3>
            <h3><a href="technology.html">People</a></h3>
            <h3><a href="technology.html">Architecture</a></h3>

        </div>
        <div id="container1"></div>

        </div>




            <div id="container"></div>

        `
}

export default navbar








