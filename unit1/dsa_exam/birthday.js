function runProgram(input) {
    var a= input.split("\n")
    var r=Number(a[0])
    var n=Number(a[1])
    if(r/5>n){
        console.log("dairy milk")
    }
    else{
        if(r/5<n &&r/3>n){
            console.log("shorts")
        }
        else if(r/5<n&&r/3<n&&r/1>n){
            console.log("ecliers")
        }
        else{
            console.log("no chocolates")
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
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
  });
  process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
  });