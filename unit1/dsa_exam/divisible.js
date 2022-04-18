function runProgram(input){
    var a= input.split(/[\n]+/);
    var b=Number(a[0])
    for(t=0;t<b;t++){
        var res=""
        var arr=a[t*2+1].split(" ").map(Number)
        var arr1=a[t*2+2].split(" ").map(Number)
        for(i=0;i<arr1.length;i++){
            if(arr1[i]%arr[1]==0){
                res=res+"-1"+" "
            }
            else{
                if(arr1[i]%arr[1]!==0){
                    res=res+arr1[i]+" "
                }
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
    
      