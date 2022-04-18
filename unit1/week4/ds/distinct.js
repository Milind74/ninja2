function runProgram(input){
    var a=input.split("\n")
    var b=Number(a[0])
    var c=a[1].split(" ").map(Number)
    var sum=c[0]
        for(j=1;j<b;j++){
            if(c[j-1]!=c[j]){
                sum=sum+c[j]
            }
        }
        console.log(sum)

    }

  if (process.env.USERNAME === "MILIND") {
      runProgram("5\n2 2 2 1 1");
                  
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
  
  
  