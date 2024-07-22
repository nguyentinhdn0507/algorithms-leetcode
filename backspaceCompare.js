var backspaceCompare = function(s, t) {
    const saveStack = (str) =>{
        let stack = [];
        for(let i = 0; i < str.length; i++){
            if(str[i] === '#'){
                stack.pop();
            }else{
                stack.push(str[i]);
            }
        }
        return stack.join('');
    }
    return saveStack(s) === saveStack(t);

};