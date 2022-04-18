function runProgram(input){
    var a= input.split(/[\n]+/);
    var test=Number(a[0])
    for(i=0;i<test;i++){
        var n=Number(a[i*2+1])
        var arr=a[2*i+2].split(" ").map(Number)
        var odd=0;
        var count=0
        console.log(arr)
        for(j=0;j<n;j++){
            if(arr[j]%2!=0){
                odd=arr[j]
                count++
            }
            }
            if(odd==0){
                console.log("NO")
            }
            else{
                if(count==n){
                    if(n%2!=0){
                        console.log("YES")
                    }
                else{
                    console.log("NO")
                    }
                 }
                else{
                    console.log("YES")
                }
                }  
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
    
    