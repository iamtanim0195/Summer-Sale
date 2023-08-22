const clickedItemsList = document.getElementById('clicked-items');
const discountInput = document.getElementById('discount-input');
const applyDiscountButton = document.getElementById('apply-discount');
const cartTotal = document.getElementById('cart-total');
const discountAmount = document.getElementById('discount-amount');
const finalTotal = document.getElementById('final-total');
let total = 0;


function handelClick(target) {

    const clickedItems = document.getElementById("clicked-items");
    const getItemName = target.querySelector('.card-title');
    const itemName = getItemName.textContent;
    const li = document.createElement('li');
    li.innerText = itemName
    clickedItems.appendChild(li);

    const price = target.querySelector('.price');
    total = parseFloat(total) + parseFloat(price.textContent);
    document.getElementById("cart-total").innerText = total;

    cartTotal.innerText = total.toFixed(2);

    // Enable the discount input if the total is over 200
    if (total > 200) {
        discountInput.removeAttribute('disabled');
        applyDiscountButton.removeAttribute('disabled');
    } else {
        discountInput.setAttribute('disabled', true);
        applyDiscountButton.setAttribute('disabled', true);
    }
}

function applyDiscount(event) {
    const couponCode = discountInput.value;

    if (couponCode === 'SELL200') {
        let total = parseFloat(cartTotal.innerText);
        const discount = total * 0.3; // 20% discount
        total -= discount;

        discountAmount.innerText = discount.toFixed(2);
        finalTotal.innerText = total.toFixed(2);
        event.preventDefault();
    }
}
