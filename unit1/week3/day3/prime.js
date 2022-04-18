function runProgram(input) {
  var a = input.split(/[\n]+/);
  var b=Number(a[0])
  for(i=0;i<b;i++){
      var c=Number(a[1+i])
      if(c==1){
        console.log("0")
      }
      var sum=2;
      for(j=3;j<=c;j++){
        var isprime=0
        for(k=2;k*k<=j;k++){
          if(j%k==0){
            isprime=1
            break;
          }
        }
        if(isprime==0){
          sum=sum+j
        }
      }
      console.log(sum)
}
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
read += input;
});
process.stdin.on("end", function () {
read = read.replace(/\n$/, "");
read = read.replace(/\n$/, "");
runProgram(read);
});
process.on("SIGINT", function () {
read = read.replace(/\n$/, "");
runProgram(read);
process.exit(0);
});




// function runProgram(input) {
//   var a = input.split(/[\n]+/);
//   var t=Number(a[0])

// for(i=0;i<t;i++){
// var arr=Number(a[i+1])
// if(arr==1){
//   console.log("0")
// }
// var sum=0

// for(j=1;j<=arr;j++){
//   var count=0

//   for(k=1;k<=j;k++){
//   if(j%k==0){
//     count++

//   }
// }
// if(count==2){
//   sum=sum+j
// }
// }
// console.log(sum)  
// }
// }
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
// read += input;
// });
// process.stdin.on("end", function () {
// read = read.replace(/\n$/, "");
// read = read.replace(/\n$/, "");
// runProgram(read);
// });
// process.on("SIGINT", function () {
// read = read.replace(/\n$/, "");
// runProgram(read);
// process.exit(0);
// });






