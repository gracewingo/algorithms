var twoSum = function(nums,target) {
	const res = {};

	for (let i = 0; i < nums.length; i++){
		if (res[nums[i] ] >=0) {
			console.log([ res[nums[i]], i])
			return [ res[nums[i]], i]
		}  
		res[target - nums[i]] = i;
	}

}


//var nums = [2,7,11,15,2];
var nums = [2,5,5,11]
var target = 10;


console.log(twoSum(nums,target))
