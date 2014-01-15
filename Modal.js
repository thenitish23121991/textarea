

function Modal(text){
this.text = text;
sel_text = text;
this.buttons = $('.button');
this.checked = 'none';
this.overlay = $('.overlay');
this.modal = $('.modal');
this.textarea = $('.text');
this.in_process = false;
this.create();
}


Modal.prototype = {

create : function(){
this.show_overlay();
this.modal.addClass('modal_index');
this.modal.css({
'opacity' : '1',
'-webkit-transform' : 'translateZ(0px)'
});
this.bind_events();

},

bind_events : function(){
var self = this;
this.overlay.bind('click',function(){
self.close();
});
$('.button').one('click',function(){
if(self.in_process == false){
var tex = $(this).text();
self.apply_effect(tex);
}
});
},

apply_effect : function(tex){
this.in_process = true;
var self = this;
//console.log('called');
//var text = self.buttons.eq(key).text();
var new_text = '';
switch(tex){

case 'Bold':
new_text = '<b>'+sel_text+'</b>';
break

case 'Arial':
new_text = '<i>'+sel_text+'</i>';
break;

case 'Close':
new_text = sel_text;
self.close();
break;
}
var tt1 = this.textarea.val();
var tt2 = tt1.replace(sel_text,new_text);
//console.log(tt2);
var new_tt2 = this.strip_tags(tt2);
this.textarea.val(new_tt2);
this.in_process = false;
this.close();
},

strip_tags : function(text){
new_t = text.replace("<i><i>","<i>");
new_t = new_t.replace("</i></i>","</i>");
new_t = new_t.replace("<b><b>","<b>");
new_t = new_t.replace("</b></b>","</b>");
new_t = new_t.replace("<i><b>","<i>");
new_t = new_t.replace("</b></i>","</i>");
new_t = new_t.replace("<b></i>","<b>");
new_t = new_t.replace("</b></i>","</b>");
return new_t;
},

show_overlay : function(){
this.overlay.addClass('top_index');
this.overlay.css({
'opacity' : '1'
});
},

close_overlay : function(){
this.overlay.css({
'opacity' : '0'
});
this.overlay.removeClass('top_index');
},


close :function(){
this.close_overlay();
this.modal.removeClass('modal_index');
this.modal.css({
'opacity' : '0',
'-webkit-transform' : 'translateZ(-300px)'
});
self_text = '';
new_text = '';
}

}