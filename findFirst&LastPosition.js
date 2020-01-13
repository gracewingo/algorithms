/*
Given an array of integers nums sorted in ascending order
Find the starting and ending position of a given target value.
Your algorithm's runtime complexity must be in the order of O(log n).
If the target is not found in the array, return [-1, -1].
*/
const searchRange = function(nums, target) {
    	let arr = [];
    	let idx1, idx2;
    	if (nums.indexOf(target) !== -1){
    		nums.map(function(el){
    			if (el === target){
    				idx1 = nums.indexOf(el);
    				idx2 = nums.lastIndexOf(el);
    			}
    		})
    		arr.push(idx1,idx2)
    	} else {
            //TO DO: try with map and filter, and make the else not hard coded 
    		arr = [-1,-1];
    	}
  	return arr;
};

const nums = [5,6,7,8,8,10], target = 6;

console.log(searchRange(nums, target))
