function runProgram(input){
    var a= input.split(/[\n]+/);
    var b=Number(a[0])
    var c=Number(a[1])
    var d=Number(a[2])
    var e=Number(a[3])
    if(b*4>=e){
        console.log("Park A")
    }
    if(b*4<e&&c*4>=e){
        console.log("park b")
    }
    if(b*4<e&&c*4<e&&d*4>=e){
        console.log("park c")
    }
    if(b*4<e&&c*4<e&&d*4<e){
        console.log("resolution failed")

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
    
      