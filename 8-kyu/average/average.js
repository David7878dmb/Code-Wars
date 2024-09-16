const average = array =>{
    if (typeof array === 'undefined') return;
    if (array.length === 0) return 0;     
    let sum = 0;
    array.forEach(num => { sum += num });
    return sum / array.length;
}

module.exports = {
    average
}

console.log(average([1, 2, 3, 4, 5, 6]));