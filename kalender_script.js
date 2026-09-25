const monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

const wochentage = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag"
];

let monat = 7;
let jahr = 2026;

const jahretitel = document.querySelector("#jahr");
const monattitel = document.querySelector("#monat");
const tabelle = document.querySelector("#kalender");
const jahrZurueck = document.querySelector("#jahrZurueck");
const jahrVor = document.querySelector("#jahrVor");
const monatZurueck = document.querySelector("#monatZurueck");
const monatVor = document.querySelector("#monatVor");

function kalenderErstellen() {

    tabelle.innerHTML = "";

    jahretitel.textContent = "Kalender " + jahr;
    monattitel.textContent = monate[monat] + " " + (monat + 1);
    document.title = "Kalender " + monate[monat] + " " + jahr;

    const kopfzeile = tabelle.insertRow();

    for (let i = 0; i < wochentage.length; i++) {

        const zelle = document.createElement("th");
        zelle.textContent = wochentage[i];
        kopfzeile.appendChild(zelle);

        if (i === 5) {
            zelle.classList.add("Samstag");
        }

        if (i === 6) {
            zelle.classList.add("Sonntag");
        }
    }

    const tage = new Date(jahr, monat + 1, 0).getDate();

    let ersterTag = new Date(jahr, monat, 1).getDay();

    if (ersterTag === 0) {
        ersterTag = 7;
    }

    const heute = new Date();

    let zeile = tabelle.insertRow();

    for (let i = 1; i < ersterTag; i++) {
        zeile.insertCell();
    }

    for (let tag = 1; tag <= tage; tag++) {

        if (zeile.cells.length === 7) {
            zeile = tabelle.insertRow();
        }

        const zelle = zeile.insertCell();
        zelle.textContent = tag;

        const wochentag = (ersterTag + tag - 2) % 7 + 1;

        if (wochentag === 6) {
            zelle.classList.add("Samstag");
        }

        if (wochentag === 7) {
            zelle.classList.add("Sonntag");
        }

        if (
            tag === heute.getDate() &&
            monat === heute.getMonth() &&
            jahr === heute.getFullYear()
        ) {
            zelle.classList.add("Heute");
        }
    }
}

jahrZurueck.addEventListener("click", function () {
    jahr--;
    kalenderErstellen();
});

jahrVor.addEventListener("click", function () {
    jahr++;
    kalenderErstellen();
});

monatZurueck.addEventListener("click", function () {
    monat--;

    if (monat < 0) {
        monat = 11;
        jahr--;
    }

    kalenderErstellen();
});

monatVor.addEventListener("click", function () {
    monat++;

    if (monat > 11) {
        monat = 0;
        jahr++;
    }

    kalenderErstellen();
});

kalenderErstellen();