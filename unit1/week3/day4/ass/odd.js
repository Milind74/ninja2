function runProgram(input) {
    var a = input.split(/[\n]+/);
    var test=Number(a[0])
    for(b=1;b<=test;b++){
    
        var arr=(a[b*2].split(" ").map(Number))
        var count=0
        for(i=0;i<arr.length;i++){
            if(arr[i]%2!=0){
                count++
                
            }
           
        }
        if(count%2!=0){
            console.log("Yes")

        }
        else{
            console.log("No")
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