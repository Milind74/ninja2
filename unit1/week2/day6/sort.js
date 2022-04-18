function runProgram(input) {

  var a = input.split("\n")
  var b = Number(a[0])
  var c = a[1].split(" ").map(Number)
  var l = 1
  var res=""
  for (i = 1; i < b; i++)
  {
    if (c[l - 1] == c[i]) {
      c[l] = c[i]
      l++
  }
    if (c[l - 1] < c[i]) {
      c[l]=c[i]
      l++
    }
  }
  for (i = 0; i < l; i++){
  res=res+c[i]+" "
    
  }
      console.log(res)

}
  
  if (process.env.USERNAME === "lenovo") {
    runProgram("10\n1 2 4 3 5 7 8 6 9 10");
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