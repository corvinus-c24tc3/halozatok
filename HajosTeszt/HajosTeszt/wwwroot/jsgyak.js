let elsoFeladatDiv = document.getElementById("elsoFeladat");

var faktoriálisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktoriálisR(n - 1);
    }
}

window.onload = () => {
    // első feladat
    for (let i = 2; i < 12; i++) {
        elsoFeladatDiv.innerHTML += '<div id="szam' + i + '">' + i + '</div>';
        let szamDiv = document.getElementById('szam' + i);
        szamDiv.style.backgroundColor = 'rgb(' + (255 / i * 1.8) + ',' + (255 / i * 1.8) + ',' + (255 / i * 1.8) + ')';
    }

    // második feladat
    let lerak = document.getElementById("pascal");
    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        sor.classList.add("sor");
        lerak.appendChild(sor);

        for (var o = 0; o <= s; o++) {
            let szám = document.createElement("div");
            szám.classList.add("elem");
            szám.innerText = faktoriálisR(s) / (faktoriálisR(o) * faktoriálisR(s - o));
            sor.appendChild(szám);
        }
    }
}