// 5. Price Calculator
function calculateDiscount(price, discountPercent) {
    return (price * discountPercent) / 100;
}

function calculateTax(priceAfterDiscount, taxPercent) {
    return (priceAfterDiscount * taxPercent) / 100;
}

function calculateFinalPrice(price, discountPercent, taxPercent) {
    var discount = calculateDiscount(price, discountPercent);
    var priceAfterDiscount = price - discount;
    var tax = calculateTax(priceAfterDiscount, taxPercent);
    return priceAfterDiscount + tax;
}

function createPriceSummary(price, discountPercent, taxPercent) {
    var discount = calculateDiscount(price, discountPercent);
    var priceAfterDiscount = price - discount;
    var tax = calculateTax(priceAfterDiscount, taxPercent);
    var finalPrice = priceAfterDiscount + tax;

    return {
        price: price,
        discount: discount,
        tax: tax,
        finalPrice: finalPrice
    };
}
//Output
console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));
