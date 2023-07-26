// Tu código JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Obtenemos los elementos relevantes
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');
    const dropdownItems = document.querySelectorAll('.nav__tab--item.dropdown');
  
    // Función para ocultar todos los submenús
    function hideDropdowns() {
      dropdownItems.forEach((item) => {
        item.classList.remove('active');
      });
    }
  
    // Evento para desplegar/ocultar menú hamburguesa
    hamburger.addEventListener('click', () => {
      navigation.classList.toggle('active');
      hideDropdowns(); // Ocultar todos los submenús si están abiertos
    });
  
    // Evento para desplegar/ocultar submenú
    dropdownItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.stopPropagation();
        hideDropdowns(); // Ocultar todos los submenús antes de mostrar el actual
        item.classList.toggle('active');
      });
    });
  
    // Evento para ocultar menú desplegable cuando se hace clic en otro lugar de la página
    document.addEventListener('click', () => {
      hideDropdowns();
    });
  });
  