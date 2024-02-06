let userNumber;

document.getElementById('start-game-btn').addEventListener('click', function () {


    do {

        userNumber = parseInt(prompt('Inserisci un numero'));
        console.log(userNumber + ' è il numero inserito dall\'utente');

        if (userNumber % 2 !== 0) {
            console.log(userNumber)
            console.log('il numero inserito è pari');
        }

        else {
            console.log(userNumber + 1 + ' è il numero dispari successivo');

        }

    } while (userNumber !== 0);

});    