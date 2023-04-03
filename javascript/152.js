/**
 * 删除数组中的元素
 */
function removeArray(arr, value) {
    var activeIndex = arr.indexOf(value);
    arr.splice(activeIndex, 1);
}

var arr2 = ['a', 'b', 'c', 'd', 'e'];

removeArray(arr2, 'c');

console.log(arr2); // [ 'a', 'b', 'd', 'e' ]
