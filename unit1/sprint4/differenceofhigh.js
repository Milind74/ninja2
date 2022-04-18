function runProgram(input) {
    var a= input.split(/[\n]+/);
  var t=Number(a[0])
  for(i=0;i<t;i++)
  {
    var arr=a[2*i+2].split(" ").map(Number)
    var n=arr.length
    arr.sort(function(e,f){
      return e-f
    })
    var highsum=0
    var lowsum=0
    for(k=0;k<3;k++)
      lowsum+=arr[k]
      for(j=n-1;j>=n-3;j--)
      highsum+=arr[j]
      console.log(highsum-lowsum)  
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
    })