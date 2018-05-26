var drawPoints = [true, true];
var drawPolygons = [true, true];
var drawCurves = [true, true];

// Adiciona um ponto de controle na tela.
document.addEventListener("click", e => {
    insertPoint({
        x: e.offsetX,
        y: e.offsetY
    });
    draw();
});

// Permite mover um ponto ao clicar e arrastar.
var move = false;
document.addEventListener("mousedown", e => {
    move = checkProximity(new Point(e.offsetX, e.offsetY));
});

document.addEventListener("mousemove", e => {
    if(move !== false) {
        controlPoints[curve][move] = new Point(e.offsetX, e.offsetY);
        draw();
    }
});

document.addEventListener("mouseup", e => {
    move = false;
});

// Remover um ponto.
document.addEventListener("contextmenu", e => {
    e.preventDefault();

    removePoint(new Point(e.offsetX, e.offsetY));
    draw();
});

// Desenhar a curva.
document.addEventListener("keypress", e => {
    let key = e.which || e.keyCode;
    if (key === 49) // Pressionou Enter.
        curve = 0;
    else if(key === 50)
        curve = 1;
});