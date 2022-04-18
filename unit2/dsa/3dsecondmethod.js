function runProgram(input) {
    var a = input.split("\n");
  var arr1=a[0].split(" ").map(Number)
  var layer=arr1[0]
  var r=arr1[1]
  var c=arr1[2]
  var arr2=a[1].split(" ").map(Number)
  var z=0
  var arr5=[]
   for(l=0;l<layer;l++){
    var arr4=[]

   for(i=0;i<r;i++){
        var arr3=[]
   for(j=0;j<c;j++){
       arr3.push(arr2[z])
    z++
    }
        //   console.log(arr3)
          arr4.push(arr3)
}
        //   console.l(arr4)
        arr5.push(arr4)
      }
    //   console.log(arr5)
   
    
  for(var i=0;i<layer;i++)
  {
    
    for(var j=0;j<r;j++)
    { 
      var res="";
      for(var l=0;l<c;l++)
      {
         res+=arr5[i][j][l]+" ";
      }
      console.log(res);
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
