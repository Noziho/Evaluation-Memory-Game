let img = [
    "/assets/img/armin.jpg",
    "/assets/img/eren.jpg",
    "/assets/img/mikasa.jpeg",
    "/assets/img/livai.jpg",
    "/assets/img/lattaque-des-titans-photo-1359464.jpeg",
    "/assets/img/Titan_Colossal_anim .webp",
];

let img2 = [
    "/assets/img/armin.jpg",
    "/assets/img/eren.jpg",
    "/assets/img/mikasa.jpeg",
    "/assets/img/livai.jpg",
    "/assets/img/lattaque-des-titans-photo-1359464.jpeg",
    "/assets/img/Titan_Colossal_anim .webp",
];

let idCounter = 1;
let counterIdDiv = 0;
const containerCard = document.getElementById('containerCard');
let usedRandom = [];
let usedRandom2 = [];


//a function for get a random for first table.
function getRandom() {
    const random = Math.floor((Math.random() * img.length));
    if (usedRandom.includes(random)) {
        return getRandom();
    }
    usedRandom.push(random);
    return random;
}

//a function for get a random for second table.
function getRandom2() {
    const random = Math.floor((Math.random() * img2.length));
    if (usedRandom2.includes(random)) {
        return getRandom2();
    }
    usedRandom2.push(random);
    return random;
}

// a loop that displays an image of the table only once, the two loops allow to display a maximum of twice each image
for (let image of img) {

    counterIdDiv += 2;
    let divCard = document.createElement('div');
    divCard.classList = 'card';
    divCard.id = counterIdDiv.toString();

    idCounter += 2;
    let imgCard = document.createElement('img');
    imgCard.id = idCounter.toString();
    imgCard.setAttribute('src', img[getRandom()]);
    imgCard.style.width = '100%';
    imgCard.classList = "hide";

    divCard.appendChild(imgCard);
    containerCard.appendChild(divCard);
}

//a loop that displays an image of the table only once
for (let image of img2) {

    counterIdDiv += 2;
    let divCard = document.createElement('div');
    divCard.classList = 'card';
    divCard.id = counterIdDiv.toString();

    idCounter += 2;
    let imgCard = document.createElement('img');
    imgCard.id = idCounter.toString();
    imgCard.setAttribute('src', img[getRandom2()]);
    imgCard.style.width = '100%';
    imgCard.classList = "hide";

    divCard.appendChild(imgCard);
    containerCard.appendChild(divCard);
}
function printImg () {
    $('#2').click(function () {
        let num1 = $('#3');
        num1.addClass('show');

    });

    $('#4').click(function () {
        let num2 = $('#5');
        num2.addClass('show');
    });

    $('#6').click(function () {
        let num3 = $('#7');
        num3.addClass('show');
    });

    $('#8').click(function () {
        let num4 = $('#9');
        num4.addClass('show');
    });

    $('#10').click(function () {
        let num5 = $('#11');
        num5.addClass('show');
    });

    $('#12').click(function () {
        let num5= $('#13');
        num5.addClass('show');
    });

    $('#14').click(function () {
        let num11 = $ ('#15');
        num11.addClass('show');
    });

    $('#16').click(function () {
        let num12 = $('#17');
        num12.addClass('show');
    });

    $('#18').click(function () {
        let num13 = $('#19');
        num13.addClass('show');
    });

    $('#20').click(function () {
        let num14 = $('#21');
        num14.addClass('show');
    });

    $('#22').click(function () {
        let num15 = $('#23');
        num15.addClass('show');
    });

    $('#24').click(function () {
        let num16= $('#25');
        num16.addClass('show');
    });
}

printImg();
