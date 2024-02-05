// creiamo un array vuoto 

var numberList = [];

// chiediamo all'utente di inserire dei numeri fino a quando la somma degli stessi non supera 50
let somma = 0;

do {
    // chidiamo di inserire un numero all'interno dell'array
    let number = parseInt(prompt('Inserisci un numero'));
    numberList.push(number);
    console.log(numberList);

    // calcoliamo la somma dei numeri all'interno dell'array
    for (let i = 0; i < numberList.length; i++) {
        somma += numberList[i];
        console.log(somma);
    }

    // chiediamo di inserire un altro numero all'interno dell'array finche la somma non supera 50
} while (somma < 50)

document.querySelector('#result').innerHTML = `<span>${somma}</span>`;



