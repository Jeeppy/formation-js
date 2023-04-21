let button  = document.querySelector("button");
let p       = document.querySelector("p");
let hidden  = true;

p.style.display = "none";

button.addEventListener('click', () => {
    if (hidden) {
        button.textContent = "Cacher";
        p.style.display = "";
    } else {
        button.textContent = "Afficher";
        p.style.display = "none";
    }
    hidden = !hidden;
});