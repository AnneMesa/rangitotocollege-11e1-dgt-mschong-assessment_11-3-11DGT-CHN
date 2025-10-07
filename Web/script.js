var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block"){
            content.style.display="none";
        } else{
            content.style.display="block";
        }
    });
}

var coll = document.getElementsByClassName("collapsible2");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active2");
        var content2 = this.nextElementSibling;
        if (content2.style.display === "block"){
            content2.style.display="none";
        } else{
            content2.style.display="block";
        }
    });
}

var image_tracker1 = 'microorganism';
function changefirst(){
    var image = document.getElementById('square1');
    if (image_tracker1 =='microorganism'){
        image.src="Images/card1.jpg";
        image_tracker1="microdefinition";
    }
    else{
        image.src="Images/flash1.jpg.jpg";
        image_tracker1="microorganism";
    }
}

var image_tracker2 = 'yellow';
function changesecond(){
    var image = document.getElementById('square2');
    if (image_tracker2 =='yellow'){
        image.src="Images/pink.jpg";
        image_tracker2="pink";
    }
    else{
        image.src="Images/yellow.jpg";
        image_tracker2="yellow";
    }
}
var image_tracker3 = 'green';
function changethird(){
    var image = document.getElementById('square3');
    if (image_tracker3 =='green'){
        image.src="Images/purple.jpg";
        image_tracker3 ="purple.jpg";
    }
    else{
        image.src="Images/green.jpg";
        image_tracker3 ="green";
    }
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

$('.box .content').click(function(){
    $(this).closest('.box').toggleClass('animate');
    $(this).css('transform, rotateY(180deg)');

});
