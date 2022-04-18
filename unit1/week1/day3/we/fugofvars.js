var a = "Masai";
var b = 21331;
var c = true;

console.log(typeof a == typeof Number(b));
//string   -number=false
console.log(typeof Number(a) == typeof Number(b));
//number -number
console.log(typeof String(c) == String(""));

//boolean-""
