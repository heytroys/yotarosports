const move = function() {
    const target = document.getElementsByClassName("img");
    const object = document.getElementsByClassName("mae");

    const position = Math.floor(window.innerHeight * 1.30);
    const place = Math.floor(window.innerHeight * 1.30);

    for (let i = 0; i < target.length; i++) {
        let offsetTop = Math.floor(target[i].getBoundingClientRect().top);

        if (offsetTop < position) {
            target[i].classList.add("animate__animated", "animate__zoomInLeft", "img-after", "ato");
        }
    }
    
    for (let i = 0; i < object.length; i++) {
        let startTop = Math.floor(object[i].getBoundingClientRect().top);

        if (startTop < place) {
            target[i].classList.add("ato");
        }
    }
}

window.addEventListener("scroll", move, false);
