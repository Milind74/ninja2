function runProgram(input) {
  var a = input.split(/[\n]+/);
  var test=Number(a[0])
  for(c=0;c<test;c++){
  var b=Number(a[c+1])
    var k=0
    for(j=2;j<=b;j=j*2)
    {
     if(j==b){
       k++
     }
    }
    if(k==0){
      console.log("False")
    }
    else{
      console.log("True")
    }
  }
}
    //    console.log("True")
    //      k=0
    //      break;
    //    }
    // }
    // if(k==0)
    //   console.log("False")
      
    //   }
    //   }
    
            
  


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