let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let colorEl =  document.querySelector('#color')
let sizeEl = document.querySelector('#size')
let decrementEl = document.querySelector('#decrease')
let incrementEl = document.querySelector('#increase')
let clearEl = document.querySelector('#clear')
const canvasContainer = document.querySelector('.canvasContainer');

let size = +sizeEl.innerHTML
let color = 'black'
let x ;
let y ;
let isPressed = false;

canvas.width = canvasContainer.offsetWidth;
canvas.height = canvasContainer.offsetHeight;


colorEl.addEventListener('change', function(e){
    color = e.target.value
})

incrementEl.addEventListener('click', function(){
    if(size<=20){
        size++
    }
    sizeEl.innerHTML = String(size)
})

decrementEl.addEventListener('click', function(){
    if(size>=0){
        size--
    }
    sizeEl.innerHTML = String(size)
})

clearEl.addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('mousedown', function(e){
    isPressed = true
    x = e.offsetX
    y = e.offsetY   
})


canvas.addEventListener('mouseup', function(){
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', function(e){
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY
    
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }
})

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y , size,  0, Math.PI*2)
    ctx.fillStyle = color;
    ctx.fill()
}

// drawCircle(100, 200)

function drawLine(x1, y1, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

// drawLine(100, 200, 400, 500) 