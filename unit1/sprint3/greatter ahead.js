function runProgram(input) {
    var a= input.split(/[\n]+/);
   var t=Number(a[0])
   for(b=0;b<t;b++){
    var arr=a[b*2+2].split(" ").map(Number)
    var count=0
    var temp=arr[0]
    for(i=1;i<arr.length;i++){
        if(arr[i-1]>arr[i]){
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