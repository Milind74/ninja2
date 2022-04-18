function runProgram(input) {
    var b = input.split("\n");
    var size=Number(b[0])
    var arrm=[]
    var arrn=[]
    for(i=0;i<=size;i++){
        var data=b[i].split(" ")
        var name=data[0]
        var marks=Number(data[1])
        arrn.push(name)
        arrm.push(marks)
    }
        var max=0
       var  max1=0
        for(j=0;j<arrm.length;j++){
            if(arrm[j]>max){
                max=arrm[j]
                max1=j
            }
        }
        console.log(arrn[max1])
        
    
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
