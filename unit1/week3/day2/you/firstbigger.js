function runProgram(input) {
    var newInput = input.split(/[\n]+/);
    var t = Number(newInput[2]);
    var arr=newInput[1].split(" ").map(Number)
    var n=Number(newInput[0])
    for (a = 1; a <= t; a++){
        var k = Number(newInput[a + 2])
        var arr1 = []
        for (i = 0; i < n; i++) {
            if (arr[i] > k) {
                arr1.push(arr[i])
            }
        }
            var min=arr1[0]
        for (j = 1; j < arr1.length; j++){
            
        if (arr1[j] < min) {
            min=arr1[j]
        }
          
        }
     	 if(arr1==""){
            console.log("-1")
            } 
          else

            console.log(min)

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