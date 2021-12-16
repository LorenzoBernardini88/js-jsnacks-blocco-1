// JSnack 1

// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri
//  all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

//Svolgimento

const myArr = [];
let add = 0;

do{

    let n = parseInt(prompt('Inserisci un Numero'));
    add += n; 
    myArr.push(add)

}while(add < 50);

console.log(add);












