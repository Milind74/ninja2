function runProgram(input) {
    var a=input.split("\n")
var n=a[0].split(" ").map(Number)
var row=n[0]
var col=n[1]
var matrix=a.slice(1).map(function(r){
    return r.split(" ").map(Number)
}) 
var count=0
var arr="saba"
var k=0
for(i=0;i<row;i++){
    for(j=0;j<col;j++){
        if(matrix[i][j]==arr[k]){
            if(i+3<row){
                if(matrix[i][j]==arr[k+1]
                    && matrix[i+2][j]==arr[k+2]&&matrix[i+3][j]==arr[k+3]){
                        count++
                    }
            }
            if(j+3<row){
                if(matrix[i][j+1]==arr[k+1]
                    && matrix[i][j+2]==arr[k+2]&&matrix[i][j+3]==arr[k+3]){
                        count++
                    }
            }
            if(i+3<row&&j+3<col){
                if(matrix[i+1][j+1]==arr[k+1]
                    && matrix[i+2][j+2]==arr[k+2]&&matrix[i+3][j+3]==arr[k+3]){
                        count++
                    }
            }
            if(i-3<row&&j+3<col){
                if(matrix[i-1][j+1]==arr[k+1]
                    && matrix[i-2][j+2]==arr[k+2]&&matrix[i-3][j+3]==arr[k+3]){
                        count++
                    }
            }
            console.log(count)
        }
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
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
    