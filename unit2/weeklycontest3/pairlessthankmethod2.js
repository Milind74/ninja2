function runProgram(input) {
    var a = input.split("\n");
        var arr1 = a[0].split(" ").map(Number);
        var arr2 = a[1].split(" ").map(Number);
        var n=arr1[0];
        var k=arr1[1];
        var currentsum=0;
        //console.log(arr2)
        arr2.sort(function(a,b){
            return a-b
     
        });
        var left=0
        var right=n-1
        var sum=0

        while(left<right){
            sum=arr2[left]+arr2[right];
            if(sum<k){
                max=Math.max(sum,max)
                left++
            }
            else {
                right--
            }
        
        console.log(max)
       
       
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