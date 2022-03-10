particlesJS.load('particles-js', '/assets/particles.json', function() {
    console.log('particles.js loaded - callback');
});

function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}

window.onload = timedRefresh(1000*1*60*5);
//header/navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})