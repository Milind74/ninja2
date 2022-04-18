function runProgram(input) {
  var a = input.split("\n")
  var b = Number(a[0])
  var c = a[1]
  var count = 0
  for (i = 0; i < b; i++) {
    if (c[i] == 'a' || c[i] == "b" || c[i] == "c" || c[i] == "d" || c[i] == "e" 
    || c[i] == "f" || c[i] == "g" || c[i] == "h" || c[i] == "i" || c[i] == "j"|c[i]=="k"||
    c[i]=="l"|c[i]=="l"||c[i]=="m"||c[i]=="n"||c[i]=="o"||c[i]=="p"||c[i]=="q"||c[i]=="r"||
    c[i]=="s"||c[i]=="t"||c[i]=="u"||c[i]=="v"||c[i]=="w"||c[i]=="x"||c[i]=="y"||c[i]=="z")
     {
      res=res+c[i].toUpperCase()
    }
    else{
      res=res+c[i].toLowerCase()
    }
  
  }
  console.log(res)

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
