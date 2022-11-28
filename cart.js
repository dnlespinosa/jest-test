function getCartTotal(cart, discountAmount = 0) {
    let totalPrice = cart.reduce(
        (price, item) => (price + item.price * item.qty), 0);
    let discountedPrice = totalPrice * (1 - discountAmount);
    return +discountedPrice.toFixed(2);
}

module.exports = { getCartTotal }