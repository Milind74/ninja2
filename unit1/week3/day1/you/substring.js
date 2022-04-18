function runProgram(input) {
    var a = input.split("\n")
    var arr1 = a[0]
    var arr2 = a[1]
    var k = 0
  for (i = 0; i < arr1.length; i++) {
        var result = 0

    for (j = 0; j < arr2.length; j++) {
      if (arr2[j] == arr1[i + j]) {
        result++
      }
      
    }
    if (result == arr2.length) {
      console.log("Yes")
      k = 1
    }
  }
    
    if (k == 0) {
    console.log("No")
  }
        }



if (process.env.USERNAME === "lenovo") {
      runProgram("masai\nsai");
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


//   function runProgram(input) {
//     var a=input.split("\n")
//    var arr1=a[0]
//    var arr2=a[1]
//    var count=0
//    var k=0
//    console.log(a[0])

//     for(i=0;i<arr1.length;i++){
//         for(j=0;j<arr2.length;j++){
//             if(arr1[2]==arr1[i+j]){
//                 count++
//             }

//         }
//         if(count==arr2.length){
//             k++
//         }
      
//     }
//     if(k>0){
//         console.log("yes")
//     }
//     else{
//         console.log("no")
//     }
// }
    
      
//    if (process.env.USERNAME === "MILIND") {
//              runProgram("masai\nsai");
                         
//            } else {
//              process.stdin.resume();
//              process.stdin.setEncoding("ascii");
//              let read = "";
//              process.stdin.on("data", function (input) {
//                read += input;
//              });
//              process.stdin.on("end", function () {
//                read = read.replace(/\n$/, "");
//                read = read.replace(/\n$/, "");
//                runProgram(read);
//              });
//              process.on("SIGINT", function () {
//                read = read.replace(/\n$/, "");
//                runProgram(read);
//                process.exit(0);
//              });
//          }
  



