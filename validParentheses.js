var validParentheses = function(s) {
    let stack = []
    let pairs = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    for(let char of s) {
       if(char in pairs) {
        stack.push(char)
       }else {
            if(stack.length === 0 || char !== pairs[stack.pop()]) {
                return false}
       }
    }
    return stack.length === 0
};
console.log(validParentheses('()[]{}'))