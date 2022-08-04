function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 2, , 4, 7, 10, 23, 30, 67];

console.log(filtraPares(meuArray));