/**
 * Created by Andrew on 14-8-6.
 */

/*
 **Draggable Package Start
 */
(function(){
    var draggable = ac.draggable = {};

    ac.canvas.myCanvas.addEventListener("mousedown",onMouseDown,false);
    ac.canvas.myCanvas.addEventListener("mousemove",onMouseMove,false);
    ac.canvas.myCanvas.addEventListener("mouseup",onMouseUp,false);

    var itemsOnCanvas = ac.draggable.itemsOnCanvas = [];

    var isMouseDown = false;

    function onMouseDown(){
        isMouseDown = true;
    };

    function onMouseMove(e){
        if(isMouseDown){
            console.log("move");
            var ball = itemsOnCanvas[0];
            ball.x = e.layerX;
            ball.y = e.layerY;
            ac.canvas.clearCanvas();
            ball.draw();
        }
    };

    function onMouseUp(){
        isMouseDown = false;
    };

    var Ball = draggable.Ball = {
        create:function(x,y,radius){
            var obj = {};
            obj.x = x;
            obj.y = y;
            obj.radius = radius;

            obj.draw = function(){
                ac.canvas.fillCircle(x,y,radius);
            };

            itemsOnCanvas.push(obj);
            return obj;
        }
    };

    var Rect = draggable.Rect = {
        create:function(x,y,width,height){
            var obj = {};
            obj.x = x;
            obj.y = y;
            obj.width = width;
            obj.height = height;

            obj.draw = function(){
                ac.canvas.fillRect(x,y,width,height);
            };

            itemsOnCanvas.push(obj);
            return obj;
        }
    };


})();
/*
 **Draggable Package End
 */



ac.draggable.Ball.create(100,100,30).draw();
