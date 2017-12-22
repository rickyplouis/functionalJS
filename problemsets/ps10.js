/**
 * @example
 * var info = logger('INFO:')
 * info('this is an info message')
 * INFO: this is an info message
 *
 * var warn = logger('WARN:')
 * warn('this is a warning message', 'with more info')
 * WARN: this is a warning message with more info
**/

/**
 * Takes in a namespace and prepends it to a message using partial application
 * then logs it to the console
 * @param {String} namespace
 * @param {String} message
 */

module.exports = function(namespace) {
  return console.log.bind(console, namespace);
}
