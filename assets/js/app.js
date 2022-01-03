let img = [
    "/assets/img/armin.jpg",
    "/assets/img/eren.jpg",
    "/assets/img/mikasa.jpeg",
    "/assets/img/livai.jpg",
    "/assets/img/lattaque-des-titans-photo-1359464.jpeg",
    "/assets/img/Titan_Colossal_anim .webp",
    "/assets/img/armin.jpg",
    "/assets/img/eren.jpg",
    "/assets/img/mikasa.jpeg",
    "/assets/img/livai.jpg",
    "/assets/img/lattaque-des-titans-photo-1359464.jpeg",
    "/assets/img/Titan_Colossal_anim .webp",
];

const containerCard = document.getElementById('containerCard');
let imgId = 0;
let usedRandom = [];
let clickedImg = [];
let clickedImgId = [];
let score = 0;


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


function check () {
    if (clickedImg.length === 2) {
        if (clickedImg[0] === clickedImg[1]) {
            score ++;
            console.log(score);
            clickedImgId = [];
        }

        else {
            console.log("no match");
            setTimeout(function () {
                document.getElementById(clickedImgId[0]).classList = "hide";
                document.getElementById(clickedImgId[1]).classList = "hide";
                clickedImgId = [];
            }, 500);

        }
        clickedImg = [];
    }

    if (score === img.length/2) {
        setTimeout(function () {
            window.location.assign('score.html');
        },1000)
        localStorage.setItem('score', score.toString());
        console.log("win");
    }
}


// a loop that displays an image of the table only once
for (let image of img) {

    let random = getRandom();
    let imgCard = document.createElement('img');
    let divCard = document.createElement('div');
    imgCard.setAttribute('src', img[random]);
    imgCard.style.width = '100%';
    imgCard.classList = "hide";
    imgCard.id = `img${imgId}`;
    imgId++;

    divCard.classList = 'card';

    divCard.addEventListener('click', function () {
        imgCard.classList = "show";
        clickedImg.push(img[random]);
        clickedImgId.push(imgCard.id);
        console.log(clickedImgId);
        check();
    })

    divCard.appendChild(imgCard);
    containerCard.appendChild(divCard);
}

