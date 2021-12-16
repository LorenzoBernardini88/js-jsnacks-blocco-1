/*JSnack 3

Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari 
e in verde i numeri pari.

Svolgimento:*/

const myArr = [1,2,3,4,5,6,7,8,9,10]; //definisco array.

//creo div1 con createElement.
let div1 = document.createElement('div');
div1.id = 'red';
document.body.appendChild(div1);

//creo div2 con createElement.
let div2 = document.createElement('div');
document.body.appendChild(div2);
div2.id = 'green';

//avvio ciclo 'for' per assegnare contenuto array a pari e dispari.
for(i=0; i<myArr.length; i++){

    if( myArr[i]%2 == 0){
        document.getElementById("green").innerHTML += myArr[i];
        
    }else{
        
        document.getElementById("red").innerHTML += myArr[i];
    }
}