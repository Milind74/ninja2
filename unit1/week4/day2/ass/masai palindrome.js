function runProgram(input) {
    var a=input.split(" ")
   var n=arr.length;
   if(n==1) {
       console.log(n)
    
   }
   else{
       var ml=1
       for(i=0;i<n;i++){
           for(j=i;j<n;j++){
               var op=1
            for(k=0;k<(j-i+1)/2;k++){
            if(arr[i+k]!=arr[j+k]){
                op=0
            }
            if(op&& j-1+1>ml){
                ml=j-i+1
            }
            }
           }
       }
       console.log(mi)
   }

}
if (process.env.USERNAME === 'MILIND') {
    runProgram(`thisracecarisgood`)
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});