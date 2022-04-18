

function runProgram(input){
    var a= input.split(/[\n]+/);
    var t=Number(a[0])
    for(c=0;c<t;c++){
    var array=a[c+1].split("")
        var b=col(array)
        console.log(b)

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
    
      