var obj={
    data:[1, 2, 6, 7, 3, 4, 9, 0],
    less:function(value){
        var less=[]
        for(i=0;i<this.data.length;i++){
            if(this.data[i]<value){
                less.push(this.data[i])
            }
        }
        return less
    }, 
    more:function(value){
        var more=[]
        for(i=0;i<this.data.length;i++){
            if(this.data[i]>value){
            more.push(this.data[i])
            }
        }
        return more
    }
}
console.log(obj.less(4))
console.log(obj.more(6))