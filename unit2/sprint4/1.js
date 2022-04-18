function runProgram(input) {
  var a = input.split("\n")
  var test=Number(a[0])
  for(t=0;t<test;t++){
    var arr1=a[2*t+1].split(" ").map(Number)
    var arr2=a[2*t+2].split(" ").map(Number)
    var n=arr1[0]
    var k=arr1[1]
    var x=arr1[2]
    var count=0
    for(i=0;i<n;i++){
      var res=""
      for(j=0;j<n;j++){
        res+=arr2[j]
        if(res.length==x){
          var count1=0
          for(u=0;u<x;u++){
            if(res[u]<=k){
              count1++
            }
          }
          if(count1==x)
            count++

        }
      }
    }
    console.log(count)

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