function runProgram(input){
    var n=input.split("\n")
    var l=Number(n[0]);
    var arr=n[1].split(" ").map(Number)
    var stack=[]
    var str=[]
    var str1=""
    for(i=arr.length-1;i>=0;i--){
        while(stack[stack.length-1]<=arr[i]){
        stack.pop()
        }
    if(stack.length===0){
        str.push(arr[i])
    }
    stack.push(arr[i])
}
for(j=str.length-1;j>=0;j--){
    str1+=str[j]+" "
}
console.log(str1)
}
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
      read += input;
  });
  process.stdin.on("end", function () {
      read = read.replace(/\n$/,"")
     runProgram(read);
  });
  process.on("SIGINT", function () {
      read = read.replace(/\n$/,"")
      runProgram(read);
      process.exit(0);
  });