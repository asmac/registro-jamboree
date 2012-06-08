(function ($) {

	var dw,
		type, 
		visible 		= false, 
		returnValue		= false;

	var methods = {
		init : function( options ){
			alert('Inicia');
		},

		show : function(){
			if( $('.dw').length == 0 ) {
				$(window).bind('resize.dw', methods.position);
				dw.appendTo('body');
				methods.position();
			}
		},

		hide : function(){
			$(dw).remove();
			$(window).unbind('.dw');
		},

		position : function(){
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
			o.height(0).height(methods.getDocHeight());
		},

		alert : function ( mensaje ){
			var html = '<div class="jqm"><div class="dwo"></div><div class="dw ui-overlay-shadow ui-corner-all ui-body-a pop in"><div class="dwwr ui-body-c"><div class="dwv ui-header ui-bar-b"><i class="icon-warning-sign icon-white"></i> Aviso</div>';
			html 	+= '<div class="dwc dwpm"><div class="dwwc dwrc">'+ mensaje +'</div></div>';
			html 	+= '<div class="dwbc"><span class="dwbw dwb-s"><a href="#" class="dwb">Aceptar</a></span></div></div></div></div>';

			dw = $(html);

			$('.dwb-s a', dw).click(function () {
				methods.hide();
				return false;
			});

			methods.show();
		},

		getDocHeight : function (){
			var body = document.body,
				html = document.documentElement;
			return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
		}
	}

	$.fn.jDialog = function( method ){
		if( methods[method] ){
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.jDialog' );
		}
	};

})(jQuery);

function alert2( msg ){
	$().jDialog('alert', 'Hola');
}

/*

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

	$('.dwb-s a', dw).click(function () {
		close();
		return false;
	});

	$(window).bind('resize.dw', position);
	dw.appendTo('body');
	position();
}

*/