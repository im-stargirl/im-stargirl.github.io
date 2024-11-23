
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el id del producto de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Verifica que el id sea válido
    if (!productId) {
        console.error("No se encontró el id del producto en la URL");
        return;
    }

    const img_product = 'product-';
    const extension = '.jpg';

    // Asegúrate de que el elemento de la imagen principal exista antes de modificarlo
    const mainImg = document.getElementById('MainImg');
    if (mainImg) {
        mainImg.src = `assets/products/${img_product}${productId}${extension}`;
    } else {
        console.error("No se encontró el elemento con id 'MainImg'");
    }

    // Cambiar las imágenes pequeñas si es necesario
    const smallImgs = document.querySelectorAll('.small-img');
    
    // Aquí, asumimos que las imágenes pequeñas siguen un patrón basado en el productId y un índice
    smallImgs.forEach((img, index) => {
        img.src = `assets/products/${img_product}${productId}${extension}`;
    });
});


checkLoginStatus();