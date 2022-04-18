function runProgram(input){
    var a=input.split("\n")
    var b=a[0].split(" ").map(Number)
    var c=a[1].split(" ").map(Number)
    var total1=0
    var total2=0
    for(i=0;i<b.length;i++){
    total1=total1+b[i]
    total2=total2+c[i]
    }
    if(total1>total2){
        console.log("First")
    }
    else if(total1<total2){
        console.log("Second")
    }
    else if(total1==total2){
    
    if(b[2]>c[2]){
        console.log("First")
    }
    else if(b[2]<c[2]){
        console.log("Second")
    }

    else if(total1==total2 && b[2]==c[2]){
         if( b[0]>c[0]){
            console.log("First")
        }
        else if(b[0]<c[0]){
                console.log("Second")
            }
            else{
                console.log("Second")
            }
        }        
            
        }
        

    }
   
  
  
  if (process.env.USERNAME === "MILIND") {
      runProgram("1 11 1\n2 10 1");
                  
    } else {
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
  
    }
  
  
  