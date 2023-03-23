const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        //pegando a posição x e y em relação a viewport toda
        const x = e.clientX
        const y = e.clientY

        //posição da parte superior do botao e da esquerda em relação a viewport(dará sempre o mesmo valor porque é sempre no msm lugar a referencia)
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // pegando somente o correspondente dentro do botao
        const xInside = x-buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})