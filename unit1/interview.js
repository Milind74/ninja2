function runProgram(input){
var a = input.split("\n")
var test=Number(a[0])
var count=0    

for(t=0;t<test;t++){
var arr=a[t*2+2].split(" ")
 for(i=0;i<arr.length;i++){
     if(arr[i]==0||arr[i]==1||arr[i]==2||arr[i]==3||arr[i]==4||arr[i]==5||arr[i]==6||arr[i]==7||arr[i]==8||arr[i]==9)
     {
         count++
     }
 }
 console.log(count)

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
  