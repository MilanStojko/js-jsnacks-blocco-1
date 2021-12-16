let padre = document.getElementById("massaromannaro");

const verde = document.createElement ("div");
const rosso = document.createElement ("div");
padre.append (rosso, verde);


verde.id = ("verde");
rosso.setAttribute ("id","rosso");


numeri = [4, 8, 15, 16, 23, 42];

let jack = '';
let locke = '';
let i = 0;
while ( i < numeri.length){

    if(numeri[i] % 2 == 0){
        jack += numeri[i]+ ', ';

    }else{
       locke += numeri[i]+ ', ';
        
    }
    i++;
}

jack[jack.length - 1] = '.'
console.log (jack[2]);

// substring ti ridà una stringa contenente i caretti che vanno dal primo elemento che metti all'ultimo che metti (.substring{x....y})
verde.innerHTML = jack.substring (0, jack.length - 2) +'.';
rosso.innerHTML = locke.substring (0, locke.length - 2) +'.';