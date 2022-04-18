function runProgram(input){
    var a=input.split("\n")
    var b=a[0].split(" ").map(Number)
    var c=a[1].split(" ").map(Number)
    var n=b[0]
    var k=b[1]
    var sum=0
    var count=0
    for(i=0;i<c.length;i++){
        for(j=0;j<c.length;j++)
        if(i!=j){
        sum=c[i]+c[j]
        if(sum==b[1]){
            count++
        }
    }
}
    console.log(count/2)
}
  
  if (process.env.USERNAME === "MILIND") {
      runProgram("5 9\n3 0 6 2 7");
                  
    } else {
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
  
    }
  
  
  