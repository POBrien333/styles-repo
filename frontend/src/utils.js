/**
 * Finds the first element that pasess function test by testing the element itself
 * and traversing up
 * @param  {HTMLElement}   el 	- A DOM element from which tracersing begins
 * @param  {Function} fn 		- Function that tests if element is suitable
 * @return {HTMLElement}		- First element that passes the test
 */
export function closest(el, fn) {
	return el && (fn(el) ? el : closest(el.parentNode, fn));
}

/**
 * Port of PHP's number_format()
 *
 * MIT Licensed
 *
 * From http://kevin.vanzonneveld.net
 * +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
 * +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
 * +     bugfix by: Michael White (http://getsprink.com)
 * +     bugfix by: Benjamin Lupton
 * +     bugfix by: Allan Jensen (http://www.winternet.no)
 * +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
 * +     bugfix by: Howard Yeend
 * *     example 1: number_format(1234.5678, 2, '.', '');
 * *     returns 1: 1234.57
 */
export function numberFormat(number, decimals = 0, dec_point, thousands_sep) {
	var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
	var d = dec_point == undefined ? "." : dec_point;
	var t = thousands_sep == undefined ? "," : thousands_sep, s = n < 0 ? "-" : "";
	var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;

	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}
