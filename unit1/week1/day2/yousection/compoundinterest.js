/* compound interest formula
    ci=p(1+r/n)**nt


*/
var p=5000 //principal
var t=5 //number of time poeriod
var r=0.03//interest rate
var n=4 //number of time interest applied per time period
var amount= p*(1+r/n)**(n*t) //ci=final amount
var ci=amount-p
console.log(ci)