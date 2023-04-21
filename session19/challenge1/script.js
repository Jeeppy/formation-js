let a = document.querySelector("a")
let button = document.querySelector("button");

a.onclick = () => {
    if (confirm("Êtes-vous sûr ?")) {
        location.href= "http://www.google.com";
    }
};

button.onmouseover = () => {
    document.querySelector('body').style.backgroundColor = "#fcae1e";
}

button.onmouseleave = () => {
    document.querySelector('body').style.backgroundColor = "#ffffff";
}