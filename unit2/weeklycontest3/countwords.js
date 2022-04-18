function runProgram(input){
    var a=input
    var count=0
for(i=0;i<a.length;i++){
    if(a[i]==" "){
        count++
    }
} 
console.log(count+1)
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
      });z
  
    
  