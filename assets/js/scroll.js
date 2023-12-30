const move = function() {
    const target = document.getElementsByClassName("img");

    const position = Math.floor(window.innerHeight * 1.30);

    for (let i = 0; i < target.length; i++) {
        let offsetTop = Math.floor(target[i].getBoundingClientRect().top);

        if (offsetTop < position) {
            target[i].classList.add("animate__animated", "animate__zoomInLeft", "img-after");
        }
    }
}

const fadeUp = function() {
    let target = document.getElementsByClassName("before-content");
    let position = Math.floor(window.innerHeight * 1.30);

    for (let i = 0; i < target.length; i++) {
        let offsetTop = Math.floor(target[i].getBoundingClientRect().top);

        if (offsetTop < position) {
            target[i].classList.add("after-content");
        }
    }
}

window.addEventListener("scroll", move, false);
window.addEventListener("scroll", fadeUp, false);
