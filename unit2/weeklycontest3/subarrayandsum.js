function runProgram(input) {
  var a = input.split("\n");
      var arr1 = a[0].split(" ").map(Number)
      var arr2 = a[1].split(" ").map(Number)
      var n=arr1[0];
      var k=arr1[1];

      let windowSize= winSize(arr2,k)
      if(windowSize==-1){
          console.log(0)
      }
      else{
          let sum=0
          let count=0
          let i=0
          let j=0
          while(j<arr2.length){
              sum+=arr2[j]
              if(j-i+1==windowSize){
                  if(sum%k!=0)
                      count++
                      sum-=arr2[i]
                      i++
              }
                  j++
          }
              console.log(count)
          
      }
      
      function winSize(arr2,k){
          let sum=0
      for(i=0;i<arr2.length;i++){
          sum+=arr2[i]
      }
          if(sum%k!=0){
              return arr2.length
          }
          else{
              let i=0;
              let j=arr2.length-1
              while(i<j){
                  if(arr2[i]%k!=0){
                  return arr2.length-(i+1)
              }
              else if(arr2[j]%k!=0){
                  return arr2.length-(arr2.length-j)
              }
              i++
              j--
          }
          return -1
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