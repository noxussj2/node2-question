```javascript
var str = 'abcedfg';
var str2 = str.substring(1, 2); // 'b'
var str2 = str.substr(1, 2); // 'bc'
```

substring 和 substr 都是字符串截取的功能。

substr 是从开始索引（包含本身），截取 n 个 长度。

substring 是从开始索引（不包含本身）到结束索引（包含本身）之间。

另外后续只需要使用 substring 这个即可，因为 substr 被废弃了。
