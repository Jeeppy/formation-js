let button = document.querySelector("#mode");
let span = button.querySelector('span');

if (localStorage.getItem("theme") && localStorage.getItem("theme") === 'sombre')
{
    modeSombre();
}

button.addEventListener('click', () => {
    if (document.body.classList.contains('dark'))
    {
        document.body.classList = '';
        span.textContent = "Thème sombre";
        localStorage.setItem("theme", "clair");
    } else {
        modeSombre();
    }
})

function modeSombre() {
    document.body.classList.add('dark');
    span.textContent = "Thème clair";
    localStorage.setItem("theme", "sombre");
}