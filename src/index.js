module.exports = function check(str, bracketsConfig) {
    let items = bracketsConfig.map( item => item.join(''));
    let string = str;

    function rebase(string) {
        for (let i =0; i < items.length; i++) {
            if (string.includes(items[i])) {
                string = string.replace(items[i], '');
                return rebase(string);
            } else if (!string.includes(items[i]) && string.length == 0) {
                return true;
            } else if (!string.includes(items[i]) && string.length < 0) {
                return false;
            }
        }
        return false;
    }
    return rebase(str);
}
