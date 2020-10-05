module.exports = function check(str, bracketsConfig) {
    let items = bracketsConfig.map( item => item.join(''));

    function rebase(str) {
        for (let i =0; i < items.length; i++) {
            if (str.includes(items[i])) {
                str = str.replace(items[i], '');
                return rebase(str);
            } else if (!str.includes(items[i]) && str.length == 0) {
                return true;
            } else if (!str.includes(items[i]) && str.length < 0) {
                return false;
            }
        }
        return false;
    }
    return rebase(str);
}
