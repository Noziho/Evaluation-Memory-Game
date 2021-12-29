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

let counter = 12;
let idCounter = 1;
let counterIdDiv = 0;
const containerCard = document.getElementById('containerCard');
let usedRandom = [];
let usedRandom2 = [];

//function for display image with an event.
function printImg () {
    $('#2').click(function () {
        let num1 = $('#3');
        num1.addClass('show');
        num1.animate({
            opacity: "1",
        }, 1000);
    });

    $('#4').click(function () {
        let num2 = $('#5');
        num2.addClass('show');
        num2.animate({
            opacity: "1",
        }, 1000);
    });

    $('#6').click(function () {
        $('#7').animate({
            opacity: "1"
        }, 1000);
    });

    $('#8').click(function () {
        $('#9').animate({
            opacity: "1"
        }, 1000);
    });

    $('#10').click(function () {
        $('#11').animate({
            opacity: "1"
        }, 1000);
    });

    $('#12').click(function () {
        $('#13').animate({
            opacity: "1"
        }, 1000);
    });

    $('#14').click(function () {
        $('#15').animate({
            opacity: "1"
        }, 1000);
    });

    $('#16').click(function () {
        $('#17').animate({
            opacity: "1"
        }, 1000);
    });

    $('#18').click(function () {
        $('#19').animate({
            opacity: "1"
        }, 1000);
    });

    $('#20').click(function () {
        $('#21').animate({
            opacity: "1"
        }, 1000);
    });

    $('#22').click(function () {
        $('#23').animate({
            opacity: "1"
        }, 1000);
    });

    $('#24').click(function () {
        $('#25').animate({
            opacity: "1"
        }, 1000);
    });
}



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
    const random = Math.floor((Math.random() * img.length))
    let divCard = document.createElement('div');
    divCard.classList = 'card';
    divCard.id = counterIdDiv.toString();

    idCounter += 2;
    let imgCard = document.createElement('img');
    imgCard.id = idCounter.toString();
    imgCard.setAttribute('src', img[getRandom()]);
    imgCard.style.width = '100%';
    imgCard.style.opacity = "0";

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
    imgCard.style.opacity = "0";

    divCard.appendChild(imgCard);
    containerCard.appendChild(divCard);
}

printImg();

if ($('#3').attr('src') === $('#5').attr('src')) {
    console.log('bonne condition');
}

