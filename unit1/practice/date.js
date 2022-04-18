function runProgram(input) {
    var a = input.split("-")
    var year = Number(a[0])
    var month = Number(a[1])
    var dat = Number(a[2])
        
        switch (month) {
            case 01:
                console.log(dat +" " +"january," +" " +year)
                break;
             case 02:
                console.log(dat +" " +"feburary," +" " +year)
                break;
         case 03:
                console.log(dat +" " +"march," +" " +year)
                break;
         case 04:
                console.log(dat +" " +"april," +" " +year)
                break;
         case 05:
                console.log(dat +" " +"may," +" " +year)
                break;
         case 06:
                console.log(dat +" " +"june," +" " +year)
                break;
         case 07:
                console.log(dat +" " +"july," +" " +year)
                break;
         case 08:
                console.log(dat +" " +"august," +" " +year)
                break;
         case 09:
                console.log(dat +" " +"september," +" " +year)
                break;
         case 10:
                console.log(dat +" " +"october," +" " +year)
                break;
         case 11:
                console.log(dat +" " +"november," +" " +year)
                break;
         case 12:
                console.log(dat +" " +"december," +" " +year)
                break;
        
        
            default:
                break;
        }
    
    }

if (process.env.USERNAME === "lenovo") {
          runProgram("2020-06-10");
                      
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