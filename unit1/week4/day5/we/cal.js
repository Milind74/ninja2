var calc={
    a:20,
    b:8,
    addition:function(){
        console.log("add="+this.a+this.b)
    },
    subtraction:function(){
        console.log("sub="+this.a-this.b)
    },
    divide:function(){
        if(this.a!=0){
        console.log("div="+this.a/this.b)
    }
    else{
        console.log("-1")
    }
},

    multiplication:function(){
        console.log("mul="+this.a *this.b)
    }
}
calc.addition()
calc.subtraction()
calc.divide()
calc.multiplication()