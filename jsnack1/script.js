 

let array= [];
let somma= 0;
let i=0;

do{
    let valoreInserito = prompt("inserisci un numero");
    array [i] = valoreInserito;
    i++;
    somma += parseInt(valoreInserito);

}while(somma < 50);

console.log (array);
console.log (somma);
