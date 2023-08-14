const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;

const mainFn = () => {
    if (window.pageYOffset >= navbarOffsetTop) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
}