// generiamo un numero casuale da 1 a 100

document.querySelector('#number-generator-btn').addEventListener('click', function () {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(secretNumber);



});




