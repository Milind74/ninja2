const movies = [
    {
        name: 'inception',
        rating:'10',
        release:'2010',
        url:'https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg'

    },
    {
        name: 'intesteller',
        rating:'9',
        release:'2010',
        url:'https://cdn.vox-cdn.com/thumbor/yvjFAuw2CVgYlt3szDfsF5gKUw4=/44x0:3427x2255/1220x813/filters:focal(44x0:3427x2255):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/43539058/interstellar.0.0.jpg',
    },
    {
        name: 'ironman',
        rating:'8',
        release:'2010',
        url:'https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png'
    },
   
    {
        name: 'antman',
        rating:'5',
        release:'2010',
        url:"https://www.denofgeek.com/wp-content/uploads/2019/04/ant-man-1-main.jpg?resize=768%2C432"
    },
    {
        name:"the showsham redemption" ,
        rating:'10',
        release:'2010',
        url:"https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b0/Spider-Man_FFH_Profile.jpg/revision/latest?cb=20190917181733"
    },
    {
        
        name:"the persuit of happiness" ,
        rating:'6',
        release:'2010',
        url:"https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/thepursuitofhappyness_onesheet_1400x2100.png?itok=BSpvsOsJ"
    },
    
]

if (localStorage.getItem('movies') == null) {
    localStorage.setItem('movies', JSON.stringify(movies))
}

    
function appendmovies(data) {
    let parent = document.getElementById('parent')

    parent.innerHTML = null
    // let students = JSON.parse(localStorage.getItem('students'))
    
    
    data.forEach(function (el) {

        let div = document.createElement('div')

        let img = document.createElement('img')
        img.setAttribute("class",'img')
        img.src = el.url

        let rating = document.createElement('div')
        rating.innerHTML = `RATING: ${el.rating}`

        let release = document.createElement('div')
        release.innerHTML = `release: ${el.release}`
    
        let name = document.createElement('div')
        name.innerHTML = `name: ${el.name}`

        div.append(img,rating,release,name)
        
        parent.append(div)

     })
}
appendmovies(JSON.parse(localStorage.getItem('movies')))




function sortlh() {

    let movies1 = JSON.parse(localStorage.getItem('movies'))
    console.log(movies1)

    movies1 = movies1.sort(function (a, b) {
        return a.rating - b.rating
    })
    appendmovies(movies1)

}




function sorthl() {
    
    let movies2 = JSON.parse(localStorage.getItem('movies'))
    console.log(movies2)
    movies2 = movies2.sort(function (a, b) {
        return b.rating - a.rating
    })
   appendmovies (movies2)

}



