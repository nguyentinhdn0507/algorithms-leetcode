var twoSumArraySort = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1
    while (left < right) {
        let sum = numbers[left] + numbers[right]
        if (sum === target) {
            console.log(left +1)
            console.log(right +1)
            return [left + 1, right + 1]
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
    return []
};
console.log(twoSumArraySort([2, 7, 11, 15],9))