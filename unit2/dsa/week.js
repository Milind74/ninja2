function runProgram(input){
    var a=input.split("\n")
    var day=a[0]
    var n=Number(a[1])
    if(day=="Wednesday"){
    var value=n%7
    if(value==5)
      console.log("Monday")
    if(value==6)
      console.log("Tuesday")
    if(value==0)
      console.log("Wednesday")
    if(value==1)
      console.log(" Thursday")
    if(value==2)
      console.log("Friday")
    if(value==3)
      console.log("Saturday")
    if(value==4)
        console.log("Sunday")
    }
  
      if(day=="Thursday"){
    var value=n%7
    if(value==4)
      console.log("Monday")
    if(value==5)
      console.log("Tuesday")
    if(value==6)
      console.log("Wednesday")
    if(value==0)
      console.log("Thursday")
    if(value==1)
      console.log("Friday")
    if(value==2)
      console.log("Saturday")
    if(value==3)
        console.log("Sunday")
    }    
   if(day=="Friday"){
    var value=n%7
    if(value==3)
      console.log("Monday")
    if(value==4)
      console.log("Tuesday")
    if(value==5)
      console.log(day=="Wednesday")
      if(value==6)
      console.log("Thursday")
    if(value==0)
      console.log("Friday")
    if(value==1)
      console.log("Saturday")
    if(value==2)
        console.log("Sunday")
    }
      
   if(day=="Saturday"){
    var value=n%7
    if(value==2)
      console.log("Monday")
    if(value==3)
      console.log("Tuesday")
    if(value==4)
      console.log("Wednesday")
      if(value==5)
      console.log("Thursday")
    if(value==6)
      console.log("Friday")
    if(value==0)
      console.log("Saturday")
    if(value==1)
        console.log("Sunday")
    }
      
   if(day=="Sunday"){
    var value=n%7
    if(value==1)
      console.log("Monday")
    if(value==2)
      console.log("Tuesday")
    if(value==3)
      console.log(day=="Wednesday")
      if(value==4)
      console.log("Thursday")
    if(value==5)
      console.log("Friday")
    if(value==6)
      console.log("Saturday")
    if(value==0)
        console.log("Sunday")
    }
      
   if(day=="Monday"){
    var value=n%7
    if(value==0)
      console.log("Monday")
    if(value==1)
      console.log("Tuesday")
    if(value==2)
      console.log(day=="Wednesday")
      if(value==3)
      console.log("Thursday")
    if(value==4)
      console.log("Friday")
    if(value==5)
      console.log("Saturday")
    if(value==6)
        console.log("Sunday")
    }
      
   if(day=="Tuesday"){
    var value=n%7
    if(value==6)
      console.log("Monday")
    if(value==0)
      console.log("Tuesday")
    if(value==1)
    console.log("Wednesday")
    if(value==2)
      console.log("Thrusday")
    if(value==3)
      console.log("Friday")
    if(value==4)
      console.log("Saturday")
    if(value==5)
        console.log("Sunday")
    
   }
  }
  
    if (process.env.USERNAME === "MILIND") {
        runProgram("Wednesday\n67");
                    
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
    
    
    