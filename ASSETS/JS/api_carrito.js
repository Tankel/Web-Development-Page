let cart = [];

function loadCart() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
        cart = JSON.parse(cartData);
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function createElement(tag, className = '', content = '') {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = content;
    return element;
}

function createProductImage(imgSrc, imgAlt) {
    const imgContainer = createElement('div', 'product-image');
    imgContainer.style.width = '50px';
    imgContainer.style.marginRight = '40px';
    const imgElement = createElement('img');
    imgElement.src = imgSrc;
    imgElement.alt = imgAlt;
    imgElement.style.width = '100%';
    imgContainer.appendChild(imgElement);
    return imgContainer;
}

function createProductText(productName) {
    const textContainer = createElement('div', 'product-text');
    const nameElement = createElement('span', '', productName);
    nameElement.style.display = 'block';
    nameElement.style.marginBottom = '5px';
    nameElement.style.fontSize = '20px';
    textContainer.appendChild(nameElement);
    textContainer.style.flex = "1"; // El contenedor ocupa el espacio restante
    textContainer.style.marginRight = "10px";
    return textContainer;
}

function createQuantityInput(productQty, inputHandler) {
    const quantityInput = createElement('input', 'product-quantity');
    quantityInput.type = 'number';
    quantityInput.value = productQty;
    quantityInput.min = 0;
    quantityInput.style.width = '40px';
    quantityInput.style.allign = 'left';
    quantityInput.style.marginRight = '10px';
    quantityInput.addEventListener('input', inputHandler);
    return quantityInput;
}

function createPriceElement(productPrice, productQty) {
    const priceElement = createElement('span', 'badge bg-primary rounded-pill');
    priceElement.innerText = ` $${productPrice * productQty}`;
    priceElement.style.allign
    return priceElement;
}

function updateCartItemQuantity(productName, newQuantity, listItem) {
    const cartItem = cart.find(item => item.name === productName);
    if (cartItem) {
        cartItem.quantity = newQuantity;
        const productPriceElement = listItem.querySelector('.badge');
        const productPrice = cartItem.price;
        productPriceElement.innerText = ` $${productPrice * newQuantity}`;
    }
}

function updateTotalPrice() {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalPriceElement = document.getElementById('totalPrice');
    if (totalPriceElement) {
        totalPriceElement.innerText = ` $${totalPrice.toFixed(2)}`;
    }
}

function cartList() {
    const cartListElement = document.getElementById('cartList');
    let totalPrice = 0;

    cartListElement.innerHTML = ''; // Limpiar la lista antes de reconstruirla

    cart.forEach(({ name, price, image, quantity }) => {
        const listItem = createElement('li', 'list-group-item d-flex align-items-start');

        listItem.appendChild(createProductImage(image, name));
        const textContainer = createProductText(name);

        const quantityInputHandler = createInputHandler(name, listItem);
        const quantityInput = createQuantityInput(quantity, quantityInputHandler);
        textContainer.appendChild(quantityInput);
        
        const deleteLink = createElement('a', 'delete-link');
        deleteLink.innerText = 'Delete';
        deleteLink.style.fontSize = '15x';
        deleteLink.addEventListener('click', () => deleteCartItem(name, listItem));
        textContainer.appendChild(deleteLink);

        listItem.appendChild(textContainer);

        listItem.appendChild(createPriceElement(price, quantity));

        cartListElement.appendChild(listItem);

        totalPrice += price * quantity;
    });

    const totalPriceElement = document.getElementById('totalPrice');
    if (totalPriceElement) {
        totalPriceElement.innerText = ` $${totalPrice.toFixed(2)}`;
    }
}

function deleteCartItem(productName, listItem) {
    // Elimina el elemento del carrito y actualiza la interfaz
    cart = cart.filter(item => item.name !== productName);
    saveCart();
    cartList();
    updateTotalPrice();
}

// Resto del código...


function createInputHandler(productName, listItem) {
    return function () {
        const newQuantity = parseInt(this.value, 10);
        updateCartItemQuantity(productName, newQuantity, listItem);
        saveCart();
        updateTotalPrice();
    };
}

function payment(){
    // Realiza el pago y muestra un mensaje de éxito
    alert('Payment successful!');

    // Borra todos los productos del localStorage y redirecciona a la página principal
    localStorage.removeItem('cart');
    window.location.href = '/PAGES/PROJECTS/Examen_3.html';
}

loadCart();
cartList();
updateTotalPrice();
