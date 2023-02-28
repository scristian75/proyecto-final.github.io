const button = document.querySelector ('.button')
const menu_items = document.querySelector ('.menu_items')
button.addEventListener('click', () => {
  menu_items.classList.toggle('activo')
})