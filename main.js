canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="";
var lastpositionofx,lastpositionofy;
color="black";
Widthofline=2;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    Widthofline=document.getElementById("widthofline").value;
    mouseEvent="mousedown";
    }
    canvas.addEventListener("mousemove",my_mousemove);
    function my_mousemove(e){
        currentpositionofmousex=e.clientX-canvas.offsetLeft;
        currentpositionofmousey=e.clientY-canvas.offsetTop;
        if(mouseEvent=="mousedown"){
            ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.linewidth=Widthofline;
            ctx.moveTo(lastpositionofx,lastpositionofy);
            ctx.lineTo(currentpositionofmousex,currentpositionofmousey);
            ctx.stroke();
        }
        lastpositionofx=currentpositionofmousex;
        lastpositionofy=currentpositionofmousey;
    }
    canvas.addEventListener("mouseup",my_mouseup);
    function my_mouseup(e){
    mouseEvent="mouseup";
    }
    canvas.addEventListener("mouseleave",my_mouseleave);
    function my_mouseleave(e){
    mouseEvent="mouseleave";
    }
    function clear_area(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

    }