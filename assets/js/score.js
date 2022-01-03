let score = localStorage.getItem('score');
document.getElementById('userScore').innerHTML += score + "/6";

document.getElementById("reStart").addEventListener("click", () => {
    window.location.assign('index.html');
})