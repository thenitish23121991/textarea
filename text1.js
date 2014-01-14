define(['jquery.js','Modal.js'],function(jquery,Modal11){


$(document).ready(function(){

var text1 = document.getElementById('text');
var inside = false;

text1.addEventListener('keyup',function(){

inside = true;

});



$('.text').bind('mouseup',function(e){
console.log(inside);
if(inside == true){
e.stopPropagation();
console.log(inside);
if(text1.selectionStart != undefined){

var start_pos = text1.selectionStart;
var end_pos = text1.selectionEnd;
selected_text = text1.value.substring(start_pos,end_pos);

new Modal(selected_text);
$(".text").unbind('mouseup');
}

}

});


});



});