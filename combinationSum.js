
var combinationSum = function(candidates, target) {
    let result = []
    function generationCombine (target,combineArr,startIndex  ) {
        if(target === 0) {
            result.push([...combineArr])
            return;
        }
        for (let i = startIndex; i< candidates.length;i++ ) {
            if(candidates[i] <= target) {
                combineArr.push(candidates[i])
                console.log(combineArr)
                generationCombine(target - candidates[i], combineArr,i)
                combineArr.pop();
            }
          
        }
    }
    generationCombine(target,[],0)

    return result
};
console.log(combinationSum([8,7,4,3],11))