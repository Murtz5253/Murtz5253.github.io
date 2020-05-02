document.body.onload = function(){
  document.body.style.display = "block"
};



/* Typing Animation */

new TypeIt("#description", {
  //strings: "This is my string!",
  speed: 30,
  loop: false,
  startDelay: 1500,
  cursor: false
}).go();

new TypeIt("#about-me", {
  //strings: "This is my string!",
  speed: 30,
  loop: false,
  startDelay: 3800,
  cursor: false
}).go();

/* From website please source
let mainNav = document.getElementsByClassName('links')[0];
let navBarToggle = document.getElementsByClassName('navbar-toggle')[0];

navBarToggle.onclick =  function() {

  if (window.matchMedia("(max-width: 800px)")) {

    mainNav.style.flexDirection = "column";
    mainNav.style.justifyContents = "flex-start";

    if (mainNav.style.display === "none") {
      mainNav.style.display = "flex";
    } else {
      mainNav.style.display = "none";
    }


  }

    
    

};

*/





