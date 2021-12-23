let img = ["/assets/img/armin.jpg", "/assets/img/eren.jpg", "/assets/img/mikasa.jpeg", "/assets/img/livai.jpg"];
let counter = 12;
let idCounter = 1;
let counterIdDiv = 0;
const containerCard = document.getElementById('containerCard');

for (let i = 0; i < counter; i++) {
    const random = Math.floor((Math.random() * img.length))
    counterIdDiv ++;

    let divCard = document.createElement('div');
    divCard.classList = 'card';
    divCard.id = counterIdDiv.toString();

    idCounter ++
    let imgCard = document.createElement('img');
    imgCard.id = idCounter.toString();
    imgCard.setAttribute('src', img[random]);
    imgCard.style.width = '100%';
    imgCard.style.opacity = "0";

    divCard.appendChild(imgCard);

    containerCard.appendChild(divCard);

}

const card = $('#1.card').click(() => $('#2').css('opacity', '1'));






