const { palindrome } = require('./palindrome')

test('palindrome of david' , () =>{
    const result = palindrome('david')

    expect(result).toBe('divad')
})

test('palindrome is empty' , () => {
    const result = palindrome()

    expect(result).toBeUndefined()
})