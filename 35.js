
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

example 1

Input: [1,3,5,6], 5
Output: 2

example 2

Input: [1,3,5,6], 2
Output: 1


out put:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
var i=0; 
while(i<nums.length)
{ 
  if(nums[i] === target){
return i;
};
  if(nums[i] > target){
return i;
} 
  
    i++
};
    return nums.length;
};


