/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'my-icons-font\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-symbol-hrn': '&#xe905;',
		'icon-check-mark': '&#xe906;',
		'icon-close': '&#xe907;',
		'icon-arrow-left': '&#xe908;',
		'icon-it': '&#xe909;',
		'icon-settings': '&#xe90a;',
		'icon-stamp': '&#xe90b;',
		'icon-calendar': '&#xe90c;',
		'icon-page': '&#xe90d;',
		'icon-quality': '&#xe90e;',
		'icon-arrow': '&#xe904;',
		'icon-mail': '&#xe900;',
		'icon-planet': '&#xe901;',
		'icon-schedule': '&#xe902;',
		'icon-tel': '&#xe903;',
		'icon-office': '&#xe90f;',
		'icon-location': '&#xe947;',
		'icon-compass': '&#xe94a;',
		'icon-clinica': '&#xe998;',
		'icon-sphere': '&#xe9c9;',
		'icon-star-empty': '&#xe9d7;',
		'icon-star-half': '&#xe9d8;',
		'icon-star-full': '&#xe9d9;',
		'icon-info': '&#xea0c;',
		'icon-arrow-right-bold': '&#xea3c;',
		'icon-facebook2': '&#xea91;',
		'icon-instagram': '&#xea92;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
