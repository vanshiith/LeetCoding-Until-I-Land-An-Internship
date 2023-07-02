/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    j = 0
    nums.forEach((num) => {
        if(num!=val){
            nums[j++] = num
        }
    })
    return j //2 pointer O(n)
};

// remove duplicates from sorted array --> same soln

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== nums[i+1]){
            nums[count++] = nums[i]
        }
    }
    return count
};

//Remove duplicates 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== nums[i+1] || (nums[i] === nums[i+1] && nums[i+1] !== nums[i+2])){
            nums[count++] = nums[i]
        }
    }
    return count
};