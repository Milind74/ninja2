function runProgram(input) {
  var a=input.split("\n")
  var test=Number(a[0])
  var c=0
  for(t=0;t<test;t++){
    var arr1=a[t*2+1].split(" ").map(Number)
  var arr2=a[t*2+2].split(" ").map(Number)
  var n=arr1[0]
  var m=arr1[1]
  var count=0
  for(i=0;i<arr2.length;i++){
    for(j=i+1;j<arr2.length;j++){
      for(k=j+1;k<arr2.length;k++){
      if(arr2[i]+arr2[j]-arr2[k]==m)
      count++
    }
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