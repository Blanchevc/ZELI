// Voeg product toe aan winkelmandje
function addToCart(name, price) {
    let size = document.getElementById('size').value;
    let product = { name: name, price: parseFloat(price), size: size };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + " (Size: " + size + ") has been added to your cart!");
}

// Laad winkelmandje in cart.html
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-items-list');
    const totalElement = document.getElementById('cart-total');
    let total = 0;

    container.innerHTML = '';
    cart.forEach((item, index) => {
        container.innerHTML += `<p>${item.name} - Size: ${item.size} - €${item.price.toFixed(2)}</p>`;
        total += item.price;
    });

    totalElement.innerText = '€' + total.toFixed(2);
}