

function Modal(text){
this.text = text;
this.buttons = $('.button');
this.checked = 'none';
this.overlay = $('.overlay');
this.modal = $('.modal');
this.textarea = $('.text');
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
$.each(this.buttons,function(key,value){
self.buttons.eq(key).bind('click',function(){
self.apply_effect(key);
});
});
},

apply_effect : function(key){
var self = this;
var text = self.buttons.eq(key).text();
var new_text;
switch(text){

case 'Bold':
new_text = '<b>'+self.text+'</b>';
break

case 'Arial':
new_text = '<i>'+self.text+'</i>';
break;

case 'Close':
new_text = self.text;
self.close();
break;
}
var tt1 = this.textarea.val();
var tt2 = tt1.replace(self.text,new_text);
this.textarea.val(tt2);
this.close();
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
}

}