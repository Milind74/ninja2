function runProgram(input){
    var a = input.split(/[\n]+/);
    var b=a[0].split(" ").map(Number)
    var n=b[0]
    var k=b[1]
    var arr=a[1].split(" ").map(Number)
    var shift=k%n
    var res=""
    for(i=shift;i<n;i++){
        res=res+arr[i]+" ";
    }
    for(i=0;i<shift;i++){
        res=res+arr[i]+" ";
    }   
    console.log(res)
    }

  
  
  if (process.env.USERNAME === "MILIND") {
      runProgram("6 4\n1 2 5 4 0 6");
                  
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
  
  
  