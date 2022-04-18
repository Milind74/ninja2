function runProgram(input){
    var a=input.split("\n")
    var test=Number(a[0])
    for(t=0;t<test;t++){
        var n=Number(a[t*2+1])
       var arr2=a[t*2+2].split(" ").map(Number)
        var max=arr2[0]
        var count=0
            for(i=0;i<n;i++) {
                if(arr2[i]>max){
                    count++
                    max=arr2[i]

                }
                else{
                    max=arr2[i]
                }
                }
                console.log(count)
               
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
  
    
  