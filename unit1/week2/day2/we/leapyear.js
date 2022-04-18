var year = 2020
if (year % 100 == 0) {
    if (year % 400 == 0) {

        console.log("this year is a leap year")
    }
    else {
        console.log("not a leap year")
    }
}
else
    if(year%4==0){
    console.log("this is a leap year")
}