var a=[1,2,3]
var n=a.length
var count=0
for(var i=0;i<n;i++)
{
for(var j=i;j<n;j++)
{
  if((a[i]+a[j])%2==0&&j-i+1>1){
  count++
  }
}
}
console.log("finalcount="+count)