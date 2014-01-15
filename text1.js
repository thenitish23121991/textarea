define(['jquery.js','Modal.js'],function(jquery,Modal11){


$(document).ready(function(){

var text1 = document.getElementById('text');
var inside = false;

text1.addEventListener('keyup',function(){

inside = true;

});

$('.text').bind('mousedown',function(){
setTimeout(function(){
inside = true;
},600);
});

$(".text").bind('focus',function(e){
e.stopPropagation();
});

$('.text').bind('mouseup',function(e){
if(inside == true){
e.stopPropagation();
if(text1.selectionStart != undefined){
var start_pos = text1.selectionStart;
var end_pos = text1.selectionEnd;
var selected_text = text1.value.substring(start_pos,end_pos);

new Modal(selected_text);
inside = false;

}
text1.selectionStart = 0;
}

});


});



});