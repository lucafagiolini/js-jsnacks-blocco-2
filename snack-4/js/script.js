let userNumber;

document.getElementById('start-game-btn').addEventListener('click', function () {


    while (userNumber !== 0) {

        userNumber = parseInt(prompt('Inserisci un numero'));
        // console.log(userNumber + ' è il numero inserito dall\'utente');


        if (userNumber % 2 === 0) {
            console.log(userNumber)
            console.log('il numero inserito è pari');
            document.querySelector('#numero-pari').innerHTML = `<span> il numero pari inserito è ${userNumber} </span>`;

        }

        else {
            console.log(userNumber + 1 + ' è il numero pari successivo')
            document.querySelector('#numero-successivo').innerHTML = `<span> il successivo numero pari è ${userNumber + 1} </span>`;

        }

    }

    console.log("exit from while loop");

});    