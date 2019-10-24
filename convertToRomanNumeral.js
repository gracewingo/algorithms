//Convert the given number into a roman numeral.
//All roman numerals answers should be provided in upper-case

let nums = [1,4,5,9,10, 20, 40,50,90,100,400,500,900,1000,2000,3000,4000];
let symbols = ["I", "IV", "V", "IX", "X", "XX", "XL", "L", "XC","C", "CD", "D", "CM", "M", "MM", "MMM", "MMMM"];

function convertToRoman(num) {
//if the number in nums matches with its equiv in symbols, return that sym
	let n = "";
	if (nums.includes(num)){
		for (let i = 0; i < nums.length; i++){		
			if (num == nums[i]){
				//return value of the symbols element at the index of the num (i) elem 
				return symbols[i];
			}
		}
	}

	if (!nums.includes(num)){
		//1st, find the highest decimal value v (nums) that is less than or equal to the decimal number x
		//& its corresponding roman numeral n:
		//loop through the nums array to find this number
		let n = "";
		let x = num;

		let findRomNum = function (){
			for (let i = 0; i < nums.length; i++){
				if (nums[i] > x){
					n += symbols[i-1];
					//this is the number that you have left to convert to roman numeral 
					x = x - nums[i-1]; 
					//when x gets 0, stop 
					if (x==0){
						break;
					}
					//if x doesn't = 0, keep running this function to find the roman numeral 
					return findRomNum();
				}
			}
		};
		findRomNum();
		return n;
	}
}

console.log(convertToRoman(1099));
