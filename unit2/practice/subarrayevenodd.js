var a=[1,2,3,4,5]
var n=a.length
var count=0
for(var i=0;i<n;i++)
{
for(var j=i;j<n;j++)
{
  if(a[i]%2==0&&a[j]%2!=0){
  count++
}
}
}
console.log("finalcount="+count)