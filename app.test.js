// EXAMPLE 1
// const {add} = require("./app");

// test('add some return sum', function() {
//     let sum = add(2,3);
//     expect(sum).toEqual(5);
// })

const {square} = require('./app');
const {cube} = require('./app');
test('square should return squared value', function() {
    let res = square(3)
    expect(res).toEqual(9)
})

test('square should square a negative number', function() {
    const num = square(-9)
    expect(num).toEqual(81)
})

// DESCRIBE
// describe('add function', function() {
//     test('return sum', function() {
//         let sum = add(2,3);
//         expect(sum).toEqual(5);
//     });

//     test('return sum w/ negative numbers', function() {
//         let sum = add(-2,3);
//         expect(sum).toEqual(1);
//     });
// })

describe('square function', function() {
    test('square should return squared value', function() {
        let res = square(3)
        expect(res).toEqual(9)
    });
    
    test('square should square a negative number', function() {
        const num = square(-9)
        expect(num).toEqual(81)
    });
})

describe('cube function', function() {
    test('should cube a positive number', function() {
        const num = cube(3);
        expect(num).toEqual(27)
        const num2 = cube(2);
        expect(num2).toEqual(8);
    })
})

const { getRandomToy } = require('./app');
test('random toy', function() {
    let toy = getRandomToy()
    expect(toy).toEqual({
        toy: {
            // this is a placeholer for any value
            name: expect.any(String),
            price:34.99
        }
    });
});
