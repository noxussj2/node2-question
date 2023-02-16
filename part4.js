/**
 * 计算商品总价
 */
const calcGoodsPrice = (goods) => {
    // 校验商品数量是否正确
    if (goods.apple < 0 || goods.strawberry < 0) return '商品数量不能小于 0 件';

    // 价格表
    let priceTable = {
        apple: 8,
        strawberry: 13,
        mango: 20,
    };

    // 活动促销，草莓打八折
    priceTable.strawberry = Number((priceTable.strawberry * 0.8).toFixed(1)); // 10.4 元

    // 计算总价格
    let totalPrice = 0;
    for (const key in goods) {
        if (!priceTable.hasOwnProperty(key)) return '该商品不存在';

        const number = Number(goods[key]);
        const price = priceTable[key];

        totalPrice += number * price;
    }

    // 活动促销2，满 100 减 10 元
    let discountPrice = Math.floor(totalPrice / 100) * 10; // 优惠价格

    return totalPrice - discountPrice;
};

// 顾客购买了苹果 5 斤，草莓 10 斤，芒果 5斤。
const totalPrice = calcGoodsPrice({ apple: 5, strawberry: 10, mango: 5 }); // 打印结果：224
