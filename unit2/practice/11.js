var a="thequickbrownfoxjumpsoverthelszydog"
var arr=[]
var counto=0,countu=0
var n=a.length
for(i=0;i<n;i++){
    if(a[i]=='o'){
        counto++
    }
    if(a[i]=='u'){
        countu++
    }
    if(a[i]=='o'||a[i]=='u')

    {
    if(counto<=1&&countu<=1)
        arr.push(a[i])
    }
    else
        arr.push(a[i])
    
}
console.log(arr)