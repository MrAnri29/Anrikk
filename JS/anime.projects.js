const continer = document.querySelector('.container')
for (var i = 0; i <= 100; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    continer.appendChild(blocks);
    blocks.style.opacity = "1";
}

function animateBlocks() {
    anime({
        targets: '.block',
        translateY: function () {
            return anime.random(-400, 400);
        },
        translateX: function () {
            return anime.random(-700, 700);
        },
        scale: function () {
            return anime.random(1, 5);
        },

        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(10)
    })
}
animateBlocks()
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})