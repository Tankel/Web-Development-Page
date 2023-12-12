const API_call = async (selectedCat) => {
    let apiUrl = 'https://fakestoreapi.com/products/';

    if (selectedCat !== 'all') {
        apiUrl += 'category/' + selectedCat;
    }

    const APIResponse = await fetch(apiUrl);
    const products = await APIResponse.json();

    var productContainer = document.getElementById("productContainer");

    // Limpiar contenido anterior
    productContainer.innerHTML = "";

    for (var i = 0; i < products.length; i++) {
        var pName = products[i].title;
        var pCost = products[i].price;
        var pCategory = products[i].category;
        var pDescription = products[i].description;
        var pImg = products[i].image;

        var colDiv = document.createElement("div");
        colDiv.className = "col-12 col-lg-4 mb-5 mb-lg-0"; 
        productContainer.appendChild(colDiv);

        var cardDiv = document.createElement("div");
        cardDiv.className = "card d-block";
        colDiv.appendChild(cardDiv);

        var imgContainer = document.createElement("div");
        imgContainer.className = "zoom-image";
        imgContainer.style.width = "100%";
        imgContainer.style.height = "300px  "; 
        imgContainer.style.overflow = "hidden";
        imgContainer.style.backgroundColor = "white";
        cardDiv.appendChild(imgContainer);
        
        var img_elem = document.createElement("img");
        img_elem.className = "card-img-top";
        img_elem.src = pImg;
        img_elem.alt = pName;
        img_elem.style.width = "100%";
        img_elem.style.height = "100%";
        img_elem.style.objectFit = "contain";
        imgContainer.appendChild(img_elem);

        var cardFooterDiv = document.createElement("div");
        cardFooterDiv.className = "card-footer text-center py-4";
        cardDiv.appendChild(cardFooterDiv);

        var titleCategoryContainer = document.createElement("div");
        titleCategoryContainer.className = "title-category-container";
        cardFooterDiv.appendChild(titleCategoryContainer);

        var name_h3 = document.createElement("h3");
        name_h3.className = "h5 mb-1";
        name_h3.innerText = pName;
        titleCategoryContainer.appendChild(name_h3);

        var category_span = document.createElement("span");
        category_span.className = "d-block text-muted font-size-1 mb-3";
        category_span.innerText = pCategory;
        titleCategoryContainer.appendChild(category_span);

        var price_h4 = document.createElement("h4");
        price_h4.className = "mb-3";
        price_h4.id = "price_h4";
        price_h4.innerText = "Price: $" + pCost;
        cardFooterDiv.appendChild(price_h4);

        var addCart = document.createElement("a");
        addCart.className = "btn btn-sm btn-outline-primary btn-pill transition-3d-hover px-5";
        addCart.innerText = "Add to cart";
        addCart.onclick = function () {
            addToCart(this);
        };
        cardFooterDiv.appendChild(addCart);

        var seeMore = document.createElement("span");
        seeMore.className = "see-more";
        seeMore.innerText = "See More";
        seeMore.onclick = function () {
            toggleDescription(this);
        };
        cardFooterDiv.appendChild(seeMore);

        var descriptionDiv = document.createElement("div");
        descriptionDiv.className = "description";
        descriptionDiv.style.height = "0";
        descriptionDiv.style.overflow = "hidden";
        descriptionDiv.style.backgroundColor = "rgba(0,0,0,.03)";
        cardDiv.appendChild(descriptionDiv);

        var description_p = document.createElement("p");
        description_p.innerText = "\n" + pDescription;
        descriptionDiv.appendChild(description_p);
    }
};


//carrito
var cart = [];
function loadCart() {
    var cartData = localStorage.getItem('cart');
    if (cartData) {
        cart = JSON.parse(cartData);
    }
}

// Función para guardar el carrito en el localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para agregar un producto al carrito
function addToCart(button) {
    var cardDiv = button.parentElement.parentElement;
    var productName = cardDiv.querySelector(".h5").innerText;
    var productPrice = parseFloat(cardDiv.querySelector("#price_h4").innerText.replace("Price: $", ""));    
    var productImg =cardDiv.querySelector(".zoom-image").querySelector(".card-img-top").src;

    // Verificar si el producto ya está en el carrito
    var existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        // Si el producto ya está en el carrito, actualizar la cantidad
        existingProduct.quantity++;
    } else {
        // Si el producto no está en el carrito, agregarlo con cantidad 1
        cart.push({ name: productName, price: productPrice, quantity: 1, image: productImg });
    }

    // guardar el carrito en el localStorage
    saveCart();

    // mostrar mensaje de confirmación
    alert(productName + " added to cart!");
}

// inicializar el carrito al cargar la página
loadCart();


function toggleDescription(button) {
    var cardDiv = button.parentElement.parentElement;
    var descriptionDiv = cardDiv.querySelector(".description");

    if (descriptionDiv.style.height === "0px" || descriptionDiv.style.height === "") {
        descriptionDiv.style.height = "100%";
    } else {
        descriptionDiv.style.height = "0";
    }
}

function getSelectedValue(selectedCat) {
    console.log("Categoría seleccionada:", selectedCat);
    API_call(selectedCat);
}

API_call("all");
