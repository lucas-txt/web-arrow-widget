var perguntasSeta = document.getElementsByClassName('triangulo')
function mexeuSetas(event) {
    event.currentTarget.style.width = '90%'
    event.currentTarget.style.clipPath = 'polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%)'
}
function saiuSetas(event) {
    event.currentTarget.style.width = '20%'
    event.currentTarget.style.clipPath = 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)'
}



var perguntasRetangulo = document.getElementsByClassName("retangulo")
function mexeuRetangulo(event) {
    event.currentTarget.style.width = '70%'
}
function saiuRetangulo(event) {
    event.currentTarget.style.width = '20%'
}

for (var i = 0; i < perguntasSeta.length; i++) {
    perguntasSeta[i].addEventListener("mousemove", mexeuSetas)
    perguntasSeta[i].addEventListener("mouseout", saiuSetas)
}
