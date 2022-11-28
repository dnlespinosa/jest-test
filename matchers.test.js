describe('test matchers', function() {
    test('compare toBe and ToEqual', function() {
        const nums = [3,4,5]
        const copy = [...nums]

        expect(copy).toEqual(nums)
        // this is going to fail, they are different references
        // expect(copy).toBe(nums)
    })

    test('playing with tocontain matcher', function() {
        const colors = ['red', 'orange', 'blue']
        expect(colors).toContain('red')
        // this is going to fail, all caps lettering
        // expect(colors).toContain('RED')
    })

    test('playing with numeric matchers', function() {
        expect(7).toBeGreaterThan(2)
    })

    test('playing with any', function() {
        const randNum = Math.random() * 6;
        expect(randNum).toEqual(expect.any(Number))
    })

    test('playing with not', function() {
        const numLives = 9;
        expect(numLives).not.toEqual(0)
        expect(numLives).not.toEqual(expect.any(Array))
    })
})