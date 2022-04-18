// var a=[1,2,3,4,5,6,7,8,9,10]
// // console.log(a)
// for(s=0;s<a.length;s++){
//     for(e=0;e<a.length;e++){
//         var res=""
//         for(k=s;k<=e;k++){
//             res=res+a[k]+" "
//         }
//         console.log(res)

//     }

// }

var a=[1,2,3]
var n=a.length
var count=0;

for(var i=0;i<n;i++)
  {
        for(var j=i;j<n;j++)
    {
      var sum=0
      var res=""
    for(var k=0;k<j-i+1;k++)
     {
      res=res+a[i+k]+" "
        sum+=a[i+k]  

     }
     if(sum%2==0){
         count++
     }
     console.log(res)
    }
}
console.log("count="+count)

