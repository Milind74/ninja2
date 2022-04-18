function runProgram(input) {
  var a = input.split(" ").map(Number)
  var price = a - 80
  if (price <= 150) {
    console.log(price/3)
  }
  if (price > 150 && price <= 650) {
    price = price - 150
    console.log((price/5)+50)
  }
  if (price > 650) {
    price = price - 650
    console.log((price/10)+150)
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
       
