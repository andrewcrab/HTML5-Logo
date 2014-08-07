/**
 * Created by Andrew on 14-8-6.
 */
(function(){
    var ac = this.ac = {};

    /*
     Canvas Package Begin
     */
    var canvas = ac.canvas = {};

    var myCanvas = this.document.getElementById("canvas");
    var cxt = myCanvas.getContext("2d");

    var canvasWidth = 600;
    var canvasHeight = 400;

    /*
    ** Drawing Function
     */
    var drawRect = canvas.drawRect = function(x,y,width,height){
        cxt.strokeRect(x,y,width,height);
        return canvas;

    };
    var drawCircle = canvas.drawCircle = function(x,y,radius){
        cxt.beginPath();
        cxt.arc(x,y,radius,0,Math.PI*2);
        cxt.closePath();
        cxt.stroke();
        return canvas;

    };
    var drawLine = canvas.drawLine = function(x1,y1,x2,y2){
        cxt.beginPath();
        cxt.moveTo(x1,y1);
        cxt.lineTo(x2,y2);
        cxt.closePath();
        cxt.stroke();
        return canvas;

    };
    var drawPoly = canvas.drawPoly = function(points){
        var x1 = arguments[0];
        var y1 = arguments[1];
        var len = arguments.length/2;

        cxt.beginPath();
        cxt.moveTo(x1,y1);

        for (var i = 1; i < len; i++){
            cxt.lineTo(arguments[i*2],arguments[i*2+1]);
        }

        cxt.closePath();
        cxt.stroke();
        return canvas;
    };
    var drawText = canvas.drawText = function(text,x,y){
        cxt.fillText(text,x,y);
        return canvas;

    };
    var drawImage = canvas.drawImage = function(src,x,y){
        var image = new Image();
        image.src = src;
        if(image.complete){
            cxt.drawImage(image,x,y);
        }else{
            image.onload = function(){
                cxt.drawImage(image,x,y);
            }
        }

        return canvas;
    };
    var fillRect = canvas.fillRect = function(x,y,width,height){
        cxt.fillRect(x,y,width,height);
        return canvas;

    };
    var fillCircle = canvas.fillCircle = function(x,y,radius){
        cxt.beginPath();
        cxt.arc(x,y,radius,0,Math.PI*2);
        cxt.closePath();
        cxt.fill();
        return canvas;

    };
    var fillPoly = canvas.fillPoly = function(points){
        var x1 = arguments[0];
        var y1 = arguments[1];
        var len = arguments.length/2;

        cxt.beginPath();
        cxt.moveTo(x1,y1);

        for (var i = 1; i < len; i++){
            cxt.lineTo(arguments[i*2],arguments[i*2+1]);
        }

        cxt.closePath();
        cxt.fill();
        return canvas;
    };

    /*
    ** Pen Configuration
     */
    var setFontStyle = canvas.setFontStyle = function(fontSize, fontFamily){
        var font = "" + fontSize + "px " + fontFamily;
        cxt.font = font;
        return canvas;

    };
    var setFillStyle = canvas.setFillStyle = function(color){
        cxt.fillStyle = color;
        return canvas;
    };
    var setStrokeStyle = canvas.setStrokeStyle = function(color){
        cxt.strokeStyle(color);
        return canvas;
    };

    /*
    ** Canvas Configuration
     */
    var moveCanvas = canvas.moveCanvas = function(x,y){
        cxt.translate(x,y);
        return canvas;
    };
    var setCanvas = canvas.setCanvas = function(canvasID){
        myCanvas = ac.canvas = this.document.getElementById(canvasId);
        cxt = ac.cxt = myCanvas.getContext("2d");
        return canvas;
    };
    var setCanvasSize = canvas.setCanvasSize = function(width, height){
        canvasWidth = width;
        canvasHeight = height;
        return canvas;
    };

    /*
    **Other Utilities
     */
    var clearCanvas = canvas.clearCanvas = function(){
        cxt.clearRect(0,0,canvasWidth,canvasHeight);

        return canvas;
    };
    var saveImage = canvas.saveImage = function(){
        try{
            window.open(myCanvas.toDataURL("image/png"));
        }catch(e){
            alert("Your browser do not support image saving.");
        }

        return canvas;
    };
    /*
     Canvas Package End
     */

    /*
    **Draggable Package Start
     */
    var draggable = ac.draggable = {};

    myCanvas.addEventListener("mousedown",onMouseDown);
    myCanvas.addEventListener("mousemove",onMouseMove);
    myCanvas.addEventListener("mouseup",onMouseUp);

    var onMouseDown, onMouseMove, onMouseUp;

    var Ball = draggable.Ball =  function(x,y,radius,color){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
        this.draw = function(){
            canvas
                .setFillStyle(color)
                .fillCircle(x,y,radius);
        };
    };
    var Image = draggable.Image = function(src,x,y){
        this.x = x;
        this.y = y;
        this.src = src;
        this.draw = function(){
          canvas.
              drawImage(this.src,this.x,this.y);
        };
    };

    /*
    **Draggable Package End
     */
})();

//ac.canvas.drawImage("/resource/pic1.jpg",150,150);
//var b = new ac.draggable.Ball(100,100,20,'blue');
//var i = new ac.draggable.Image("/resource/pic1.jpg",150,150);
//b.draw();
//i.draw();

