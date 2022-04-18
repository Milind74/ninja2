function runProgram(input){
  var a=input.split("\n")
  var arr=a[1].split(" ").map(Number)
            var sum=0

  for(i=0;i<arr.length;i++){
  for(j=i+1;j<arr.length;j++){
         var n=j-i
           var count=0

          for(k=1;k<=n;k++){
            if(n%k==0){
              count++
            }
          }
          if(count==2&&n>1){
            sum=sum+Math.abs(arr[j]-arr[i])

          }
      }
    }
    console.log(sum)
}

if (process.env.USERNAME === "MILIND") {
    runProgram("6\n1 2 3 5 7 12");
                
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


