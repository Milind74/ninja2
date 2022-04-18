function runProgram(input) {
    var a = input.split("\n");
    var test=Number(a[0])
    var r1=0
    for(t=0;t<test;t++){
        var n=a[t+r1+1].split(" ").map(Number)
        var r=n[0]
        var c=n[1]
        var arr=a.slice(t+r1+2,t+r1+2+r).map(function(row){
            return row.split(" ").map(Number)
        })
         r1=r1+r
         var count=0
            var obj1={}
            for(i=0;i<r;i++){
                var obj={}
                for(j=0;j<c;j++){
                    if(obj[arr[i][j]]==undefined){
                        obj[arr[i][j]]=1
                    }
                    else{
                        obj[arr[i][j]]+=1
                    }
                    }
                    // console.log(obj)
                    for(key in obj){
                        if(obj1[key]==undefined){
                            obj1[key]=1;
                        }
                        else{
                            obj1[key]+=1
                        }
                        }
                    }
                    // console.log(obj1)

                    for(key in obj1){
                        if(obj1[key]==r){
                            count++
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
