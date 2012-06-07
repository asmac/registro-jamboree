(function ($) {

	var dw;

	var methods = {
		init : function ( options ){

		},

		show : function(){

		},

		hide : function(){

		}
	}

	$.fn.dialog = function( method ){

	};

})(jQuery);

var dw;

function getDocHeight() {
	var body = document.body,
		html = document.documentElement;
	return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
}

function position() {
	var totalw = 0,
		minw   = 0,
		ww = $(window).width(),
		wh = $(window).height(),
		st = $(window).scrollTop(),
		o  = $('.dwo', dw),
		d  = $('.dw', dw),
		w,
		h;
	w = (ww > 700) ? 380 : 266;
	d.width(w);
	w = d.outerWidth();
	h = d.outerHeight();

	d.css({ left: (ww - w) / 2, top: st + (wh - h) / 2 });
	o.height(0).height(getDocHeight());
}

function close(){
	$(dw).remove();
	$(window).unbind('.dw');
}

function alert2( mensaje ){
	var html = '<div class="jqm"><div class="dwo"></div><div class="dw ui-overlay-shadow ui-corner-all ui-body-a pop in"><div class="dwwr ui-body-c"><div class="dwv ui-header ui-bar-b"><i class="icon-warning-sign icon-white"></i> Aviso</div>';
	html 	+= '<div class="dwc dwpm"><div class="dwwc dwrc">'+ mensaje +'</div></div>';
	html 	+= '<div class="dwbc"><span class="dwbw dwb-s"><a href="#" class="dwb">Aceptar</a></span></div></div></div></div>';
	//html    += '<div class="dwbc"><span class="dwbw dwb-s"><a href="#" class="dwb">Aceptar</a></span><span class="dwbw dwb-c"><a href="#" class="dwb">Cancelar</a></span></div></div></div></div>';

	dw = $(html);
	//position();
	
	$(window).bind('resize.dw', position);
	$('.dwb-s a', dw).click(function () {
		close();
		return false;
	});

	dw.appendTo('body');
	position();
}