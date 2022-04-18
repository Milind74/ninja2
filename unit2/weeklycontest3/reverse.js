function runProgram(input){
    var a=input.split("\n")
    var n=Number(a[0])
    var arr2=a[1].split(" ").map(Number)
        var left=0
        var right=arr2.length-1
        

        while(left<right){
            var temp=arr2[left]
        
         arr2[left]=arr2[right]
        
         arr2[right]=temp
         left++
         right--
    }
        console.log(arr2.join(" "))

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
  
    
  