function runProgram(input) {
  var a = input
  var res = ""
  var n=a.length
  console.log(n)
  if(n%2==0){
    for(i=(n/2)-1;i>=0;i--){
      res=res+a[i]
    }

    for(j=n-1;j>=n/2;j--){
      res=res+a[j]
    }

}

  else{
    var z=Math.floor(n/2)
    for(i=z-1;i>=0;i--){
      res=res+a[i]
    }
  
  for(i=0;i<n;i++){
    if(i==z){
      res=res+a[i]
    }
  }
  for(i=n-1;i>z;i--){
  res=res+a[i]
  }
  

  }  
  console.log(res)  
}


  if (process.env.USERNAME === "MILIND") {
    runProgram("abcxtyz");
                  
  } else {
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