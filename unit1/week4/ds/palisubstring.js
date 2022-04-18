function runProgram(input) {
var a=input
var count=0
for(i=0;i<a.length;i++){
    var res=a[i]
    for(j=i+1;j<a.length;j++){
       res+=a[j]
    if(res==res.split("").reverse().join("")){
        if(count<res.length){
         count=res.length
       }  
     }
  }
}
if(a.length==1){
    console.log(1)
}
else{
    console.log(count)
}
}
if (process.env.USERNAME === "MILIND") {
    runProgram("thisracecarisgood");
                
  } else {

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});
  }