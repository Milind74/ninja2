function runProgram(input) {
    var b = input.split("\n");
    // console.log(b)
    var size=Number(b[0])
    var arrmarks=[]
    var arrname=[]
    for(i=1;i<=size;i++){
        var arr=b[1].split(" ")
        //console.log(arr)
        var name=arr[0]
        var marks=Number(arr[1])
        arrmarks.push(marks)
        arrname.push(name)
    
    }
    // console.log(arrmarks)
    // console.log(arrname)
    var max=0
    var name=0
    for(i=0;i<arrmarks.length;i++){
    if(arrmarks[i]>max){
        max=arrmarks[i]
        name=i
        
    }
}
console.log(arrname[name])
    
    
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
