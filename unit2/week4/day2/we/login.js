const users=[
    {
    name:'milindanand74@gmail.com',
    password:'milind'
},
{
name:'milind74@gmail.com',
    password:'miilind'
},
{
name:'anand74@gmail.com',
    password:'milind'
}
]

//step2:store in localstorage
if(localStorage.getItem('users')==null){
localStorage.setItem('users',JSON.stringify(users))
}
//step3 accept login data

function checklogin(e){
    e.preventDefault()

    const form=document.getElementById('login')
    const username=form.username.value
    // console.log(username)
    const password=form.password.value
    // console.log(password)


//step4 check if user password combination exists in our database
const users=JSON.parse(localStorage.getItem('users'))
console.log(users)

for(let i=0;i<users.length;i++){
   console.log("users[i]")
   if(users[i].name===username &&users[i].password===password){
    window.location.href='/home.html'
    break;
}
}
}
