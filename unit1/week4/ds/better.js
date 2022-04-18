function runProgram(input) {
    var a = input.split("\n");   
    var b=Number(a[0])
    var c=a[1].split(" ").map(Number)
    var d=a[2].split(" ").map(Number)
    var avg=0
    var sum=0
    var sum1=0
    var avg1=0
    sum=c[0]+c[1]+c[2]
    avg=sum/b
    sum1=d[0]+d[1]+d[2]
    avg1=sum1/b
    if(avg>avg1&&avg%2==0){
        console.log(avg)
    }
    else{
        
        if(avg1>avg&&avg1%2==0){
            console.log(avg1)
        }
        else{
            if(avg>avg1||avg1>avg &&avg%avg1!=0||avg1%2!=0){
                console.log("-1")
            }
            else{
            if(avg==0){
                console.log("0")
            }
            }
    }
    
    }
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