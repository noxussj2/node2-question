var obj = {
    'name-1': 'xiaoming',
};

delete obj['name-1'];

var value = obj['name-1'];

console.log(value); // undefined
