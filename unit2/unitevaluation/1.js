function runProgram(input) {
    var newinput = input.split("\n")
    var l=Number(newinput[0])
    var stack=[]
    var s=0
    for(a=0;a<=l;a++){
        var arr=newinput[a].split(" ").map(Number)
        if(arr[0]==1)
        {
            stack.unshift(arr[1])
        }
        if(arr[0]==2){
            if(stack.length>0){
                s=s+stack[0]
                stack.shift()

            }
            else{
                s=s-1
            }
        }
    }
    console.log(s)
   }       
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