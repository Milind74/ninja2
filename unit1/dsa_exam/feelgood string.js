function runProgram(input) {
    var a= input.split("\n")
    var b=Number(a[0])
    var c=a[1]
    var count=0
    for(i=0;i<b;i++)
    {
        if(c[i]=='a'||c[i]=='e'||c[i]=='i'||c[i]=='o'||c[i]=='u')
{
    count++
}
    }
    if(count>=b/2){
        console.log("feel good")
    }
    else{
        console.log("feel bad")
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