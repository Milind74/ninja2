function runProgram(input){
    var input1=input.split("\n")
    var a=Number(input1[0])
    var b=input1[1].split(" ").map(Number)
   
        var sum=0;
    for(var i=0;i<b.length;i++){
        if(i%2==0){
            // console.log(b[i])
            sum=sum + b[i]   
        
    }}                     
    console.log(sum)
    
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
    