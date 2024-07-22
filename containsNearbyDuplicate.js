var containsNearbyDuplicate = function(nums, k) {
    for (num of nums) {
        if (nums.lastIndexOf(num) - nums.indexOf(num) <= k) {
            return true
        }
    }
};
console.log(containsNearbyDuplicate([1,2,3,1,2,3],2))