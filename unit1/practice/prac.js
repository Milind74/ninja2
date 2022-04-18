function runProgram(input){
  var a=input.split("\n")
  var b=a[0].split(" ").map(Number)
  var arr=a[1].split(" ").map(Number)
  var count=0
  for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
      if(i!=j){
        sum=arr[i]+arr[j]
        if(sum==b[1]){
          count++
        }
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


