var kérdések;
var kérdésIndex = 0;

var válaszElem1;
var válaszElem2;
var válaszElem3;

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

    válaszElem1.innerHTML = kérdés.answer1;
    válaszElem2.innerHTML = kérdés.answer2;
    válaszElem3.innerHTML = kérdés.answer3;

    var kép = document.getElementById("kép1");
    kép.src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;

}

function vissza() {
    válaszVisszaállítása();
    if (kérdésIndex == 0) {
        kérdésIndex = kérdések.length-1;
    } else {
        kérdésIndex--;
    }
    kérdésMegjelenítés(kérdések[kérdésIndex]);
}

function előre() {
    válaszVisszaállítása();
    if (kérdésIndex == kérdések.length-1) {
        kérdésIndex = 0;
    } else {
        kérdésIndex++;
    }
    kérdésMegjelenítés(kérdések[kérdésIndex]);
}

function válasz1Katt() {
    válaszKatt("válasz1", 1);
}

function válasz2Katt() {
    válaszKatt("válasz2", 2);
}

function válasz3Katt() {
    válaszKatt("válasz3", 3);
}

function válaszKatt(válaszId, válaszIndex) {
    var válaszElem = document.getElementById(válaszId);
    if (kérdések[kérdésIndex].correctAnswer == válaszIndex) {
        válaszElem.classList.add("jó");
    } else {
        válaszElem.classList.add("rossz");
    }
    válaszElem.classList.remove("kattintható");
}

function válaszVisszaállítása() {
    válaszElem1.classList.remove("jó");
    válaszElem1.classList.remove("rossz");
    válaszElem1.classList.add("kattintható");
    válaszElem2.classList.remove("jó");
    válaszElem2.classList.remove("rossz");
    válaszElem2.classList.add("kattintható");
    válaszElem3.classList.remove("jó");
    válaszElem3.classList.remove("rossz");
    válaszElem3.classList.add("kattintható");
}

function clickEseményadás() {
    válaszElem1 = document.getElementById("válasz1");
    válaszElem2 = document.getElementById("válasz2");
    válaszElem3 = document.getElementById("válasz3");

    document.getElementById("vissza").onclick = vissza;
    document.getElementById("előre").onclick = előre;
    válaszElem1.onclick = válasz1Katt;
    válaszElem2.onclick = válasz2Katt;
    válaszElem3.onclick = válasz3Katt;
}

window.onload = () => {
    letöltés();
    clickEseményadás();
}