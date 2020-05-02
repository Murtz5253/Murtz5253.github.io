/* Width of each carousel image, in pixels */
/* Source: UC Berkeley Web Design Decal Lab 10 */


/* CODE BELOW IS FOR SLIDESHOW WHICH I GOT RID OF
let carouselWidth = screen.width * .28; 


let prevButton = document.getElementsByClassName("button-previous");
let nextButton = document.getElementsByClassName("button-next");
let imageRow = document.getElementsByClassName("carousel-image-row");
prevButton[0].classList.add("hidden");
prevButton[1].classList.add("hidden");
prevButton[2].classList.add("hidden");

let imageNum0 = 0; // present
let imageNum1 = 0; // past
let imageNum2 = 0; // future

function showNextImage0() {
	// change imageNum
	imageNum0 +=1;

	// update number of pixels from the left
	let dist = imageNum0 * carouselWidth;

	// change css for imageRow

	imageRow[0].style.left = '-' + dist + 'px';

	checkControls();

}

function showNextImage1() {
	// change imageNum
	imageNum1 +=1;

	// update number of pixels from the left
	let dist = imageNum1 * carouselWidth;

	// change css for imageRow

	imageRow[1].style.left = '-' + dist + 'px';

	checkControls();

}

function showNextImage2() {
	// change imageNum
	imageNum2 +=1;

	// update number of pixels from the left
	let dist = imageNum2 * carouselWidth;

	// change css for imageRow

	imageRow[2].style.left = '-' + dist + 'px';

	checkControls();

}



nextButton[0].onclick = showNextImage0;
nextButton[1].onclick = showNextImage1;
nextButton[2].onclick = showNextImage2;


// The showPrevImage function should shift the image row to the right 
function showPrevImage0() {
	// change imageNum
	imageNum0 -= 1;

	// update number of pixels from the left
	let dist = imageNum0 * carouselWidth;

	// change css for imageRow

	imageRow[0].style.left = '-' + dist + 'px';

	checkControls();

}

function showPrevImage1() {
	// change imageNum
	imageNum1 -= 1;

	// update number of pixels from the left
	let dist = imageNum1 * carouselWidth;

	// change css for imageRow

	imageRow[1].style.left = '-' + dist + 'px';

	checkControls();

}
function showPrevImage2() {
	// change imageNum
	imageNum2 -= 1;

	// update number of pixels from the left
	let dist = imageNum2 * carouselWidth;

	// change css for imageRow

	imageRow[2].style.left = '-' + dist + 'px';

	checkControls();

}


prevButton[0].onclick = showPrevImage0;
prevButton[1].onclick = showPrevImage1;
prevButton[2].onclick = showPrevImage2;

// Total number of images 
let totalImages0 = 7; //present pics
let totalImages1 = 4; // past pics
let totalImages2 = 7;

function checkControls() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if (document.getElementById("present").style.opacity !== '0') {

		if (imageNum0 === 0) {
		// What should happen if it's the first image?
		prevButton[0].classList.add("hidden");

		}
		else if (prevButton[0].classList.contains("hidden")) {
			// otherwise, what should happen?
			prevButton[0].classList.remove("hidden");
		}
		// This if-statement checks if we're at the last image.
		// In the parentheses below, check what imageNum is equal to.
		if (imageNum0 === totalImages0 - 1) {
			// What should happen it's the last image?
			nextButton[0].classList.add("hidden");
		}
		else if (nextButton[0].classList.contains("hidden")) {
			// otherwise, what should happen?
			nextButton[0].classList.remove("hidden");

		}
	} else if (document.getElementById("past").style.opacity !== '0') {

		if (imageNum1 === 0) {
		// What should happen if it's the first image?
		prevButton[1].classList.add("hidden");

		}
		else if (prevButton[1].classList.contains("hidden")) {
			// otherwise, what should happen?
			prevButton[1].classList.remove("hidden");
		}
		// This if-statement checks if we're at the last image.
		// In the parentheses below, check what imageNum is equal to.
		if (imageNum1 === totalImages1 - 1) {
			// What should happen it's the last image?
			nextButton[1].classList.add("hidden");
		}
		else if (nextButton[1].classList.contains("hidden")) {
			// otherwise, what should happen?
			nextButton[1].classList.remove("hidden");

		}
	} else if (document.getElementById("future").style.opacity !== '0') {

		if (imageNum2 === 0) {
		// What should happen if it's the first image?
		prevButton[2].classList.add("hidden");

		}
		else if (prevButton[2].classList.contains("hidden")) {
			// otherwise, what should happen?
			prevButton[2].classList.remove("hidden");
		}
		// This if-statement checks if we're at the last image.
		// In the parentheses below, check what imageNum is equal to.
		if (imageNum2 === totalImages2 - 1) {
			// What should happen it's the last image?
			nextButton[2].classList.add("hidden");
		}
		else if (nextButton[2].classList.contains("hidden")) {
			// otherwise, what should happen?
			nextButton[2].classList.remove("hidden");

		}

	}
}



*/


document.body.onload = function(){
  document.body.style.display = "block"
};

/* Below is the timeline code */

function hideTime(timeID) {
	let curr = document.getElementById(timeID);
	//curr.style.display = "none";
	curr.style.opacity = 0;
}

function showTime(timeID) {
	let curr = document.getElementById(timeID);
	// curr.classList.remove("hidden");
	curr.style.opacity = 1;
	curr.style.display = "inline";
}

function updateOpacity(timeID) {

	if (timeID === "past") {
		document.getElementById("past-button").style.opacity = 1;
		document.getElementsByClassName("label1")[0].style.opacity = 1;
		document.getElementById("present-button").style.opacity = .65;
		document.getElementsByClassName("label2")[0].style.opacity = .65;
		document.getElementById("future-button").style.opacity = .65;
		document.getElementsByClassName("label3")[0].style.opacity = .65;

	} else if (timeID === "present") {

		document.getElementById("past-button").style.opacity = .65;
		document.getElementsByClassName("label1")[0].style.opacity = .65;
		document.getElementById("present-button").style.opacity = 1;
		document.getElementsByClassName("label2")[0].style.opacity = 1;
		document.getElementById("future-button").style.opacity = .65;
		document.getElementsByClassName("label3")[0].style.opacity = .65;

	} else {

		document.getElementById("past-button").style.opacity = .65;
		document.getElementsByClassName("label1")[0].style.opacity = .65;
		document.getElementById("present-button").style.opacity = .65;
		document.getElementsByClassName("label2")[0].style.opacity = .65;
		document.getElementById("future-button").style.opacity = 1;
		document.getElementsByClassName("label3")[0].style.opacity = 1;

	}
}

let pastButton = document.getElementById("past-button");
pastButton.onclick = function() {

	hideTime("present");
	hideTime("future");
	showTime("past");
	updateOpacity("past");

}

let presentButton = document.getElementById("present-button");
presentButton.onclick = function() {

	hideTime("past");
	hideTime("future");
	showTime("present");
	updateOpacity("present");

}

let futureButton = document.getElementById("future-button");
futureButton.onclick = function() {

	hideTime("present");
	hideTime("past");
	showTime("future");
	updateOpacity("future");

}



  // Original JavaScript code by Chirp Internet: www.chirp.com.au
  // Please acknowledge use of this code by including this header.

window.addEventListener("DOMContentLoaded", function(e) {

	let buttonPast = document.getElementById("past-button");
	let buttonPresent = document.getElementById("present-button");
	let buttonFuture = document.getElementById("future-button");

	var stage = document.getElementsByClassName("carousel-image-row")[0];
	var fadeComplete = function(e) { stage.appendChild(arr[0]); };
	var arr = stage.getElementsByTagName("img");
	for(var i=0; i < arr.length; i++) {
	  arr[i].addEventListener("animationend", fadeComplete, false);
	}

	var stagePast = document.getElementsByClassName("carousel-image-row")[1];
	var fadeComplete = function(e) { stagePast.appendChild(arrPast[0]); };
	var arrPast = stagePast.getElementsByTagName("img");
	for(var i=0; i < arr.length; i++) {
	  arrPast[i].addEventListener("animationend", fadeComplete, false);
	}

}, false);