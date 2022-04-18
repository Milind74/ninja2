function runProgram(input) {
    var a=input.split("\n")
    var n=Number(a[0])
    var arr1=a[1]
    var arr2=a[2]
    for(i=0;i<arr1;i++){
        res=res+arr[i]
    }
    for(i=0;i<arr2;i++){
        res=res+arr[i]
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
    