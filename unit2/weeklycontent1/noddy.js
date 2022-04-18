function runProgram(input) {
    var a= input.split(/[\n]+/);
   
       var n=a[0].split(" ").map(Number)
       var l=n[1]
       var count=0
       var count2=0
       var arr=a[1].split(" ").map(Number)
       for(i=0;i<arr.length;i++){
           if(arr[i]<=l){
               count++
           }
           else{
                if(arr[i]>l)
                count2++
           }
           if(count2<2)
           {
               continue
           }
           else{
               break
           }
       }
       console.log(count)                                                  
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