
const students=[
    {
    name:'rohit kumar',
    attendence:85
},
{
    name:'aman kumar',
    attendence:88
},
{
    name:'ravi kumar',
    attendence:90
},
{
    name:'rajesh kumar',
    attendence:92
},
{
    name:'rahul kumar',
    attendence:97
},
]
if(localStorage.getItem('students')==null){
    localStorage.setItem('students',JSON.stringify(students))
}

function appendStudents(){
    let parent_div=document.getElementById("parent")
    parent_div.innerHTML=null
    let data=JSON.parse(localStorage.getItem('students'))
    data.forEach(function(el){
        let div =document.createElement("div")
        let p_name=document.createElement('p')
        p_name.innerHTML=`Name:${el.name}`
       
        let p_attendence=document.createElement('p')
        p_attendence.innerHTML=`Name:${el.attendence}`
        div.append(p_name,p_attendence)
        parent_div.append(div)
    })
        
}

let i=0
function slideshow(){
    const arr=['evaluation on 7june','construct week on 17th june','next unit is react']
    let headline=document.getElementById('headlines')
    if(i==3){
        i=0
    }
    setInterval(function(){
        headline.innerHTML=arr[i]
        i++

    },3000)
}

slideshow()

function sortLH(){
    let students=JSON.parse(localStorage.getItem('students'))
    students=students.sort(function(a,b){
    a=a.sort(function(a,b){
    return a.attendence-b.attendence
})

})
    appendStudents()
}