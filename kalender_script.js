let monate = [
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

// Erstellung eines Arrays mit allen Monaten des Jahres.


let monat = 7;
let jahr = 2026;

// Festlegung des ausgewählten Monats und Jahres.
// Auswahl von August 2026.


let jahretitel = document.querySelector("#jahr");
let monattitel = document.querySelector("#monat");

// Suche der HTML-Elemente mit den IDs "jahr" und "monat".


jahretitel.textContent = "Kalender " + jahr;
monattitel.textContent = monate[monat] + " " + (monat + 1);

// Änderung der Texte der beiden HTML-Elemente.
// Anzeige des ausgewählten Jahres und Monats.


let tage = new Date(jahr, monat + 1, 0).getDate();

// Berechnung der Anzahl der Tage des ausgewählten Monats.


let ersterTag = new Date(jahr, monat, 1).getDay();

// Berechnung des Wochentags des ersten Tages des Monats.


if (ersterTag === 0) {
    ersterTag = 7;
}

// Änderung von Sonntag von 0 auf 7,
// damit die Woche bei Montag beginnt und bei Sonntag endet.


let tabelle = document.querySelector("table");

// Suche der Kalender-Tabelle im HTML.


while (tabelle.rows.length > 1) {
    tabelle.deleteRow(1);
}

// Entfernung der alten Tageszeilen aus dem HTML,
// damit JavaScript die Kalendertage selbst erstellen kann.


let zeile = tabelle.insertRow();

// Erstellung einer neuen Zeile für die Kalendertage.


for (let i = 1; i < ersterTag; i++) {
    zeile.insertCell();
}

// Erstellung leerer Zellen vor dem ersten Tag,
// damit der erste Tag an der richtigen Position steht.


let tag = 1;

// Festlegung des ersten Kalendertages auf 1.


while (tag <= tage) {

    if (zeile.cells.length === 7) {
        zeile = tabelle.insertRow();
    }

    // Erstellung einer neuen Zeile, wenn die aktuelle Zeile bereits 7 Zellen hat.


    let zelle = zeile.insertCell();
    zelle.textContent = tag;

    // Erstellung einer neuen Zelle und Einfügen des aktuellen Tages.


    let wochentag = (ersterTag + tag - 2) % 7 + 1;

    // Berechnung des Wochentags für den aktuellen Tag.


    if (wochentag === 6) {
        zelle.classList.add("Samstag");
    }

    if (wochentag === 7) {
        zelle.classList.add("Sonntag");
    }

    // Hinzufügen der CSS-Klassen für Samstag und Sonntag.


    tag++;

    // Erhöhung der Tagesnummer um 1.
}

.Heute {