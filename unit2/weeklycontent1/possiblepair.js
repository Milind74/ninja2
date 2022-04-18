function runProgram(input){
    var input1=input.split(" ").map(Number)
    var m=input1[0]
    var n=input1[1]
    var count=0
   
      for(i=0;i<=1000;i++){
          for(j=0;j<=1000;j++){
              if((i*i+j==n)&&(j*j+i==m))
                  count++
              }
          }
      
      console.log(count)
    
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
    