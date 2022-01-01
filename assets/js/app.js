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

function check () {
    let num3 = document.getElementById('3');
    let num5 = document.getElementById('5');
    let num7 = document.getElementById('7');
    let num9 = document.getElementById('9');
    let num11 = document.getElementById('11');
    let num13 = document.getElementById('13');
    let num15 = document.getElementById('15');
    let num17 = document.getElementById('17');
    let num19 = document.getElementById('19');
    let num21 = document.getElementById('21');
    let num23 = document.getElementById('23');
    let num25 = document.getElementById('25');

    if (num3.className === "show" && num15.className === "show" && num3.src === num15.src
        || num3.className === "show" && num17.className === "show" && num3.src === num17.src
        || num3.className === "show" && num19.className === "show" && num3.src === num19.src
        || num3.className === "show" && num21.className === "show" && num3.src === num21.src
        || num3.className === "show" && num23.className === "show" && num3.src === num23.src
        || num3.className === "show" && num25.className === "show" && num3.src === num25.src) {
        console.log("AXAXAXAXAXAXA")
    }
    else {

        num3.classList.remove('show');
        setTimeout(function () {
            num3.classList = 'hide';
        },1000);
    }

    if (num5.className === "show" && num15.className === "show" && num5.src === num15.src
        || num5.className === "show" && num17.className === "show" && num5.src === num17.src
        || num5.className === "show" && num19.className === "show" && num5.src === num19.src
        || num5.className === "show" && num21.className === "show" && num5.src === num21.src
        || num5.className === "show" && num23.className === "show" && num5.src === num23.src
        || num5.className === "show" && num25.className === "show" && num5.src === num25.src) {
        console.log("AXAXAXAXAXAXA")
    }
    else {

        num5.classList.remove('show');
        setTimeout(function () {
            num5.classList = 'hide';
        },1000);
    }

    if (num7.className === "show" && num15.className === "show" && num7.src === num15.src
        || num7.className === "show" && num17.className === "show" && num7.src === num17.src
        || num7.className === "show" && num19.className === "show" && num7.src === num19.src
        || num7.className === "show" && num21.className === "show" && num7.src === num21.src
        || num7.className === "show" && num23.className === "show" && num7.src === num23.src
        || num7.className === "show" && num25.className === "show" && num7.src === num25.src) {
        console.log("AXAXAXAXAXAXA")
    }
    else {

        num7.classList.remove('show');
        setTimeout(function () {
            num7.classList = 'hide';
        },1000);
    }

    if (num9.className === "show" && num15.className === "show" && num9.src === num15.src
        || num9.className === "show" && num17.className === "show" && num9.src === num17.src
        || num9.className === "show" && num19.className === "show" && num9.src === num19.src
        || num9.className === "show" && num21.className === "show" && num9.src === num21.src
        || num9.className === "show" && num23.className === "show" && num9.src === num23.src
        || num9.className === "show" && num25.className === "show" && num9.src === num25.src) {
        console.log("AXAXAXAXAXAXA")
    }
    else {

        num9.classList.remove('show');
        setTimeout(function () {
            num9.classList = 'hide';
        },1000);
    }

    if (num11.className === "show" && num15.className === "show" && num11.src === num15.src
        || num11.className === "show" && num17.className === "show" && num11.src === num17.src
        || num11.className === "show" && num19.className === "show" && num11.src === num19.src
        || num11.className === "show" && num21.className === "show" && num11.src === num21.src
        || num11.className === "show" && num23.className === "show" && num11.src === num23.src
        || num11.className === "show" && num25.className === "show" && num11.src === num25.src) {
        console.log("AXAXAXAXAXAXA")
    }
    else {

        num11.classList.remove('show');
        setTimeout(function () {
            num11.classList = 'hide';
        },1000);
    }

    if (num13.className === "show" && num15.className === "show" && num13.src === num15.src
        || num13.className === "show" && num17.className === "show" && num13.src === num17.src
        || num13.className === "show" && num19.className === "show" && num13.src === num19.src
        || num13.className === "show" && num21.className === "show" && num13.src === num21.src
        || num13.className === "show" && num23.className === "show" && num13.src === num23.src
        || num13.className === "show" && num25.className === "show" && num13.src === num25.src) {
        console.log("AXAXAXAXAXAXA")
    }
    else {

        num13.classList.remove('show');
        setTimeout(function () {
            num13.classList = 'hide';
        },1000);
    }

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
        let num3 = document.getElementById('3');
        num3.classList = "show";
        console.log(num3.classList);
        num3.classList.remove('hide');
        check();

    });

    $('#4').click(function () {
        let num5 = document.getElementById('5');
        num5.classList = "show";
        console.log(num5.classList);
        num5.classList.remove('hide');
        check();
    });

    $('#6').click(function () {
        let num7 = document.getElementById('7');
        num7.classList = "show";
        console.log(num7.classList);
        num7.classList.remove('hide');
        check();
    });

    $('#8').click(function () {
        let num9 = document.getElementById('9');
        num9.classList = "show";
        console.log(num9.classList);
        num9.classList.remove('hide');
        check();

    });

    $('#10').click(function () {
        let num11 = document.getElementById('11');
        num11.classList = "show";
        console.log(num11.classList);
        num11.classList.remove('hide');
        check();

    });

    $('#12').click(function () {
        let num13 = document.getElementById('13');
        num13.classList = "show";
        console.log(num13.classList);
        num13.classList.remove('hide');
        check();

    });

    $('#14').click(function () {
        let num15 = document.getElementById('15');
        num15.classList = "show";
        console.log(num15.classList);
        num15.classList.remove('hide');
        check();
    });

    $('#16').click(function () {
        let num17 = document.getElementById('17');
        num17.classList = "show";
        console.log(num17.classList);
        num17.classList.remove('hide');
        check();
    });

    $('#18').click(function () {
        let num19 = document.getElementById('19');
        num19.classList = "show";
        console.log(num19.classList);
        num19.classList.remove('hide');
        check();
    });

    $('#20').click(function () {
        let num21 = document.getElementById('21');
        num21.classList = "show";
        console.log(num21.classList);
        num21.classList.remove('hide');
        check();
    });

    $('#22').click(function () {
        let num23 = document.getElementById('23');
        num23.classList = "show";
        console.log(num23.classList);
        num23.classList.remove('hide');
        check();
    });

    $('#24').click(function () {
        let num25 = document.getElementById('25');
        num25.classList = "show";
        console.log(num25.classList);
        num25.classList.remove('hide');
        check();
    });

}


printImg();
