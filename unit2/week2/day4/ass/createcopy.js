   var main_array = [1,2,3,4,5]//this is a original array
   var arr =[]//taken a empty array
   function copy_array (main_array){//created a copy function and assigning a parameter that is original array
       
      for (i=0; i<main_array.length;i++){//used for loop for main array
           var sec_arr=main_array[i];//copy main array element to second_array
           arr.push(sec_arr)//pushoing it in empty array which is declared above
      }
      
   arr[0]=7;//now changing the value of copy array which is pushed in array
   console.log(arr)
   console.log(main_array)

   }
copy_array(main_array)//calling copy function

var main_obj={//created object
    a:2,
    b:3,
    c:{
        x:7,
        y:4,
    },
}

function copy(main_obj){//   function copy_array (main_array){//created a copy function and assigning a parameter that is original object
    var copy_obj={}//created a copy object
console.log(main_obj)

for(key in main_obj){   //used loop for mainobj
    copy_obj[key]=main_obj[key]//copy of main object to copy obj
    }
    copy_obj.a=5//changing new value
    console.log(copy_obj)

}
copy(main_obj)//calling copy function