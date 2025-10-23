//This is the code for the collapsible. I learnt this from ww3schools, which aided me in creating a functional collapsible for my homepage. 
var coll = document.getElementsByClassName("collapsible");//This gets the class name collapsible from the HTML
var i;//this establishes i as a variable

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {//this adds the click event where it will function when clicked upon
        this.classList.toggle("active");//this toggles the "active" class when clicked upon
        var content = this.nextElementSibling;
        if (content.style.display === "block"){//this equals to when it displays the content style to be block, like display:block
            content.style.display="none";//then the display will be none if this occurs
        } else{
            content.style.display="block";//if not then it will keep display as a block
        }
    });
}
//this is the separate collapsible code for the second collapsible, which is needed for the flashcard introduction
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
//This is the JS code for the flashcards
var image_tracker1 = 'microorganism';
function changefirst(){//this function changefirst is called from HTML when the image is clicked on
    var image = document.getElementById('square1');//this creates a variable called image from the id in HTML called 'square1'
    if (image_tracker1 =='microorganism'){//This states that if the imagetracker is this specific image (which is its term image)
        image.src="Images/f1definition1.png";//then it would turn into this definition and state the image tracker
        image_tracker1="microorganismdefinition";
    }
    else{
        image.src="Images/f1term1.png";//else it would just stay into this current term image
        image_tracker1="microorganism";
    }
}
//this is the JS code for the second term in the first page
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
//this is the JS code for the third term in the first page
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
//this is the JS code for the fourth term in the first page
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
//this is the JS code for the fifth term in the first page
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
//this is the JS code for the sixth term in the first page
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
//this is the JS code for the seventh term in the first page
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
//this is the JS code for the first term in the second page
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
//this is the JS code for the second term in the second page
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
//this is the JS code for the third term in the second page
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
//this is the JS code for the fourth term in the second page
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
//this is the JS code for the fifth term in the second page
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
//this is the JS code for the sixth term in the second page
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
//this is the JS code for the seventh term in the second page
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
//this is the JS code for the first term in the third page
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
//this is the JS code for the second term in the third page
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
//this is the JS code for the third term in the third page
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
//this is the JS code for the fourth term in the third page
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
//this is the JS code for the fifth term in the third page
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
//this is the JS code for the sixth term in the third page
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
//This establishes slideIndex as 1, or the current slide that will be shown as 1(the first slide)
let slideIndex = 1;
showSlides(slideIndex);//This immediately shows the first slide since in the style.css it is display:none right now so it wont reveal all the other slides

function plusSlides(n) {//this states that the function will add/decrease the current slideindex based on the back and next arrow button
    showSlides(slideIndex += n);
}
function currentSlide(n){//this simply shows the current slideindex or equals it to the current slideindex
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;//this establishes i as a variable
    let slides = document.getElementsByClassName("mySlides");//this gets the class name mySlides and establishes it as slides in JS
    if (n > slides.length) {slideIndex = 1}//these are boundary cases that state if the number is more than slide length than the index would simply be 1
    if (n < 1) {slideIndex = slides.length}//this is the opposite of the case above
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
};
