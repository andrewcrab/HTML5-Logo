/**
 * Created by Andrew on 14-8-7.
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
    var itemDragged = null;

    function onMouseDown(e){
        for (var i = itemsOnCanvas.length - 1; i >= 0; i--){
            if(itemsOnCanvas[i].testCollision(e.layerX, e.layerY)){
                itemDragged = itemsOnCanvas[i];
            }
        }
    };
    function onMouseMove(e){
        if(itemDragged){
            var item = itemDragged;
            item.x = e.layerX;
            item.y = e.layerY;
            ac.canvas.clearCanvas();
            item.draw();
        }
    };
    function onMouseUp(e){
        itemDragged = null;
    };

    var Ball = draggable.Ball = {
        create:function(x,y,radius){
            var obj = {};
            obj.x = x;
            obj.y = y;
            obj.radius = radius;

            obj.draw = function(){
                ac.canvas.fillCircle(obj.x,obj.y,obj.radius);
            };

            obj.testCollision = function(x,y){
                var distance = Math.sqrt((x-obj.x)*(x-obj.x)+(y-obj.y)*(y-obj.y));
                if(distance < obj.radius){
                    return true;
                }
                return false;
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