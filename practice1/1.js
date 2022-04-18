function runProgram(input) {
  var a = input.split("\n");
  var test=Number(a[0])
  for(t=0;t<test;t++){
      var arr=a[t*2+1].split(" ").map(Number)
      var arr2=a[t*2+2].split(" ").map(Number)
      var n=arr[0]
      var k=arr[1]
      arr2.sort(function(a,b){
        return a-b
      });
      //0 1 2 3 4 7
      var left=0
      var right=n-1
      var max="-1"
      var sum=0
      while(left<right){
        sum=arr2[left]+arr2[right]
        if(sum<k){
          max=Math.max(sum,max)
          left++
        }
          right--
        }
      s
      }
      console.log(ans)


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