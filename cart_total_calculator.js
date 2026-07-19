// 6. Cart Total Calculator
function calculateSubtotal(items) {
    var subtotal = 0;
    for (var i = 0; i < items.length; i++) {
        subtotal = subtotal + (items[i].price * items[i].quantity);
    }
    return subtotal;
}

function calculateDiscount(subtotal, discountPercent) {
    return (subtotal * discountPercent) / 100;
}

function calculateTax(amountAfterDiscount, taxPercent) {
    return (amountAfterDiscount * taxPercent) / 100;
}

function createCartSummary(items, discountPercent, taxPercent) {
    var subtotal = calculateSubtotal(items);
    var discount = calculateDiscount(subtotal, discountPercent);
    var amountAfterDiscount = subtotal - discount;
    var tax = calculateTax(amountAfterDiscount, taxPercent);
    var total = amountAfterDiscount + tax;

    return {
        subtotal: subtotal,
        discount: discount,
        tax: tax,
        total: total
    };
}
//Output
const cartItems = [
    { name: 'Notebook', price: 10, quantity: 2 },
    { name: 'Pen', price: 2, quantity: 5 },
    { name: 'Bag', price: 30, quantity: 1 },
];
console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));

const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));
