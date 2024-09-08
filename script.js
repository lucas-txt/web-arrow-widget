var perguntas = document.getElementsByClassName('triangulo')



perguntas.forEach(element => {
   element.addEventListener('mousemove', () => {mexeu(element)})
   element.addEventListener('mouseout', () => {saiu(element)})
});

function mexeu(element) {
    element.style.width = '70%'
    element.style.clipPath = 'polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%)' 
}

function saiu(element) {
    element.style.width = '20%'
    element.style.clipPath = 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)'
}
        // perguntas[0].addEventListener('mousemove', mexeu_0)
        // perguntas[0].addEventListener('mouseout', saiu_0)
        // perguntas[1].addEventListener('mousemove', mexeu_1)
        // perguntas[1].addEventListener('mouseout', saiu_1)
        // perguntas[2].addEventListener('mousemove', mexeu_2)
        // perguntas[2].addEventListener('mouseout', saiu_2)

        // function mexeu_0() {
        //     perguntas[0].style.width = '70%'
        //     perguntas[0].style.clipPath = 'polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%)' 
        // }

        // function saiu_0() {
        //     perguntas[0].style.width = '20%'
        //     perguntas[0].style.clipPath = 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)'
        // }

        // function mexeu_1() {
        //     perguntas[1].style.width = '70%'
        //     perguntas[1].style.clipPath = 'polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%)'
        // }

        // function saiu_1() {
        //     perguntas[1].style.width = '20%'
        //     perguntas[1].style.clipPath = 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)'
        // }
        
        // function mexeu_2() {
        //     perguntas[2].style.width = '70%'
        //     perguntas[2].style.clipPath = 'polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%)'
        // }

        // function saiu_2() {
        //     perguntas[2].style.width = '20%'
        //     perguntas[2].style.clipPath = 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)'
        // }