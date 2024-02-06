// generiamo un numero casuale da 1 a 100

document.querySelector('#check-btn').addEventListener('click', function () {
    let randomNumber;

    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);

    let userNumber;


    do {

        userNumber = parseInt(prompt('Inserisci un numero da 1 a 100'));
        console.log(userNumber);
        console.log(randomNumber);

        if (userNumber > randomNumber) {
            console.log('il numero segreto è più basso');
        }

        else if (userNumber < randomNumber) {
            console.log('il numero segreto è più alto');
        }

    } while (userNumber !== randomNumber);
    console.log('Hai indovinato!');
    console.log(userNumber);
    console.log(randomNumber);

});






