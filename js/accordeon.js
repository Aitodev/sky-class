const card1 = document.querySelector("#active1");
const card2 = document.querySelector("#active2");
const card3 = document.querySelector("#active3");
const card4 = document.querySelector("#active4");
const card5 = document.querySelector("#active5");
const card6 = document.querySelector("#active6");
const card7 = document.querySelector("#active7");
const card8 = document.querySelector("#active8");


const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");
const text4 = document.querySelector("#text4");
const text5 = document.querySelector("#text5");
const text6 = document.querySelector("#text6");
const text7 = document.querySelector("#text7");
const text8 = document.querySelector("#text8");




function firstTxt() {
	text1.classList.toggle("display-block");
}

card1.addEventListener('click', firstTxt);

function secondTxt() {
	text2.classList.toggle("display-block");
}

card2.addEventListener('click', secondTxt);

function thirdTxt() {
	text3.classList.toggle("display-block");
}

card3.addEventListener('click', thirdTxt);


function ttTxt() {
	text4.classList.toggle("display-block");
}

card4.addEventListener('click', ttTxt);


function fiveTxt() {
	text5.classList.toggle("display-block");
}

card5.addEventListener('click', fiveTxt);

function sixTxt() {
	text6.classList.toggle("display-block");
}

card6.addEventListener('click', sixTxt);

function sevenTxt() {
	text7.classList.toggle("display-block");
}

card7.addEventListener('click', sevenTxt);


function nightTxt() {
	text8.classList.toggle("display-block");
}

card8.addEventListener('click', nightTxt);