var arr1 = ['a', 'b', 'c'];
var arr2 = ['d', 'e', 'f'];
var arr3 = arr1.concat(arr2);

// 验证
arr1[0] = 'z';
console.log(arr3); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// 当其中一个变量改变后，不会影响另外一个变量。
