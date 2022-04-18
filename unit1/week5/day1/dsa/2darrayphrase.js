function runProgram(input){
  var a=input.split("\n")
  var rowcol=a[0].split(" ").map(Number)
  var r=rowcol[0]
  var c=rowcol[1]
  var matrix=a.slice(1).map(function(row){
      return row.split("")
  })
  var count=0
  var arr="saba"
  var k=0
  for(i=0;i<r;i++){
  for(j=0;j<c;j++){
      if(matrix[i][j]==arr[k]){
      if(i+3<r){
  if(matrix[i+1][j]==arr[k+1]&&matrix[i+2][j]==matrix[k+2]&&matrix[i+3][j]==matrix[k+3])
           count++
           }
   if(j+3<c){
          if(matrix[i][j+1]==arr[k+1]&&matrix[i][j+1]==matrix[k+2]&&matrix[i][j+3]==matrix[k+3])
          count++
          }
  if(i+3<r&&j+3<c){
          if(matrix[i+1][j+1]==arr[k+1]&&matrix[i+2][j+2]==matrix[k+2]&&matrix[i+3][j+3]==matrix[k+3])
          count++
      }
  if(i-3>=0&&j+3<c){
          if(matrix[i-1][j+1]==arr[k+1]&&matrix[i-2][j+2]==matrix[k+2]&&matrix[i-3][j+3]==matrix[k+3])
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
    