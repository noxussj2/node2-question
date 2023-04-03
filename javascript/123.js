function isInclude(text, str) {
    return str.indexOf(text) > -1;
}

var data = isInclude('a', 'apple');

console.log(data); // true
