function runProgram(input){
    var a=input
    var res=""

    for(i=0;i<a.length;i++)
    {
        if(a[i]=="?"){
            continue
        }
        else
        if(a[i]=="b"){
            a[i-1]="a"
        }
        else
        if(a[i]=="a"){
            a[i-1]="b"

        }
        console.log(a[i])
    }
    
    }

  
  
  if (process.env.USERNAME === "MILIND") {
      runProgram("?ba??b?b");
                  
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
  
  
  