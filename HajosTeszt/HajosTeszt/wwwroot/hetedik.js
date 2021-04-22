
var kérdések;
var kérdés = 0;
var sorszám = 1;
var jóVálasz;

window.onload = () => {

    document.getElementById("Következő").onclick = () => {
        sorszám++;
        kérdésBetöltés(sorszám);
    }

    document.getElementById("Vissza").onclick = () => {
        sorszám--;
        kérdésBetöltés(sorszám);
    }
}

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

function kérdésMegjelenítése(kérdés) {
    document.getElementById("kérdés_szöveg").innerHTML = kérdés.questionText;
    document.getElementById("válasz1").innerHTML = kérdés.answer1;
    document.getElementById("válasz2").innerHTML = kérdés.answer2;
    document.getElementById("válasz3").innerHTML = kérdés.answer3;
    if (!kérdés.image == "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }
    else {
        document.getElementById("kép1").src = ""
    }
    jóVálasz = kérdés.correctAnswer;
    document.getElementById("válasz1").classList.remove("jó");
    document.getElementById("válasz1").classList.remove("rossz");
    document.getElementById("válasz2").classList.remove("jó");
    document.getElementById("válasz2").classList.remove("rossz");
    document.getElementById("válasz3").classList.remove("jó");
    document.getElementById("válasz3").classList.remove("rossz");
}

function válasz(v) {
    console.log(jóVálasz)
    console.log(v)
    if (v == jóVálasz) {
        document.getElementById("válasz" + v).classList.add("jó")
    }
    else {
        document.getElementById("válasz" + v).classList.add("rossz")
    }
}
