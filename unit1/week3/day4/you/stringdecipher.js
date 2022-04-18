function runProgram(input) {
    var a= input.split(/[\n]+/);
    var test= Number(a[0])
    var len=Number(a[1])
    for(c=1;c<=test;c++){
        var arr=a[2*c]
        var res=""
        for(i=0;i<arr.length;i+=2){
            var k=Number(arr[i+1])
            while(k!=0){
                res=res+arr[i]    
                k--
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