let timerStartTens = 0;
let timerCountTens = setInterval(() => {
 document.getElementById('secondTens').textContent = 1 + timerStartTens;
 timerStartTens +=1;
 if (timerStartTens >= 1) {
    clearInterval(timerCountTens);
    document.getElementById('secondTens').style.color = "red";
    document.getElementById('colon').style.color = "red";

 }
 }, 10000);

let timerStartOnes = 0;
let timerCountOnes = setInterval(() => {
 document.getElementById('secondOnes').textContent = 1 + timerStartOnes;
 timerStartOnes +=1;
 if (timerStartOnes >= 10) {
    clearInterval(timerCountOnes);
    document.getElementById('secondOnes').style.color = "red";
    document.getElementById('secondOnes').textContent = '0';
 }
 }, 1000);

let timerStartmsHundreds = 0;
let timerCountmsHundreds = setInterval(() => {
    document.getElementById('msHundreds').textContent = 1 + timerStartmsHundreds;
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

let timerStartmsTens = 0;
let timerCountmsTens = setInterval(() => {
    document.getElementById('msTens').textContent = 1 + timerStartmsTens;
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
