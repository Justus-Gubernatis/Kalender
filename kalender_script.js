//daten und info für kalender

const monate = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
];

const wochentage = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
const heute = new Date();
let jahr = heute.getFullYear();
let monat = heute.getMonth();


// KALENDER ESRSTELLEN

function kalenderErstellen()
    const tabelle = document.getElementById("kalender");
    tabelle.innerHTML = ""; // entfernt die info von Vor

    document.getElementById("jahr").textContent = jahr;
    document.getElementById("monat").textContent = monate[monat];
    

// BUTTONS
document.getElementById("jahrZurück").addEventListener("click", function () {
    jahr--;
    kalenderErstellen();
});

document.getElementById("jahrVor").addEventListener("click", function () {
    jahr++;
    kalenderErstellen();
});

document.getElementById("monatZurück").addEventListener("click", function () {
    monat--;
    if (monat < 0) { monat = 11; jahr--; }
    kalenderErstellen();
});

document.getElementById("monatVor").addEventListener("click", function () {
    monat++;
    if (monat > 11) { monat = 0; jahr++; }
    kalenderErstellen();
});

// PANZERDATEN

const panzerDaten = [
    { name: "Matilda III", land: "Großbritannien", turmpanzerung: "75 / 75 / 75 mm", wannenpanzerung: "75 / 70 / 55 mm", geschwindigkeit: "24 km/h", motorleistung: "190 PS", gewicht: "25,4 t", kaliber: "40 mm", baujahr: "1939", durchschlag: "89 mm", bild: "Bilder/matilda.jpg" },
    { name: "Panzer IV F2", land: "Deutschland", turmpanzerung: "50 / 30 / 30 mm", wannenpanzerung: "50 / 30 / 20 mm", geschwindigkeit: "43 km/h", motorleistung: "300 PS", gewicht: "22,3 t", kaliber: "75 mm", baujahr: "1942", durchschlag: "163 mm", bild: "Bilder/panzer41.jpg" },
    { name: "T-34-85 (D-5T)", land: "Sowjetunion", turmpanzerung: "54 / 54 / 54 mm", wannenpanzerung: "45 / 45 / 45 mm", geschwindigkeit: "55 km/h", motorleistung: "500 PS", gewicht: "32 t", kaliber: "85 mm", baujahr: "1944", durchschlag: "148 mm", bild: "Bilder/t3485.jpg" },
    { name: "M4 Sherman", land: "USA", turmpanzerung: "76 / 50 / 50 mm", wannenpanzerung: "50 / 38 / 38 mm", geschwindigkeit: "39 km/h", motorleistung: "400 PS", gewicht: "30,6 t", kaliber: "75 mm", baujahr: "1942", durchschlag: "104 mm", bild: "Bilder/m4_sherman.jpg" },
    { name: "Panther A", land: "Deutschland", turmpanzerung: "100 / 45 / 45 mm", wannenpanzerung: "80 / 40 / 40 mm", geschwindigkeit: "46 km/h", motorleistung: "600 PS", gewicht: "45,3 t", kaliber: "75 mm", baujahr: "1943", durchschlag: "228 mm", bild: "Bilder/panther2.webp" },
    { name: "Churchill I", land: "Großbritannien", turmpanzerung: "102 / 89 / 89 mm", wannenpanzerung: "89 / 64 / 51 mm", geschwindigkeit: "28 km/h", motorleistung: "355 PS", gewicht: "37,8 t", kaliber: "40 mm", baujahr: "1941", durchschlag: "89 mm", bild: "Bilder/churchil2.jpg" },
    { name: "KV-2 (1940)", land: "Sowjetunion", turmpanzerung: "75 / 75 / 75 mm", wannenpanzerung: "75 / 75 / 70 mm", geschwindigkeit: "34 km/h", motorleistung: "600 PS", gewicht: "52,4 t", kaliber: "152 mm", baujahr: "1940", durchschlag: "86 mm", bild: "Bilder/kv2.webp" },
    { name: "Tiger H1", land: "Deutschland", turmpanzerung: "100 / 80 / 80 mm", wannenpanzerung: "100 / 80 / 80 mm", geschwindigkeit: "45 km/h", motorleistung: "650 PS", gewicht: "57,3 t", kaliber: "88 mm", baujahr: "1942", durchschlag: "165 mm", bild: "Bilder/tiger12.jpg" },
    { name: "Tiger II (H)", land: "Deutschland", turmpanzerung: "185 / 80 / 80 mm", wannenpanzerung: "150 / 80 / 80 mm", geschwindigkeit: "38 km/h", motorleistung: "600 PS", gewicht: "69,8 t", kaliber: "88 mm", baujahr: "1944", durchschlag: "279 mm", bild: "Bilder/tiger2.jpg" },
    { name: "IS-2 (1943)", land: "Sowjetunion", turmpanzerung: "100 / 100 / 100 mm", wannenpanzerung: "120 / 90 / 60 mm", geschwindigkeit: "37 km/h", motorleistung: "520 PS", gewicht: "46 t", kaliber: "122 mm", baujahr: "1944", durchschlag: "205 mm", bild: "Bilder/is2.jpg" },
    { name: "Strv 103-0", land: "Schweden", turmpanzerung: "0 / 0 / 0 mm", wannenpanzerung: "40 / 30 / 30 mm", geschwindigkeit: "50 km/h", motorleistung: "540 PS", gewicht: "35 t", kaliber: "105 mm", baujahr: "1967", durchschlag: "358 mm", bild: "Bilder/strv_103.webp" },
    { name: "Maus", land: "Deutschland", turmpanzerung: "232 / 205 / 200 mm", wannenpanzerung: "200 / 180 / 160 mm", geschwindigkeit: "21 km/h", motorleistung: "1.200 PS", gewicht: "188 t", kaliber: "128 mm", baujahr: "1944", durchschlag: "312 mm", bild: "Bilder/mausd.jpg" },
    { name: "L3/33 CC", land: "Italien", turmpanzerung: "14 / 14 / 14 mm", wannenpanzerung: "14 / 14 / 8 mm", geschwindigkeit: "42 km/h", motorleistung: "43 PS", gewicht: "3,2 t", kaliber: "20 mm", baujahr: "1933", durchschlag: "38 mm", bild: "" },
    { name: "TOG II", land: "Großbritannien", turmpanzerung: "127 / 89 / 89 mm", wannenpanzerung: "101 / 76 / 19 mm", geschwindigkeit: "14 km/h", motorleistung: "600 PS", gewicht: "77,5 t", kaliber: "94 mm", baujahr: "1941", durchschlag: "204 mm", bild: "" },
    { name: "Archer", land: "Großbritannien", turmpanzerung: "0 / 0 / 0 mm", wannenpanzerung: "20 / 20 / 20 mm", geschwindigkeit: "33 km/h", motorleistung: "195 PS", gewicht: "16,3 t", kaliber: "76 mm", baujahr: "1943", durchschlag: "190 mm", bild: "" },
    { name: "Jagdpanzer 38(t)", land: "Deutschland", turmpanzerung: "0 / 0 / 0 mm", wannenpanzerung: "60 / 20 / 20 mm", geschwindigkeit: "40 km/h", motorleistung: "150 PS", gewicht: "16 t", kaliber: "75 mm", baujahr: "1944", durchschlag: "182 mm", bild: "" },
    { name: "Char 2C", land: "Frankreich", turmpanzerung: "35 / 35 / 35 mm", wannenpanzerung: "45 / 22 / 22 mm", geschwindigkeit: "15 km/h", motorleistung: "500 PS", gewicht: "70 t", kaliber: "75 mm", baujahr: "1928", durchschlag: "66 mm", bild: "" },
    { name: "Sturmtiger", land: "Deutschland", turmpanzerung: "150 / 80 / 80 mm", wannenpanzerung: "100 / 80 / 80 mm", geschwindigkeit: "40 km/h", motorleistung: "700 PS", gewicht: "65 t", kaliber: "380 mm", baujahr: "1944", durchschlag: "82 mm", bild: "Bilder/sturmtigor.png" },
    { name: "T28", land: "USA", turmpanzerung: "305 / 63 / 50 mm", wannenpanzerung: "305 / 50 / 50 mm", geschwindigkeit: "13 km/h", motorleistung: "500 PS", gewicht: "59,4 t", kaliber: "105 mm", baujahr: "1945", durchschlag: "292 mm", bild: "" },
    { name: "O-I", land: "Japan", turmpanzerung: "-", wannenpanzerung: "-", geschwindigkeit: "-", motorleistung: "-", gewicht: "-", kaliber: "-", baujahr: "-", durchschlag: "-", bild: "" },
    { name: "Calliope", land: "USA", turmpanzerung: "76 / 50 / 50 mm", wannenpanzerung: "50 / 38 / 38 mm", geschwindigkeit: "39 km/h", motorleistung: "400 PS", gewicht: "30,6 t", kaliber: "75 mm", baujahr: "1944", durchschlag: "104 mm", bild: "" },
    { name: "Sturer Emil", land: "Deutschland", turmpanzerung: "50 / 30 / 20 mm", wannenpanzerung: "50 / 20 / 10 mm", geschwindigkeit: "25 km/h", motorleistung: "310 PS", gewicht: "36,5 t", kaliber: "128 mm", baujahr: "1942", durchschlag: "248 mm", bild: "" },
    { name: "BT-42", land: "Finnland", turmpanzerung: "16 / 16 / 16 mm", wannenpanzerung: "20 / 15 / 13 mm", geschwindigkeit: "54 km/h", motorleistung: "400 PS", gewicht: "15 t", kaliber: "114 mm", baujahr: "1943", durchschlag: "115 mm", bild: "Bilder/bt42.jpg" },
    { name: "SU-100Y", land: "Sowjetunion", turmpanzerung: "0 / 0 / 0 mm", wannenpanzerung: "60 / 60 / 60 mm", geschwindigkeit: "32 km/h", motorleistung: "850 PS", gewicht: "64 t", kaliber: "130 mm", baujahr: "1940", durchschlag: "202 mm", bild: "Bilder/su100y.jpg" },
    { name: "Karl-Gerät", land: "Deutschland", turmpanzerung: "-", wannenpanzerung: "-", geschwindigkeit: "-", motorleistung: "-", gewicht: "-", kaliber: "-", baujahr: "1941", durchschlag: "-", bild: "" }
];

let aktuellerPanzer = 0;// dinamik der panzer anzeige, damit die panzer wechseln kann

// PANZERBILD UND INFO DATEN ANZEIGEN

function panzerAnzeigen() {
    const panzer = panzerDaten[aktuellerPanzer];
    const panzerFoto = document.getElementById("panzerBild");
    const bildHinweis = document.getElementById("bildPlatzhalter");

    document.getElementById("panzerName").textContent = panzer.name;
    document.getElementById("land").textContent = panzer.land;
    document.getElementById("turmPanzerung").textContent = panzer.turmpanzerung;
    document.getElementById("wannenPanzerung").textContent = panzer.wannenpanzerung;
    document.getElementById("geschwindigkeit").textContent = panzer.geschwindigkeit;
    document.getElementById("motorleistung").textContent = panzer.motorleistung;
    document.getElementById("gewicht").textContent = panzer.gewicht;
    document.getElementById("kaliber").textContent = panzer.kaliber;
    document.getElementById("baujahr").textContent = panzer.baujahr;
    document.getElementById("durchschlag").textContent = panzer.durchschlag;

    if (panzer.bild === "") { //wenn die bilder leer ist, es wird ein error angezeigt
        panzerFoto.hidden = true;
        bildHinweis.hidden = false;
        bildHinweis.textContent = "KEINE BILD DATEN.";
    } else
        panzerFoto.hidden = false;
        bildHinweis.hidden = true;
        panzerFoto.src = panzer.bild;
        panzerFoto.alt = panzer.name;
    }
}

document.getElementById("panzerZurück").addEventListener("click", function () {
    aktuellerPanzer--;
    if (aktuellerPanzer < 0) aktuellerPanzer = panzerDaten.length - 1;
    panzerAnzeigen();
});

document.getElementById("panzerVor").addEventListener("click", function () {
    aktuellerPanzer++;
    if (aktuellerPanzer >= panzerDaten.length) aktuellerPanzer = 0;
    panzerAnzeigen();
});

// Wenn Kein bild, oder fehlt error anzeige.
document.getElementById("panzerBild").addEventListener("error", function () {
    this.hidden = true;
    document.getElementById("bildPlatzhalter").hidden = false;
    document.getElementById("bildPlatzhalter").textContent = "KEINE BILD DATEN.";
});

// zeigt dern kalender und panzer an.
kalenderErstellen();
panzerAnzeigen();