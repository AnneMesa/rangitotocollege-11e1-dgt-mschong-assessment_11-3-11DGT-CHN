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
        image.src="Images/f1definition1.png";
        image_tracker1="microorganismdefinition";
    }
    else{
        image.src="Images/f1term1.png";
        image_tracker1="microorganism";
    }
}

var image_tracker2 = 'binaryfission';
function changesecond(){
    var image = document.getElementById('square2');
    if (image_tracker2 =='binaryfission'){
        image.src="Images/f1definition2.png";
        image_tracker2="binaryfissiondefinition";
    }
    else{
        image.src="Images/f1term2.png";
        image_tracker2="binaryfission";
    }
}
var image_tracker3 = 'extracellulardigestion';
function changethird(){
    var image = document.getElementById('square3');
    if (image_tracker3 =='extracellulardigestion'){
        image.src="Images/f1definition3.png";
        image_tracker3 ="extracellulardigestiondefinition";
    }
    else{
        image.src="Images/f1term3.png";
        image_tracker3 ="extracellulardigestion";
    }
}
var image_tracker4 = 'passivediffusion';
function changefourth(){
    var image = document.getElementById('square4');
    if (image_tracker4 =='passivediffusion'){
        image.src="Images/f1definition4.png";
        image_tracker4 ="passivediffusiondefinition";
    }
    else{
        image.src="Images/f1term4.png";
        image_tracker4 ="passivediffusion";
    }
}
var image_tracker5 = 'sporeproduction';
function changefifth(){
    var image = document.getElementById('square5');
    if (image_tracker5 =='sporeproduction'){
        image.src="Images/f1definition5.png";
        image_tracker5 ="sporeproductiondefinition";
    }
    else{
        image.src="Images/f1term5.png";
        image_tracker5 ="sporeproduction";
    }
}
var image_tracker6 = 'budding';
function changesixth(){
    var image = document.getElementById('square6');
    if (image_tracker6 =='budding'){
        image.src="Images/f1definition6.png";
        image_tracker6 ="buddingdefinition";
    }
    else{
        image.src="Images/f1term6.png";
        image_tracker6 ="budding";
    }
}
var image_tracker7 = 'viralreplication';
function changeseventh(){
    var image = document.getElementById('square7');
    if (image_tracker7 =='viralreplication'){
        image.src="Images/f1definition7.png";
        image_tracker7 ="viralreplicationdefinition";
    }
    else{
        image.src="Images/f1term7.png";
        image_tracker7 ="viralreplication";
    }
}
var image_tracker8 = 'respiration';
function changeeighth(){
    var image = document.getElementById('square8');
    if (image_tracker8 =='respiration'){
        image.src="Images/f2definition1.png";
        image_tracker8="respirationdefinition";
    }
    else{
        image.src="Images/f2term1.png";
        image_tracker8="respiration";
    }
}

var image_tracker9 = 'anaerobicrespiration';
function changeninth(){
    var image = document.getElementById('square9');
    if (image_tracker9 =='anaerobicrespiration'){
        image.src="Images/f2definition2.png";
        image_tracker9="anaerobicrespirationdefinition";
    }
    else{
        image.src="Images/f2term2.png";
        image_tracker2="anaerobicrespiration";
    }
}
var image_tracker10 = 'aerobicrespiration';
function changetenth(){
    var image = document.getElementById('square10');
    if (image_tracker10 =='aerobicrespiration'){
        image.src="Images/f1definition3.png";
        image_tracker10 ="aerobicrespirationdefinition";
    }
    else{
        image.src="Images/f2term3.png";
        image_tracker10 ="aerobicrespiration";
    }
}
var image_tracker11 = 'fermentation';
function changeeleventh(){
    var image = document.getElementById('square11');
    if (image_tracker4 =='fermentation'){
        image.src="Images/f2definition4.png";
        image_tracker4 ="passivediffusiondefinition";
    }
    else{
        image.src="Images/f2term4.png";
        image_tracker4 ="fermentation";
    }
}
var image_tracker12 = 'gutbacteria';
function changetwelfth(){
    var image = document.getElementById('square12');
    if (image_tracker12 =='gutbacteria'){
        image.src="Images/f2definition5.png";
        image_tracker12 ="gutbacteriadefinition";
    }
    else{
        image.src="Images/f2term5.png";
        image_tracker12 ="gutbacteria";
    }
}
var image_tracker13 = 'probiotics';
function changethirteenth(){
    var image = document.getElementById('square13');
    if (image_tracker13 =='probiotics'){
        image.src="Images/f2definition6.png";
        image_tracker13 ="probioticsdefinition";
    }
    else{
        image.src="Images/f2term6.png";
        image_tracker13 ="probiotics";
    }
}
var image_tracker14 = 'prebiotics';
function changefourteenth(){
    var image = document.getElementById('square14');
    if (image_tracker14 == "prebiotics" ){
        image.src="Images/f2definition7.png";
        image_tracker14 ="prebioticsdefinition";
    }
    else{
        image.src="Images/f2term7.png";
        image_tracker14 ="prebiotics";
    }
}
var image_tracker15 = 'pathogen';
function changefifteenth(){
    var image = document.getElementById('square15');
    if (image_tracker15 == "pathogen" ){
        image.src="Images/f3definition1.png";
        image_tracker15 ="pathogendefinition";
    }
    else{
        image.src="Images/f3term1.png";
        image_tracker15 ="pathogen";
    }
}
var image_tracker16 = 'antibiotics';
function changesixteenth(){
    var image = document.getElementById('square16');
    if (image_tracker16 == "antibiotics" ){
        image.src="Images/f3definition2.png";
        image_tracker16 ="antibioticsdefinition";
    }
    else{
        image.src="Images/f3term2.png";
        image_tracker16 ="antibiotics";
    }
}
var image_tracker17 = 'vaccinations';
function changeseventeenth(){
    var image = document.getElementById('square17');
    if (image_tracker17 == "vaccinations" ){
        image.src="Images/f3definition3.png";
        image_tracker17 ="vaccinationsdefinition";
    }
    else{
        image.src="Images/f3term3.png";
        image_tracker17 ="vaccinations";
    }
}
var image_tracker18 = 'passiveimmunity';
function changeeighteenth(){
    var image = document.getElementById('square18');
    if (image_tracker18 == "passiveimmunity" ){
        image.src="Images/f3definition4.png";
        image_tracker18 ="passiveimmunitydefinition";
    }
    else{
        image.src="Images/f3term4.png";
        image_tracker18 ="passiveimmunity";
    }
}

var image_tracker19 = 'activeimmunity';
function changenineteenth(){
    var image = document.getElementById('square19');
    if (image_tracker19 == "activeimmunity" ){
        image.src="Images/f3definition5.png";
        image_tracker19 ="activeimmunitydefinition";
    }
    else{
        image.src="Images/f3term5.png";
        image_tracker19 ="activeimmunity";
    }
}
var image_tracker20 = 'antibodies';
function changetwentieth(){
    var image = document.getElementById('square20');
    if (image_tracker20 == "antibodies" ){
        image.src="Images/f3definition6.png";
        image_tracker20 ="antibodiesdefinition";
    }
    else{
        image.src="Images/f3term6.png";
        image_tracker20 ="antibodies";
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
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}




