var kérdések;
var kérdésIndex = 0;

var válaszElem1;
var válaszElem2;
var válaszElem3;


function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(kérdésMegjelenítése);
}

function kérdésMegjelenítés(kérdés) {

    var kérdésSzöveg = document.getElementById("kérdés_szöveg");
    kérdésSzöveg.innerHTML = kérdés.questionText;

    válaszElem1.innerHTML = kérdés.answer1;
    válaszElem2.innerHTML = kérdés.answer2;
    válaszElem3.innerHTML = kérdés.answer3;

    if (!kérdés.image == "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }
    else {
        document.getElementById("kép1").src = ""
    }

}

window.onload = () => {

    kérdésBetöltés(kérdésIndex);

    document.getElementById("előre").onclick = () => {
        sorszám++;
        kérdésBetöltés(sorszám);
    }

    document.getElementById("vissza").onclick = () => {
        sorszám--;
        kérdésBetöltés(sorszám);
    }
}