// solução 1

function verificaPalindromo(string){
    if (!string) return;
    console.log(string === string.split('').reverse().join(''));
}
console.log(verificaPalindromo("arara"));

// solução 2

function verificaPalindromo(string){
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++){
        if (string[i] !== string[string.length -1 -i]){
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo("reviver"));