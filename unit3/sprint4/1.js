function runProgram(input) {
    let inp = input.trim().split("\n")
      let test = +inp[0]

      for(let i=1;i<=test;i++){
          let n = +inp[i]

          function santosh(n,k){
              if(n==k){
                  return 1;
              }
              if(k>n){
                  return 0;
              }

              return santosh(n,k+4)+santosh(n,k+8);
          }

          let res = santosh(n,0)

          console.log(res)
      }
  
      
  }
  if (process.env.USERNAME === 'MILIND') {
      runProgram(`1
      12`)
  }
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
      read += input;
  });
  process.stdin.on("end", function () {
      read = read.replace(/\n$/, "")
      runProgram(read);
  });
  
  process.on("SIGINT", function () {
      read = read.replace(/\n$/, "")
      runProgram(read);
      process.exit(0);
  });