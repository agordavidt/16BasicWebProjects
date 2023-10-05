const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);

console.log(bottomContainerEl.offserTop);


window.addEventListener("scroll", () => {
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active")
    }
});