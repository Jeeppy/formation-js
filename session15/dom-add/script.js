document.write('test');

document.body.append('test');

let helloworld = document.createElement('div');
helloworld.textContent = "Hello world !";

//document.body.append(helloworld);
//document.body.appendChild(helloworld);
document.querySelector('.container').prepend(helloworld);