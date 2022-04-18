function runProgram(input) {
    var a = input.split(/[\n]+/);
    var b=Number(a[0])
    for(i=1;i<=b;i++){
        var c=a[1*i]
        var sum=0
        value=0
        for(j=1;j<c;j++){
            if(j%2!=0){
                value=j**2
                sum=sum+value
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