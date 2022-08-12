function validaArray(arr, num){
    try {

        if (!arr && !num) 
        throw new ReferenceError('Envie os parâmetros!');

    if (typeof arr !== 'object') 
        throw new TypeError('Envie um elemento do tipo Array!');
    
    if (typeof num !== 'number')
        throw new TypeError('Envie um elemento do tipo Number');

    if (arr.length !== num)
        throw new RangeError('Tamanho de array inválido!');

    return arr;

    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(error.message)
        } else if (error instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(error.message)
        } else if (error instanceof RangeError) {
            console.log ("Este erro é um RangeError!")
            console.log(error.message)
        } else {
            console.log("Tipo de erro não esperado." , error)
        }
    }  
}  

console.log(validaArray([1, 2, 3, 4, 5], 0));