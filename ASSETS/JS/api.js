const API_call = async (selectedCat) => {
    const APIResponse = await fetch('https://fakestoreapi.com/products/category/' + selectedCat);
    const products = await APIResponse.json();

    // Obtener el contenedor de productos
    var productContainer = document.getElementById("productContainer");

    // Limpiar contenido anterior
    productContainer.innerHTML = "";

    for (var i = 0; i < products.length; i++) {
        var pName = products[i].title;
        var pCost = products[i].price;
        var pDesc = products[i].description;
        var pCat = products[i].category;
        var pImg = products[i].image;

        var productDiv = document.createElement("div");
        productContainer.appendChild(productDiv);

        var name_h2 = document.createElement("h2");
        name_h2.innerText = "Producto";
        productDiv.appendChild(name_h2);

        var name_h4 = document.createElement("h4");
        name_h4.innerText = pName;
        productDiv.appendChild(name_h4);

        var cost_h2 = document.createElement("h2");
        cost_h2.innerText = "Costo";
        productDiv.appendChild(cost_h2);

        var cost_h4 = document.createElement("h4");
        cost_h4.innerText = pCost;
        productDiv.appendChild(cost_h4);

        var desc_h2 = document.createElement("h2");
        desc_h2.innerText = "Descripción";
        productDiv.appendChild(desc_h2);

        var desc_h4 = document.createElement("h4");
        desc_h4.innerText = pDesc;
        productDiv.appendChild(desc_h4);

        var cat_h2 = document.createElement("h2");
        cat_h2.innerText = "Categoría";
        productDiv.appendChild(cat_h2);

        var cat_h4 = document.createElement("h4");
        cat_h4.innerText = pCat;
        productDiv.appendChild(cat_h4);

        var img_h2 = document.createElement("h2");
        img_h2.innerText = "Imágen";
        productDiv.appendChild(img_h2);

        var img_elem = document.createElement("img");
        img_elem.src = pImg;
        productDiv.appendChild(img_elem);
    }
};

function getSelectedValue() {
    var selectedCat = document.getElementById("categorySelect").value;
    console.log("Categoría seleccionada:", selectedCat);
    API_call(selectedCat);
}

API_call("electronics")
