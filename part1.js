/**
 * 计算商品总价
 */
const calcGoodsPrice = (goods) => {
    // 校验商品数量是否正确
    if (goods.apple < 0 || goods.strawberry < 0) return '商品数量不能小于 0 件';

    // 价格表
    const priceTable = {
        apple: 8,
        strawberry: 13,
    };

    // 计算总价格
    let totalPrice = 0;
    for (const key in goods) {
        if (!priceTable.hasOwnProperty(key)) return '该商品不存在';

        const number = Number(goods[key]);
        const price = priceTable[key];

        totalPrice += number * price;
    }

    return totalPrice;
};

// 顾客购买了苹果 5 斤，草莓 10 斤。
const totalPrice = calcGoodsPrice({ apple: 5, strawberry: 10 }); // 打印结果：170

// 顾客购买了苹果 -1 斤，草莓 10 斤。
const totalPrice2 = calcGoodsPrice({ apple: -1, strawberry: 10 }); // 打印结果：商品数量不能小于 0 件

// 顾客购买了雪梨 5 斤，草莓 10 斤。
const totalPrice3 = calcGoodsPrice({ pear: 5, strawberry: 10 }); // 打印结果：该商品不存在
