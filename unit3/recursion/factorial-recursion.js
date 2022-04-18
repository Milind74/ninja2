function runProgram(input){
    var a=Number(input)
    fact(a)
    function fact(a){
        if(a>=1){
            return a*fact(a-1)
        }
    else{
        return 1
    }
    }
    console.log(fact(a))

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
