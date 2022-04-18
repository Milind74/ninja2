function runProgram(input){
    let newInput = input.trim().split("\n");
    let t = Number(newInput[0]);
    for(a=0;a<t;a++){
    let array = newInput[2*a+2].split(" ").map(Number);
    var stack=[]
    var stack2=[]
    var str1=""
    for(i=0;i<array.length;i++){
        while(stack[stack.length-1]<=array[i]){
       

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
        read = read.replace(/\n$/,"")
       runProgram(read);
    });
    
    process.on("SIGINT", function () {
        read = read.replace(/\n$/,"")
        runProgram(read);
        process.exit(0);
    });