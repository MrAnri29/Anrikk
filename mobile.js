let wassup = document.getElementById('welcometoesta')
let banner1 = document.getElementById('banner1')
let header = document.getElementById('sticky')

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  wassup.style.marginLeft = value + 'px';
})
window.addEventListener('scroll', function(){
  let value = window.scrollY;
  if(value > 1800){
    header.style.opacity = '0';
  }
  else{
    header.style.opacity = '1';
  }
})