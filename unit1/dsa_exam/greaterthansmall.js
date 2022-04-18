function runProgram(input){
    var a= input.split(/[\n]+/);
    var b=Number(a[0])
    for(t=0;t<b;t++){
        var arr=a[t*2+2].split(" ").map(Number)
        var min=arr[0]
        var res=""
        for(i=1;i<=arr.length;i++){
            if(arr[i]<min){
                min=arr[i]
                res=res+min
            }
            else{
                arr[i]=-1
                res=res+"-1"
            }
            
        }
        console.log(res)

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
    
      