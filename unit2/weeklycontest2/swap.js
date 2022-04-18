function runProgram(input){
    var input1=input.split("")
    var a=input1
    var n=a.length
    var res=""
    for(i=n-1;i>=0;i--){
        res+=a[i]
    }
    console.log(res)
   
    
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
