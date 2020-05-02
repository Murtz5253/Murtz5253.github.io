document.body.onload = function(){
  document.body.style.display = "block"
};

function hide(ID) {
	let curr = document.getElementById(ID);
	//curr.style.display = "none";
	curr.style.opacity = 0;
}

function show(ID) {
	let curr = document.getElementById(ID);
	// curr.classList.remove("hidden");
	curr.style.opacity = 1;
	curr.style.display = "block";
}



let cover = document.getElementById("background");
cover.onmouseover = function() {

	//hide("cover");
	//hide("background");
	hide("covid-pic");
	hide("covid-description");
	show("detail1");

}

cover.onmouseout = function() {

	//show("cover");
	//hide("background");
	show("covid-pic");
	show("covid-description");
	hide("detail1");

}

let cover2 = document.getElementById("background2");
cover2.onmouseover = function() {

	//hide("cover2");
	//hide("background");
	hide("munt-pic");
	hide("munt-description");
	show("detail2");

}

cover2.onmouseout = function() {

	//show("cover2");
	//hide("background");
	show("munt-pic");
	show("munt-description");
	hide("detail2");

}

function munt() {
  window.open("munt.pdf");
}

function kaggle() {
  window.open("https://www.kaggle.com/murtz786/covid-19-risk-factor-eda");
}

document.getElementById("background").onclick = kaggle;
document.getElementById("background2").onclick = munt;