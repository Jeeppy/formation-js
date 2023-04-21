let a = document.querySelector('a');
let button = document.querySelector('button');

a.addEventListener('click', (e) => {
    if (confirm("Êtes-vous sûr ?")) {
        location.href= "http://www.google.com";
    }
});

button.addEventListener('mouseover', () => {
    document.querySelector('body').style.backgroundColor = "#fcae1e";
});
button.addEventListener('mouseleave', () => {
    document.querySelector('body').style.backgroundColor = "#ffffff";
});