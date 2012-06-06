function getDocHeight() {
    var body = document.body,
        html = document.documentElement;
    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
}

function position() {
    var totalw = 0,
        minw = 0,
        ww = $(window).width(),
        wh = $(window).height(),
        st = $(window).scrollTop(),
        o = $('.dwo', dw),
        d = $('.dw', dw),
        w,
        h;
    $('.dwc', dw).each(function() {
        w = $(this).outerWidth(true);
        totalw += w;
        minw = (w > minw) ? w : minw;
    });
    w = totalw > ww ? minw : totalw;
    d.width(w);
    w = d.outerWidth();
    h = d.outerHeight();
    d.css({ left: (ww - w) / 2, top: st + (wh - h) / 2 });
    //o.height(0).height($(document).height());
    o.height(0).height(getDocHeight());
}

function alert(mensaje){
	var html = '<div class="jqm"><div class="dwo"></div><div class="dw ui-overlay-shadow ui-corner-all ui-body-a pop in" style="width: 266px;"><div class="dwwr ui-body-c"><div class="dwv ui-header ui-bar-b">Aviso</div>';
	html 	+= '<div class="dwc dwpm">'+ mensaje +'</div>';
	html 	+= '<div class="dwbc"><span class="dwbw dwb-s"><a href="#" class="dwb">Aceptar</a></span><span class="dwbw dwb-c"><a href="#" class="dwb">Cancelar</a></span></div></div></div></div>';
	
	dw = $(html);
	position();
	dw.appendTo('body');
	$(window).bind('resize', position);
}