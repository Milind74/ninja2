function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);
    
    var arr1 = newInput[0].split(" ").map(Number);
    var arr = newInput[1].split(" ").map(Number);
    var n=arr1[0];
    var k=arr1[1];
    var subsum=0;
    var maxsum=0;
   
    for(var i=0;i<k;i++)
          subsum+=arr[i];
    maxsum=subsum;
    for(var i=k;i<n;i++)
    {
      subsum=subsum+arr[i]-arr[i-k];
         maxsum=Math.max(maxsum,subsum);
    }
    console.log(maxsum);
    
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