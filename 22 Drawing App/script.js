const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let size = 20
let color = 'black'


function drawCircle(x,y){
    ctx.beginPath()
    ctx.arc(x,y,size,0,Math.PI*2)
    ctx.fillStyle = color
    ctx.fill()

}


drawCircle(100,200)