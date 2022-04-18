cus//create a newspaper directory publishing newspaper
//'timestamp, random id 1 - 10, day of news, name of publisher.
var arr=['sun','mon','tue','wed','thr', 'fri','sat',]
function getDay(){
    var date= new Date().getDay()
    date=arr[date]
    return date
    // console.log("date:",date.toString().substring(0,4))
}

function Newspaper(h){
    this.title=h
    this.id=Math.floor(Math.random()*1000)
    this.day=getDay()
    this.publisher="Masai Times"

}
for(let i=0;i<100;i++){
    var paper= new Newspaper('ronaldo to leave juventus')
    console.log('paper',paper)
}









