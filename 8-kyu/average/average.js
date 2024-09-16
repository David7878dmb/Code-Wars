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

