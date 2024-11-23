/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*Menu show*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

/*Menu hidden*/
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu');
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER POPULAR ===============*/
const swiperPopular = new Swiper('.popular__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
  });

  const swiper = new Swiper('.product__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1700,
    delay: 300,
    // reset: true,
})

sr.reveal(`.home__data, .popular__container, .footer, .grid-container`)
sr.reveal(`.home__banner`, {delay: 700, distance:'100px', origin: 'right'})
sr.reveal(`.about__data`, {origin: 'right'})
sr.reveal(`.card-container`, {origin: 'left'})
sr.reveal(`.products__card`, {interval: 100})


/**/
document.addEventListener("DOMContentLoaded", () => {
  const reviewForm = document.getElementById('review-form');
  const reviewInput = document.getElementById('review-input');
  const reviewRating = document.getElementById('review-rating');

  reviewForm.addEventListener('submit', (event) => {
      event.preventDefault();

      // Obtener la calificación y el texto de la reseña
      const rating = reviewRating.value;
      const reviewText = reviewInput.value;

      // Crear el nuevo div de la reseña
      const newReview = document.createElement('div');
      newReview.classList.add('review');

      // Agregar la calificación (estrellas)
      const ratingDiv = document.createElement('div');
      ratingDiv.classList.add('rating');
      const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating); // Mostrar las estrellas
      ratingDiv.innerHTML = `<span class="star-rating">${stars}</span>`;
      newReview.appendChild(ratingDiv);

      // Agregar el texto de la reseña
      const reviewTextDiv = document.createElement('p');
      reviewTextDiv.textContent = reviewText;
      newReview.appendChild(reviewTextDiv);

      // Agregar la nueva reseña al contenedor de reseñas
      const reviewsList = document.getElementById('reviews-list');
      reviewsList.appendChild(newReview);

      // Limpiar el formulario
      reviewInput.value = '';
  });
});


/*buscamos la parte del loguin*/




function getStoredUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

// Verificar si el usuario ya está autenticado
function checkLoginStatus() {
  console.log("hola mundo!")
// Verificar si el usuario está autenticado
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn) {
      // Obtener los datos del usuario desde el localStorage
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      
      // Modificar el HTML de la sección de login
      const loginCart = document.querySelector('.nav__login-cart');
      loginCart.innerHTML = `
    <div class="nav__login-cart">
        <div > 
          <div class="user-info" id="userInfo" onClick = "prueba()">
              <img src="https://via.placeholder.com/200x300?text=${loggedInUser.firstName[0]}" alt="Foto de usuario" class="user-photo">
              <span class="user-name">${loggedInUser.firstName}</span>
          </div>
          <div class="logout-menu" id="logoutMenu">
              <a href="profile.html">Perfil</a>
              <br>
              <a href="javascript:void(0);" onclick="logout()">Cerrar sesión</a>
          </div>
        </div>
        <div class="cart">
          <i class="ri-shopping-cart-line"></i>
          <a href="">Carrito</a>
      </div>
    </div>

  `;
  
  }

}


function prueba () {
  const logoutMenu = document.getElementById("logoutMenu");
  if(logoutMenu.style.display == "block"){
    logoutMenu.style.display = "none";
  }else{
    logoutMenu.style.display = "block";
  }
}


// Cerrar sesión
function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('loggedInUser');
  // Redirigir a la página de login o página pública
  
}

// Verificar al cargar la página si el usuario está autenticado

function logout() {
    // Remover el estado de sesión
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html'; // Redirige a la página de login
}



checkLoginStatus();

