// EXAMPLE 1
function add(x,y) {
    return x+y;
}

module.exports = { add };

function square(x) {
    return x*x;
}

// notice the spaces in { }
module.exports = { square };

function cube(x) {
    return Math.pow(x,3)
}

module.exports = { cube }

// ANY
const TOYS = ['doll', 'top', 'ipad'];

function getRandomToy() {
    let idx = Math.floor(Math.random() * TOYS.length + 1);
    return {
        toy: {
            name:TOS[idx],
            price: 34.99
        }
    };
}

module.exports = {getRandomToy};