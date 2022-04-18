function runProgram(input){
  var a=Number(input)
  var level=1;
  var count=0
  if(a==count){
    console.log(a)
  }
  while(a>0){
    count=((level*(level+1))/2)
        if(count>a){
          break;
        }
        else{
          a=a-count
          level++
        }
  }
  console.log(level-1)
  
 }

if (process.env.USERNAME === "MILIND") {
      runProgram("25");
                  
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