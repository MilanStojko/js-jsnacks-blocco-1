
let primordiale = [];

let N = parseInt(prompt("inserisci quante array vuoi avere"));

for ( let i = 0; i < N; i++ ){    //creato N array in base alla richiesta arrivata dal prompt
        
    let x = [];

    for(let j=0; j < 10; j++) {   //randomizzato 10 numeri da 1 a 100 per ciascun array
        
        x.push (Math.floor(Math.random()*100 + 1));

    }
    primordiale.push (x);
    
}

for (let i= 0; i < primordiale.length; i++){       //ho fatto il lavoro di chrmoe solo approfondito (con aiuto di ToMei);

    console.log (primordiale [i]);

    for (let j=0; j < primordiale[i].length; j++){

        console.log (primordiale[i][j]);
    }
}

