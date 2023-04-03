// for 循环是已知循环次数的。而 while 是不知道具体要循环多少次，只要条件成立就会一直循环。

/**
 * for 证实
 */
for (var index = 0; index < 9; index++) {}

/**
 * while 证实
 */
var arr = ['a', 'b', 'c', 'd'];

while (arr.length > 0) {
    arr.pop();
}
