//timer variables

let timerStartTens = 0;
let timerStartOnes = 0;
let timerStartmsHundreds = 0;
let timerStartmsTens = 0;



//digit variables
let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');




// Tens
let timerCountTens = setInterval(() => {
    secondTens.textContent = 1 + timerStartTens;
    timerStartTens +=1;
    if (timerStartTens >= 1) {
        clearInterval(timerCountTens);
        document.getElementById('secondTens').style.color = "red";
        document.getElementById('colon').style.color = "red";

 }
 }, 10000);


// Ones
let timerCountOnes = setInterval(() => {
    secondOnes.textContent = 1 + timerStartOnes;
    timerStartOnes +=1;
    if (timerStartOnes >= 10) {
        clearInterval(timerCountOnes);
        document.getElementById('secondOnes').style.color = "red";
        document.getElementById('secondOnes').textContent = '0';
 }
 }, 1000);


// ms Hundreds
let timerCountmsHundreds = setInterval(() => {
    msHundreds.textContent = 1 + timerStartmsHundreds;
    timerStartmsHundreds +=1;
    if (timerStartmsHundreds >= 9) {
        timerStartmsHundreds = -1;
    }
    if (timerStartOnes >= 10) {
        clearInterval(timerCountmsHundreds);
        document.getElementById('msHundreds').textContent = "0";
        document.getElementById('msHundreds').style.color = "red";
    }
    }, 100);   


// ms Tens
let timerCountmsTens = setInterval(() => {
    msTens.textContent = 1 + timerStartmsTens;
    timerStartmsTens +=1;
    if (timerStartmsTens >= 10) {
        timerStartmsTens= 0;
        document.getElementById('msTens').textContent = 0;
    }
    if (timerStartOnes >= 10) {
        clearInterval(timerCountmsTens);
        document.getElementById('msTens').textContent = "0";
        document.getElementById('msTens').style.color = "red";
    }
    }, 10);   
