var cartitem = JSON.parse(localStorage.getItem('cart'))
console.log(cartitem)

let parent = document.getElementById('dis')

//totalno

let num_cart=cartitem.length
let p_total = document.createElement("p");
p_total.innerHTML = "total_no of items:"+ num_cart

var totalpr=document.getElementById("totalitem")
totalpr.append(p_total)
//promo

var promo =document.getElementById("promo")

var disp=document.createElement('p')
disp.textContent="discountprice"
promo.append(disp)


//totalprice

var total = cartitem.reduce((a, c) =>
a + Number(c.price), 0)
console.log(total)


var p = document.createElement('p')
p.textContent = `your total cart value is ${total}`

// function showlocations(){

cartitem.forEach(function (el) {
let div = document.createElement("div");

let p_name=document.createElement('p')
p_name.innerHTML=`item:${el.name}`

let p_price = document.createElement("p");
p_price.innerHTML = `price: ${el.price}`;


//discount
var btn = document.getElementById("promobtn")
btn.addEventListener("click", applyCoupon);

let img = document.createElement("img");
img.style.width = "200px";
img.style.height = "200px";
img.src = el.image;



price.append(p)
div.append(p_name,p_price,img)
parent.append(div)

});


//applycoupan

function applyCoupon() {
    var input = document.getElementById("input").value;
    console.log(input,input.length)
    
    if( (input.length == 7)){

        var num = input.slice(5,7);
    console.log(num)
    var discount = Math.round(total- (total *(num) / 100) )
 // calculating discount
 console.log(discount);
 var dprice = document.getElementById("dprice");
 dprice.innerHTML="total price"+discount

 dprice.innerHTML = `congratulations you got ${num}% discount,
  your final cart value is ${discount} ₹`;

    }
 else {
    console.log("error")
     alert("apply correct promo code")

 }

}