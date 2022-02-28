/**
 * Helps us pluralize word formatting.
 *
 * Provides an 's' when needed.
 * For example, we should say '1 car' but '5 cars',
 *
 * @param {number} num
 *   The number of items.
 * @returns {string}
 *   An empty string if num is 1, otherwise an 's'.
 */
function pluralize(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}

const thingsInput = document.querySelector('#thing-num-input');
const thingsCountOutput = document.querySelector('#thing-count');
const div = createEle

// write your code here
function numberThings () {
    var num = parseInt(thingsInput).value;
    pluralize(num);
    thingsCountOutput.innerHTML = 'You have selected' + num + 'things.'
}
