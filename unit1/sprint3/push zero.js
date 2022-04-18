function runProgram(input) {
    var a= input.split(/[\n]+/);
  
  var t=Number(a[0])
  for(b=0;b<=t;b++){
      var arr=a[t*2+2].split(" ").map(Number)
      var res=""
      var count=0
      for(i=0;i<arr.length;i++){
          if(arr[i]!=0){
              res=res+arr[i]
          }
         }
         for(j=0;j<arr.length;j++){
            if(arr[j]==0){
                res=res+arr[j]
            }            
            

        }
        console.log(res)
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