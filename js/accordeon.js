const card1 = document.querySelector("#active1");
const card2 = document.querySelector("#active2");
const card3 = document.querySelector("#active3");

const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");

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