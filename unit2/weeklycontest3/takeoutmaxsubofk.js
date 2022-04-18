    function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);
    var arr1 = newInput[0].split(" ").map(Number);
    var arr = newInput[1].split(" ").map(Number);
    var n=arr1[0];
    var k=arr1[1];
    var currentsum=0;

    for(var i=0;i<k;i++){
          currentsum+=arr[i];
    }
    var start=0
    var maximumsum=currentsum//the currentsum which we take out we take that as maximum sum
    for(var i=k;i<n;i++)
    {
      currentsum=currentsum-arr[start]+arr[i];
      start++
      if(currentsum>maximumsum)
      maximumsum=currentsum
    }
    console.log(maximumsum);

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