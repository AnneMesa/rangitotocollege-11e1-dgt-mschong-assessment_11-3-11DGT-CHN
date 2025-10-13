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
        image.src="Images/definition1.jpg";
        image_tracker1="microorganismdefinition";
    }
    else{
        image.src="Images/term1.jpg";
        image_tracker1="microorganism";
    }
}

var image_tracker2 = 'binaryfission';
function changesecond(){
    var image = document.getElementById('square2');
    if (image_tracker2 =='binaryfission'){
        image.src="Images/definition2.jpg";
        image_tracker2="binaryfissiondefinition";
    }
    else{
        image.src="Images/term2.jpg";
        image_tracker2="binaryfission";
    }
}
var image_tracker3 = 'extracellulardigestion';
function changethird(){
    var image = document.getElementById('square3');
    if (image_tracker3 =='extracellulardigestion'){
        image.src="Images/definition3.jpg";
        image_tracker3 ="extracellulardigestiondefinition";
    }
    else{
        image.src="Images/term3.jpg";
        image_tracker3 ="extracellulardigestion";
    }
}
var image_tracker4 = 'passivediffusion';
function changefourth(){
    var image = document.getElementById('square4');
    if (image_tracker4 =='passivediffusion'){
        image.src="Images/definition4.jpg";
        image_tracker4 ="passivediffusiondefinition";
    }
    else{
        image.src="Images/term4.jpg";
        image_tracker4 ="passivediffusion";
    }
}
var image_tracker5 = 'sporeproduction';
function changefifth(){
    var image = document.getElementById('square5');
    if (image_tracker5 =='sporeproduction'){
        image.src="Images/definition5.jpg";
        image_tracker5 ="sporeproductiondefinition";
    }
    else{
        image.src="Images/term5.jpg";
        image_tracker5 ="sporeproduction";
    }
}
var image_tracker6 = 'budding';
function changesixth(){
    var image = document.getElementById('square6');
    if (image_tracker6 =='budding'){
        image.src="Images/definition6.jpg";
        image_tracker6 ="buddingdefinition";
    }
    else{
        image.src="Images/term6.jpg";
        image_tracker6 ="budding";
    }
}
var image_tracker7 = 'viralreplication';
function changeseventh(){
    var image = document.getElementById('square7');
    if (image_tracker7 =='viralreplication'){
        image.src="Images/definition7.jpg";
        image_tracker7 ="viralreplicationdefinition";
    }
    else{
        image.src="Images/term7.jpg";
        image_tracker7 ="viralreplication";
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
