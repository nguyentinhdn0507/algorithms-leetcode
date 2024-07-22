var majorityElement = function(nums) {
        let result = 0
        let count = 0
        for (let num of nums) {
            if (count === 0) {
                result = num
            }
            count += (num === result) ? 1 : -1
        }
        return result

};
console.log(majorityElement([6, 5, 5]))