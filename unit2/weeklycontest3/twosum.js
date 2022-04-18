function runProgram(input){
    var a=input.split("\n")
    var test=Number(a[0])
    for(t=0;t<test;t++){
        var arr1=a[t*2+1].split(" ").map(Number)
        var arr2=a[t*2+2].split(" ").map(Number)
        var n=arr1[0]
        var tar=arr1[1]
        
        arr2.sort(function(a,b){
            return a-b
        })
        var left=0
        var right=arr2.length-1
        var ans=[-1,-1]
        var sum=0

        while(left<right){
            sum=arr2[left]+arr2[right];
            if(sum==tar){
                ans[0]=left
                ans[1]=right
                break
            }
           else if(sum>tar){
                right--
            }
            else{
                left++
            }

        }
        console.log(ans.join(" "))
        

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
  
    
  