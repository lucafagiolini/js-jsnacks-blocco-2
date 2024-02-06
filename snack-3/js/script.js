

document.getElementById('start-game-btn').addEventListener('click', function () {

    const numberList1 = [1, 2, 3, 4, 5];
    console.log(numberList1);
    document.querySelector('#array-1').innerHTML = `<span>${numberList1}</span>`;



    const numberList2 = [3, 5, 6, 7, 3, 8, 1, 4, 5, 6, 7, 4, 5];
    console.log(numberList2);
    document.querySelector('#array-2').innerHTML = `<span>${numberList2}</span>`;

    while (numberList1.length < numberList2.length) {
        numberList1.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log(numberList1);

    document.querySelector('#array-1').innerHTML = `<span>${numberList1}</span>`;
});


