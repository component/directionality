
/*!
 * Regular expressions from `google.i18n.bidi`.
 *
 * @see https://code.google.com/p/closure-library/
 * @license Apache 2.0
 * @copyright 2007 The Closure Library Authors
 */

/**
 * Module exports.
 */

module.exports = exports = check;

/**
 * Character ranges definition.
 */

var ltr = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-' +
          '\u0590\u0800-\u1FFF\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF';

var rtl = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC';

/**
 * Regular expressions.
 */

exports.regex = {};
exports.regex.ltr = new RegExp('^[^' + rtl + ']*[' + ltr + ']');
exports.regex.rtl = new RegExp('^[^' + ltr + ']*[' + rtl +' ]');

/**
 * Finds out the writing system directionality.
 *
 * @param {String} text
 * @return {String} `left` (ltr) or `right` (rtl)
 */

function check(str){
  return exports.regex.rtl.test(str) ? 'rtl' : 'ltr';
}
