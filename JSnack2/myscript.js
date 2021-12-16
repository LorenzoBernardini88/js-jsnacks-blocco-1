// JSnack 2

// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

//Svolgimento

let N = parseInt(prompt('Inserisci un Numero '));

for(index=0; index<N; index++){

    const array = [];

    for(i=0; i<10; i++){

        array.push( Math.floor( Math.random( ) * 100 + 1 ) );

    }
    
    console.log(array);

}







