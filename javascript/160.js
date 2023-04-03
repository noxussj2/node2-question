/**
 * 日期转时间戳
 */
function dateToTime(str) {
    var date = new Date(str);

    return date.getTime();
}

var time = dateToTime('2023-03-30 17:15');

console.log(time); // 1680167700000
