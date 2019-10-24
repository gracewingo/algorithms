//Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
//median is the number in the middle 

//https://leetcode.com/problems/median-of-two-sorted-arrays/submissions/

var findMedianSortedArrays = function(nums1, nums2) {
    //merge the two arrays together 
    var arr = nums1.concat(nums2)

    //sort. account for decimals and negative numbers
    arr.sort(function(a,b){
        return a-b;
    });
    var median;

    if (arr.length % 2 === 0){
        //find the two middle indexes. grab the values there. add them together, divide by two 
    	var centerIdx1 = arr.length/2;
    
        median = (arr[centerIdx1] + arr[centerIdx1-1])/2
    } else {
    	var idx = Math.floor(arr.length/2);
        median = arr[idx]
    }
    return median
};

//edges cases: decimals, negative numbers
var nums1 = [3];
var nums2 = [-2,-1];

console.log(findMedianSortedArrays(nums1,nums2));
