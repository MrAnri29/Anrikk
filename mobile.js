let wassup = document.getElementById('welcometoesta')

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  wassup.style.marginLeft = value + 'px';
})