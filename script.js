var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Diane Santana')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Estudiante de Ingles')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Amantes de los perritos')
    .pauseFor(1500)
    .start();