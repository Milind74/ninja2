function runProgram(input) {
    var newinput = input.split("\n")
    var l=Number(newinput[0])
    var stack=[]
    for(a=1;a<=l;a++){
        var arr=newinput[a].split(" ").map(Number)
if(arr[0]==1)        
        {
            stack.unshift(arr[1])
        }
        if(arr[0]==2)
        {
         if(stack.length>0){
                stack.shift()
            
            }
        }
            if(arr[0]==3){
                if(stack.length==0){
                    console.log("Empty!")
                }
                else{
                    console.log(stack[0])
                }
            }
    
   }       }
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 let read = "";
 process.stdin.on("data", function (input) {
     read += input;
 });
 process.stdin.on("end", function () {
     read = read.replace(/\n$/,"")
     read = read.replace(/\n$/,"")
    runProgram(read);
 });
 process.on("SIGINT", function () {
     read = read.replace(/\n$/,"")
     runProgram(read);
     process.exit(0);
 });