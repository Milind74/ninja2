function runProgram(input) {
    var a= input.split(/[\n]+/);
   var t=Number(a[0])
   for(b=0;b<t;b++){
       var k=0
    var arr=a[b*2+2].split(" ").map(Number)
    for(i=0;i<arr.length-1;i++){
        if(arr[i]%2!==0&&arr[i+1]%2!==0&&arr[i+2]%2!==0)
        {
           k++
        }

         }
         if(k>0){
             console.log("Misbehave")
         }
         else{
             console.log("Behave")
        }
        }
    }
  
    if (process.env.USERNAME === "MILIND") {
        runProgram(`2
        6
        1 3 3 4 5 6
        5
        1 2 3 4 5`);
  
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
}