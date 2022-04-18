function runProgram(input){
    var a= Number(input)
    if(a<=13){
        console.log("1kms")
    }
    if(a>13&&a<18){
        console.log("5kms")
    }
    if(a>=18&&a<30){
        console.log("10ms")
    }
        if(a>=30){

        console.log("You can have friends from anywhere")
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
    
      