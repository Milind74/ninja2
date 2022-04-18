function runProgram(input){
    var a=input.split("")
    // console.log(a)
    function count(a)
    {
        if(a.length==0){
            return a
        }
        else{
                return 1+Number(count(a.slice(0,a.length-1)))
        }
    }
    console.log(count(a))

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
