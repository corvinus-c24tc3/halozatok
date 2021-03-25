var kérdések;
var kérdésIndex = 0;

function letöltés() {
    fetch("/questions.json")
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data));
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés");
    console.log(d);
    kérdések = d;

    kérdésIndex = 0;
    kérdésMegjelenítés(kérdések[kérdésIndex]);
}

function kérdésMegjelenítés(kérdés) {

    var kérdésSzöveg = document.getElementById("kérdés_szöveg");
    kérdésSzöveg.innerHTML = kérdés.questionText;

    var válasz1 = document.getElementById("válasz1");
    válasz1.innerHTML = kérdés.answer1;

    var válasz2 = document.getElementById("válasz2");
    válasz2.innerHTML = kérdés.answer2;

    var válasz3 = document.getElementById("válasz3");
    válasz3.innerHTML = kérdés.answer3;

    var kép = document.getElementById("kép1");
    kép.src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;

}

function vissza() {
    if (kérdésIndex == 0) {
        kérdésIndex = kérdések.length-1;
    } else {
        kérdésIndex--;
    }
    kérdésMegjelenítés(kérdések[kérdésIndex]);
}

function előre() {
    if (kérdésIndex == kérdések.length-1) {
        kérdésIndex = 0;
    } else {
        kérdésIndex++;
    }
    kérdésMegjelenítés(kérdések[kérdésIndex]);
}

function clickEseményadás() {
    document.getElementById("vissza").addEventListener("click", vissza);
    document.getElementById("előre").addEventListener("click", vissza);
}

window.onload = () => {
    letöltés();
    clickEseményadás();
}