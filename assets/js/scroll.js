const move = function() {
    const target = document.getElementsByClassName("img", "mae");

    const position = Math.floor(window.innerHeight * 1.30);

    for (let i = 0; i < target.length; i++) {
        let offsetTop = Math.floor(target[i].getBoundingClientRect().top);

        if (offsetTop < position) {
            target[i].classList.add("animate__animated", "animate__zoomInLeft", "img-after", "ato");
        }
    }
}

window.addEventListener("scroll", move, false);
