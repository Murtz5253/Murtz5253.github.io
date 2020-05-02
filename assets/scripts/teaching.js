document.body.onload = function(){
  document.body.style.display = "block"
};

function recursion() {
  window.open("recursion.pdf");
}

function count() {
  window.open("count.pdf");
}

document.getElementById("background").onclick = recursion;
document.getElementById("background2").onclick = count;