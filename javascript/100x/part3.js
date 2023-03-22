function convertArray(str) {
    return str.split(',');
}

var data = convertArray('a,p,p,l,e');

console.log(data); // [ 'a', 'p', 'p', 'l', 'e' ]
