let img_product = 'product-'
let extension = '.jpg'


// Seleccionamos el contenedor donde se agregarán los productos
const productsContainer = document.getElementById('products-container');

// Repetimos el artículo 5 veces
for (let i = 1; i <= 40; i++) {
    // Modificamos la variable (en este caso, el precio y el nombre)
    let productName = `Producto N${i}`;  // Producto dinámico
    let description = `Aqui va una descripción`
    let productPrice = `$19,000`;  // Precio dinámico
    
    // Creamos el artículo con el nombre y precio dinámico
    const articleHTML = `
        <article class="card_product" data-id="${i}">
            <div class="products__img-container">
                <img src="assets/products/product-${i}.jpg" alt="image" class="products__img">
            </div>
            <h3 class="products__name">${productName}</h3>
            <span class ="description"> ${description} </span>
            <br>
            <span class="products__price">${productPrice}</span>
            <button class="products__button">
                <i class="ri-shopping-bag-3-fill"></i>
            </button>
        </article>

    `;
    
    // Añadimos el artículo al contenedor
    productsContainer.innerHTML += articleHTML;
}

// Seleccionamos todos los artículos de producto
const productArticles = document.querySelectorAll('.card_product');

// Recorremos cada artículo
productArticles.forEach(article => {
    // Añadimos el evento de clic a cada artículo
    article.addEventListener('click', function () {
        // Obtenemos el id del producto desde el atributo data-id
        const productId = article.getAttribute('data-id');
        
        // Redirigimos a la página de detalles pasando el id del producto en la URL
        window.location.href = `sproduct.html?id=${productId}`;
    });
});

checkLoginStatus();