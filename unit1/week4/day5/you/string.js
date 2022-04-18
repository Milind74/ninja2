var obj={
    item:"milind",
    vowelcount:function(){
        var count=0
        for(i=0;i<this.item.length;i++){
            if(this.item[i]=='a'||this.item[i]=='e'||this.item[i]=='i'||this.item[i]=='o'||this.item[i]=='u')
            {
            count++
            }
        }
        return count
    },
    reverse:function( ){
        var res=""
        for(i=this.item.length-1;i>=0;i--){
            res=res+this.item[i]
        }
        return res

},
changecase:function()    {
    var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lower="abcdefghijklmnopqrstuvwxyz"
    var output=""
    for(i=0;i<this.item.length;i++){
    for(j=0;j<upper.length;j++){
    if(this.item[i]==upper[j]){
        output=output+lower[j]
    }
    else{
        for(i=0;i<this.item.length;i++){
            for(j=0;j<lower.length;j++){
                if(this.item[i]==lower[j]){
                    output=output+upper[j]   
                 }
                }
 }
}
}   
}
return output

}
}
    
console.log(obj.vowelcount())
console.log(obj.reverse())
console.log(obj.changecase())
