//Declarationen der Variablen
    //vergiss nicht: monaten in JavaScript = 0-11
    //vergiss nicht: Tage in JavaScript = Sonntag = 0, Montag = 1, Dienstag = 2, Mittwoch = 3, Donnerstag = 4, Freitag = 5, Samstag = 6
    const heute = new Date();
    console.log(heute);
    //die posicion des wochentage is von 0-6. sonntag is 0 und montag is 1. % ist die reste.
    console.log((heute.getDay() + 6) % 7);
    console.log(heute.getMonth() + 1);
    console.log(heute.getDate("Brot"));
//Java Script Code
    const wochentage = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag"
    ];

//Sandbox Testing
    console.log("JavaScript funciona");
    console.log("probando, testing");
    let username = "Justus";
    console.log("was geht ab " + username);

    //2 types of variables mit mehr als einem Wert

        //Array Testing (liste)
            let person = [ "Justus", 24, true ];
            console.log(person[0]);
            console.log(person[1]);
            console.log(person[2]);

        //Object Testing
            let person2 = {
                name: "Federico",
                alter: 24,
                istStudent: true
            };
            console.log(person2.name);
            console.log(person2.alter);
            console.log(person2.istStudent);

    //vergiss nicht die jahr zurückzusetzen, sonst wird es nicht richtig angezeigt
    document.getElementsByClassName("beispiel1")[0].textContent = "bombe";
    document.getElementsByClassName("beispiel1")[1].textContent = "bombe";
    document.getElementById("monat").textContent = "Oktober";

    let jahr = document.getElementsByClassName("jahr");

    jahr.textContent = "2027";