const users = [
    {
        name: 'raj2@gmail.com',
        password:'raj123'
    },
    {
        name: 'raj@gmail.com',
        password:'raj1234'
    },
    {
        name: 'raj1@gmail.com',
        password:'raj1235'
    }
]
//store in loaclstorge

if (localStorage.getItem('users') == null) {

    localStorage.setItem('users', JSON.stringify(users));

}

//accept login data

function checklogin(e){

    e.preventDefault();

    const form = document.getElementById('login')
    const username = form.username.value
    const password = form.password.value

    //check now if username , password combination exist in our database

    const users = JSON.parse(localStorage.getItem('users'))

    for (let i = 0; i < users.length; i++) {
        if (users[i].name === username && users[i].password === password) {
            window.location.href = './home.html'
            break;

        }
    }

}


