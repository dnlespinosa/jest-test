// BEFORE AND AFTER

const { getCartTotal } = require('./cart');

// befores and afters can be written inside AND outside of describes and other tests, where they are written depends on what scope you want (global versus just that test)
afterEach(() => {
    console.log('see what i did ther?')
})

describe('getCartTotal', function() {
    // we need to leave our variable OUTof the beforeEach function so it can be in the correct scope for each test function
    let cart;

    beforeEach(function() {
        console.log('before each')
        cart = [
            {item: 'le croix', price: 4.99, qty: 3}, 
            {item: 'pretzel', price:8.99, qty:10}
        ];
    })
    // afterEach(function() {
    //     console.log('AFTER EACH')
    // })

    beforeAll(function() {
        console.log('BEFORE ALL')
    })

    afterAll(function() {
        console.log('AFTER ALL')
    })


    test('get total w/o discount', function() {
        const total = getCartTotal(cart);
        expect(total).toBe(104.87);
    })

    test('get total w/ discount', function() {
        const total = getCartTotal(cart, 0.5)
        expect(total).toBe(52.44);
    })
})

