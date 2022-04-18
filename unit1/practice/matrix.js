var input=
`2 2 2 2
1 2
3 4
2 3
4 5`
var a=input.split("\n")
var b=a[0].split(" ").map(Number)
var r1=b[0]
var c1=b[1]
var r2=b[2]
var c2=b[3]
var arr1=a.slice(1,r1+1).map(function(row){
return row.split(" ").map(Number)
})
console.log(arr1)

var arr2=a.slice(r1+1).map(function(row){
    return row.split(" ").map(Number)
    })
    console.log(arr2)

    if(r1==r2&&c1==c2){
    for(i=0;i<r1;i++){
        var res=""
        for(j=0;j<c1;j++){
     res+=arr1[i][j]+arr2[i][j]+" " 
    }
    console.log(res)


}
}
else{
    console.log("-1")
}
