const students = [
    {
        name: 'Avinash Kumar',
        attendence:'99'
    },
    {
        name: 'Abhishek Mahato',
        attendence:'90'
    },
    {
        name: 'Rohit Kumar',
        attendence:'80'
    },
    {
        name: 'Ronaldo',
        attendence:'80'
    },
    {
        name: 'Messi',
        attendence:'50'
    },
    {
        name: 'Xavi',
        attendence:'30'
    },
    {
        name: 'Andres Iniesta',
        attendence:'70'
    },
    {
        name: 'Ronaldinho',
        attendence:'88'
    },
    {
        name: 'Neymar',
        attendence:'55'
    }
]

if (localStorage.getItem('students') == null) {
    localStorage.setItem('students', JSON.stringify(students))
}


    
function appendstudents(data) {
    let parent = document.getElementById('parent')

    parent.innerHTML = null
    // let students = JSON.parse(localStorage.getItem('students'))
    
    
    data.forEach(function (el) {

        let div = document.createElement('div')

        let p_name = document.createElement('p')
        p_name.innerHTML = `Name: ${el.name}`
        let p_attendence = document.createElement('p')
        p_attendence.innerHTML = `Attendence: ${el.attendence}`

        div.append(p_name, p_attendence)
        
        parent.append(div)

     })
}


 appendstudents(JSON.parse(localStorage.getItem('students')))

    function slideshow() {
    const arr = ['Evaluation on 7 june', 'cont. week on 17 june', 'cont. week ']

    let headline = document.getElementById('headline')

    // headline.innerHTML = arr[]
    let i = 0;
    setInterval(function () {

        if (i == arr.length) {
            i = 0;
         }
        headline.innerHTML = arr[i]
        i++
    }, 1000)
}

slideshow()

function sortlh() {
    
    let students = JSON.parse(localStorage.getItem('students'))

    students = students.sort(function (a, b) {
        return a.attendence - b.attendence
    })
    
    appendstudents(students)
}
function sorthl() {
    
    let students = JSON.parse(localStorage.getItem('students'))

    students = students.sort(function (a, b) {
        return b.attendence - a.attendence
    })
    
    appendstudents(students)
}