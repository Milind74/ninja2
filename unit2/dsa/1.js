
// Non Primitive data type:
var main_obj = {
  a:2,
  b:3,
  c:{
      x:7,
      y:4,
  },
}

function copy(main_obj){
  var copy_obj ={}
  for (key in main_obj)
  {
      copy_obj[key]=main_obj[key]
  }
 
 return copy_obj;
}
console.log(copy(main_obj));

var new_obj = copy(main_obj)
 new_obj.a=5;
 console.log(new_obj)
 console.log(copy(main_obj));



 var main_array = [1,2,3,4,5]
 var arr =[]

 function copy_array (main_array){
     
    for (i=0; i<main_array.length;i++){
         var sec_arr=main_array[i];
         arr.push(sec_arr)
    }
    
 }
 console.log(copy_array(main_array))

 arr[0]=7;
 console.log(arr)
 console.log(main_array)

