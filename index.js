var menu_bar = document.getElementById('menu_bar');
var nav_links_mobile = document.querySelector('.nav_links_mobile');

console.log(menu_bar); // Check that the menu_bar element is selected correctly
console.log(nav_links_mobile); // Check that the nav_links_mobile element is selected correctly

menu_bar.addEventListener('click', function() {
  console.log('Clicked'); // Check if the event listener is working
  nav_links_mobile.classList.toggle('active');
});