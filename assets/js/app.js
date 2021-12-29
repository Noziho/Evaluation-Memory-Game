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

function getRandom() {
    const random = Math.floor((Math.random() * img.length));
    if (usedRandom.includes(random)) {
        return getRandom();
    }
    usedRandom.push(random);
    return random;
}

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


$('.card').click(function () {

    $('img').animate({
        opacity: "1"
    }, 1000);
})

if ($('#3').attr('src') === $('#5').attr('src')) {
    console.log('bonne condition');
}

