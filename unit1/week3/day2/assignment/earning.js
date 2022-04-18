function runProgram(input) {
  var a = input.split(/[\n]+/);
  var t = Number(a[0])
  for (i = 1; i <= t; i++) {
  var arr1 = a[2 * i].split(" ").map(Number)
  var arr = a[2*i-1].split(" ").map(Number)
    

    var count = 1
      var result=0
      var temp=arr1[0]
          
      for (j = 1; j < arr1.length; j++) {
        if (temp < arr1[j]) {
          count++
           temp=arr1[j]
        
        }
       
    }
      var result=count*arr[1]
        console.log(result)
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