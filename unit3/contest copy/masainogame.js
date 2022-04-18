function runProgram(input)
{
	let ip=input.split("\n").map(Number);
  let length=Number(ip[0]);

  let arr=[];
  let stack2=[];
  for(let i=1;i<ip.length;i++)
  {
    /////////////////////////////
    if(i==ip.length-1)
    {
    	arr.push([-1,i]);
    }
	for(let j=i+1;j<ip.length;j++)
    {
    	if(ip[i]<ip[j])
        {
        	arr.push( [ip[j],j] );
          break;
        }
      	else if(j==ip.length-1)
        {
        	arr.push([-1,j]);
        }
    }
    //////////////////////////////
  }
  
  for(let i=0;i<arr.length;i++)
  {
  	let cor=(arr[i])[1];
    let num=(arr[i])[0];
    
    if(num==-1)
        {
        	stack2.push(-1);	
        }
    for(j=cor+1;j<ip.length;j++)
    {
      	
		 if(num>ip[j])
        {
        	stack2.push(ip[j]);
          break;
        }else if (j==ip.length-1)
         {
         	stack2.push(-1);
         }
      
      }
    }  
    console.log(stack2.join(" "));
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