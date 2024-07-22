var maxHeightOfTriangle = function(red, blue) {
   
    if((red+blue) % 2 === 0) {
        return (red+blue)/2
    }else {
        return 2
    }
};
console.log(maxHeightOfTriangle(4,4))