//get the info Time from PC

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear(); //line 19


//Name des Monats in deutscher Sprache (Tool)

const monthName = new Intl.DateTimeFormat('de-DE', { month: 'long' }).format(today);//line 15


//Select Class in HTML and put the time from PC
document.querySelectorAll(".monat").forEach(element => {
    element.textContent = monthName;
});

document.querySelectorAll(".jahr").forEach(element => {
    element.textContent = year;
});


console.log({today, day, month, year});




// Calculation of the first and last days of the month. Remember : JS beginnt with Sonntag 0 -> Samstag 6
//ENCONTRAR EL PRIMER Y ULTIMO DIA DEL MES

const firstDay = new Date(year, month - 1, 1); //line 49 //ESTO ES EL !PRIMER NUMERO DEL MES!

const firstWeekday = (firstDay.getDay() + 6) % 7; //ESTO ES EL !NOMBRE DEL DIA! (SONNTAG) del primer dia de la semana


const lastDay = new Date(year, month, 0); //line 54
// 0 represents the last day of the previous month.

const lastWeekday = (lastDay.getDay() + 6) % 7;

console.log({firstDay, firstWeekday, lastDay, lastWeekday});







const calendarStart = new Date(firstDay); //COPIA DEL FIRST DAY //ESTO SIRVE PARA DEFINIR LOS LIMITES

calendarStart.setDate(firstDay.getDate() - firstWeekday);// OPERACION DE RESTA PARA OBTENR

const calendarEnd = new Date(lastDay);//COPIA DEL LAST DAY //ESTO SIRVE PARA DEFINIR LOS LIMITES

calendarEnd.setDate(lastDay.getDate() + (6 - lastWeekday));
// Adjust the end to the Sunday of the week containing the last day of the month.

console.log({calendarStart, calendarEnd});





//RELLENO DE CELDAS

const cells = document.querySelectorAll("#kalender tr:not(.wochentage) td");//ESTO SELECCIONA LAS CELDAS VACIAS (TR) HTML,EXEPTUANDO CLASSE Wochentage, 

const date = new Date(calendarStart);//FECHA QUE AVANZA PARA RELLENAR LAS CELDAS



//RELLENAR LAS 42 CELDAS

cells.forEach(cell => {

    const dayNumber = date.getDate();//

    //ESTO COMPRUEBA SI PERTENECE AL MES ACTUAL
    const isCurrentMonth =
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === year;

    // ESTO HACE INVISIBLE LOS DIAS QUE NO PERTENECEN AL MES ACTUAL, PERO SE MUESTRAN EN EL CALENDARIO / SI ES isCurrentMonth es verdero, muestra el dia
    cell.textContent = isCurrentMonth ? dayNumber : "";

    // RESALTA EL DIA ACTUAL
    cell.classList.toggle(
        "heute",
        date.getDate() === day && isCurrentMonth
    );

    //AVANZA AL SIGUIENTE DIA
    date.setDate(date.getDate() + 1);
});
