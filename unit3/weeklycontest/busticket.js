function runProgram(input){
    var a=input.split("\n")
    var t=Number(a[0])
    var queue=[]
    for(i=1;i<=t;i++){
        var arr=a[i].split(" ")
        var res=""

        if(arr[0]=="E"){
            queue.push(arr[1])
            console.log(queue.length)

        }
        if(arr[0]=="D"){
            if(queue.length>0){
                var left=queue[0]
            queue.shift()
            res=res+left+" "+queue.length
            console.log(res); 
        }
      else{
         res = "-1" + " " + queue.length
           console.log(res)
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
      read = read.replace(/\n$/,"")
     runProgram(read);
  });
  process.on("SIGINT", function () {
      read = read.replace(/\n$/,"")
      runProgram(read);
      process.exit(0);
  });





  function runProgram(input){
    var stk = input.split("\n").map(Number);
  var arr =[];
  for (var i = 1;i<stk.length;i++)
  { 
   	if ( i === stk.length -1)
   	{
   		arr.push(-1);
   	}
  
    for (let j = i+1;j<stk.length ; j++)
    {
    	if (j == stk.length-1)
        {
          arr.push(-1);
          var newStk =-1;
          break;
        } 
      else if (stk[i] < stk[j])
        {

          var newStk =stk[j];
          var k = j;
          break;
        }
    }
    
    for (var j = k+1;j<stk.length;j++)
  	{ 
      if (newStk == -1)
    	{
        break;
      } else {
         if (newStk > stk[j])
    		 {
         	 arr.push(stk[j])
       		 break;
	 		} 
      	else if(j == stk.length-1)
      		{
     		  arr.push(-1);
       		  break;
      		}
  	 		
      }
  }

    
  
  }  
     console.log(arr.join(" "))
    
 }
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 let read = "";
 process.stdin.on("data", function (input) {
     read += input;
 });
 process.stdin.on("end", function () {
     read = read.replace(/\n$/,"")
    runProgram(read);
 });
 process.on("SIGINT", function () {
     read = read.replace(/\n$/,"")
     runProgram(read);
     process.exit(0);
 });

























