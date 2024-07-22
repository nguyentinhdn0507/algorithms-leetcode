var singleNumber = function(nums) {

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums.lastIndexOf(nums[i]) === nums.indexOf(nums[i])) {
    //         return nums[i];
    //     }
    // }
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        
        result = result ^ nums[i]
        console.log(result)
    }
    return result

};
console.log(singleNumber([4, 1, 2, 1, 2]
))