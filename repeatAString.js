/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  var arr = []; //create empty array to hold new string 
  for (let i = 0; i < num; i++){ 
  	arr.push(...str) //add the str to the new array 
  }
  return typeof arr.join("");//join them back together 

}
