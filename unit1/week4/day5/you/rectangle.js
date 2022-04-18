var rec={
    length:12,
    breadth:8,
    area:function(){
        console.log("area="+this.length*this.breadth)
    },
    perimeter:function(){
        console.log("per="+2*(this.length+this.breadth))

    }
}
rec.area()
rec.perimeter()