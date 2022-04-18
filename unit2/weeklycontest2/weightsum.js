function runProgram(input) {
    var a = input.split("\n");
    var test=Number(a[0])
    for(t=0;t<test;t++){
        var n=Number(a[2*t+1])
        var arr=a[2*t+2].split(" ").map(Number)
        var sum=0
        for(i=0;i<n;i++){
            sum=sum+((arr[i])*(i+1))
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
      read = read.replace(/\n$/,"")
      read = read.replace(/\n$/,"")
     runProgram(read);
  });
  process.on("SIGINT", function () {
      read = read.replace(/\n$/,"")
      runProgram(read);
      process.exit(0);
  });
  
  