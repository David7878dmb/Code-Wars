const palindrome = (string) => {
    if (typeof string === 'undefined') return
    return string
        .split('')
        .reverse()
        .join('')
}


module.exports = {
    palindrome
}

console.log(palindrome('davida'))