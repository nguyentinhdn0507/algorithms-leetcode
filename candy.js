var candy = function(ratings) {

    let sum = 0;
    let candies = new Array(ratings.length).fill(1)

    for (let i = 0; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1
        }
    }
    
    for(let i = ratings.length - 1; i > 0; i--) {
        if( ratings[i - 1] > ratings[i]) {
            candies[i - 1] = Math.max(candies[i - 1], candies[i] + 1)
        }
    }
    return candies.reduce((a, b) => a + b, sum)
};
console.log(candy([1,0,2]))