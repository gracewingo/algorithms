/*
https://leetcode.com/problems/median-of-two-sorted-arrays/submissions/
Description: 

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n))
You may assume nums1 and nums2 cannot be both empty.

Challenge successfully passed the test cases. 

Details: Runtime: 208 ms, faster than 5.43% of JavaScript online submissions for Median of Two Sorted Arrays.
Memory Usage: 44.8 MB, less than 8.51% of JavaScript online submissions for Median of Two Sorted Arrays.
*/

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
