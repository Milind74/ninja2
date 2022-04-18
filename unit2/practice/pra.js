function runProgram(input) {
    var a = input.split("\n");
    var test=Number(a[0])
    for(t=0;t<test;t++){
        var arr1=a[2*t+1].split(" ").map(Number)
        var tar=arr1[1]
        var arr2=a[2*t+2].split(" ").map(Number)
    }
    // console.log(arr1)
    // console.log(arr2)
        var sum=0
        var count=0
    for(i=0;i<arr2.length;i++){
        for(j=i+1;j<arr2.length;j++){
            if(arr2[i]+arr2[j]==tar){
                count++
            }
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
      read = read.replace(/\n$/,"")
      read = read.replace(/\n$/,"")
     runProgram(read);
  });
  process.on("SIGINT", function () {
      read = read.replace(/\n$/,"")
      runProgram(read);
      process.exit(0);
  });













