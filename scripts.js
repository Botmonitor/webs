// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= window.innerHeight - 64) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var currentcard = 0;
const maxcards = document.getElementById("carousel").children.length - 1;
var pbutton = document.getElementById("pbutton");
var nbutton = document.getElementById("nbutton");

function nextpage(){
    if(currentcard<maxcards){
        var container = document.getElementById("carousel");
        var card = document.getElementById('carousel-card').offsetWidth;
        card+=parseInt(getComputedStyle(document.getElementById('carousel-card')).marginRight);
        currentcard++;
        container.style.transform = "translateX(-"+(card * currentcard)+"px)";
    }
    if(currentcard == maxcards){
        nbutton.classList.add("deactive");
        pbutton.classList.remove("deactive");
    }
    if(currentcard>0){
        pbutton.classList.remove("deactive");
    }
}

function previouspage(){
    if(currentcard>0){
        var container = document.getElementById("carousel");
        var card = document.getElementById('carousel-card').offsetWidth;
        card+=parseInt(getComputedStyle(document.getElementById('carousel-card')).marginRight);
        currentcard--;
        container.style.transform = "translateX(-"+(card * currentcard)+"px)";
    }
    if(currentcard==0){
        pbutton.classList.add("deactive");
        nbutton.classList.remove("deactive");
    }
    if(currentcard<maxcards){
        nbutton.classList.remove("deactive");
    }
}

window.addEventListener('resize',function(){
    var container = document.getElementById("carousel");
    var card = document.getElementById('carousel-card').offsetWidth;
    card+=parseInt(getComputedStyle(document.getElementById('carousel-card')).marginRight);
    container.style.transform = "translateX(-"+(card * currentcard)+"px)";
})

function openmenu(item){
    item.classList.toggle('active');
}