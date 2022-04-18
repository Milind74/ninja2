var input=`5 5
4 7 1 1 7
8 9 9 6 1
6 4 9 5 1
7 7 4 7 7
8 6 2 5 5`
var a= input.split(/[\n]+/);
var l=a[0].split(" ").map(Number)
for(c=1;c<=l[0];c++){
    var res=""
    var arr=a[c].split(" ")
if(c%2==0)
{
    for(i=0;i<arr.length;i++){
       res= res+arr[i]+" "
    }

   }
      else{
        for(j=arr.length-1;j>=0;j--){
           res=res+arr[j]+" "
        }
        }
    console.log(res)

    }


   
