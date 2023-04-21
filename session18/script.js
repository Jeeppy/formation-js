let body = document.querySelector("body");
body.style.margin = 0;

let header = document.createElement("header");
header.innerHTML = "<header>Bienvenue</header>";
header.style.backgroundColor = "#e3b04b";
header.style.textAlign = "center";
header.style.color = "#ffffff";
header.style.fontSize = "2em";
header.style.paddingTop = "0.5em";
header.style.paddingBottom = "0.5em";

let nav = document.createElement("nav");
nav.innerHTML = "<div><a href='#'>Accueil</a> / <a href='#'>Une autre page</a></div>";
nav.style.backgroundColor = "#f1d6ab";
nav.style.paddingTop = "0.5em";
nav.style.paddingBottom = "0.5em";
nav.style.paddingLeft = "1em";

let text = document.createElement("paragraphe");
text.innerHTML = "<p>Ceci est un paragraphe créé avec javascript</p>";
text.style.textIndent = "1em";

document.body.append(header, nav, text);

document.querySelector("#a-supprimer").remove();

console.log("ok");