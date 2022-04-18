function runProgram(input){
    var a = input.split("\n")
    var n = Number(a[0])
    
    for(t=0;t<n;t++){
       
        var array = a[2*t+2].split(" ").map(Number);
            var stack=[]
            var str=""
            var str=""
                for(i=0;i<array.length;i++){
                while(stack.length!=0 && array[stack[stack.length-1]]<=array[i]){
                    stack.pop()
                }
                if(stack.length>0){
                    str=str+ (i-stack[stack.length-1])+" "
                }
                else{
                    str=str+(i+1)+" "
                }
                stack.push(i)
            
                }
               console.log(str)
            
            }
    }  

    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/,"")
       runProgram(read);
    });
    
    process.on("SIGINT", function () {
        read = read.replace(/\n$/,"")
        runProgram(read);
        process.exit(0);
    });