function runProgram(input){
    var a=input.split("\n")
    var rowcol=a[0].split(" ").map(Number)
    var n=rowcol[0]
    var m=rowcol[1]
    var s=rowcol[2]
    var matrix=a.slice(1).map(function(row){
        return row.split(" ").map(Number)
    })
    var count=0
    var sum1=0
    var sum2=0
    var sum3=0
    var sum4=0
    for(i=0;i<n;i++){
    for(j=0;j<m;j++){
        if(j<m-2){
            sum1=matrix[i][j]*matrix[i][j+1]*matrix[i][j+2]
            if(sum1==s){
                count++
            }
        }
        if(i<n-2){
            sum2=matrix[i][j]*matrix[i+1][j]*matrix[i+2][j]
            if(sum2==s){
                count++
            }   
        }
        if(i<n-2 &&j<m-2){
            sum3=matrix[i][j]*matrix[i+1][j+1]*matrix[i+2][j+2]
            if(sum3==s){
                count++
            }   
        }
        if(i>1&&j<m-2){
            sum4=matrix[i][j]*matrix[i-1][j+1]*matrix[i-2][j+2]
            if(sum4==s){
                count++
            }   
        } 
    }
    }
    console.log(count)

    
        }  
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
      