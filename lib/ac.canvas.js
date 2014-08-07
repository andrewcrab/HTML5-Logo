/**
 * Created by Andrew on 14-8-6.
 */
(function(){
    var ac = this.ac = {};

    /*
     Canvas Package Begin
     */
    (function(){
        var canvas = ac.canvas = {};

        var myCanvas = canvas.myCanvas= this.document.getElementById("canvas");
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
        var drawImage = canvas.drawImage = function drawImage(src,x,y){
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
        var fillCircleMask = canvas.fillCircleMask = function(x,y,radius){
            cxt.beginPath();
            cxt.moveTo(0,0);
            cxt.lineTo(x,0);
            cxt.lineTo(x,y-radius);
            cxt.arcTo(x,y-radius,x,y+radius,radius);
            cxt.lineTo(x,canvasHeight);
            cxt.lineTo(0,canvasHeight);
            cxt.closePath();
            cxt.fill();
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
        var setCanvas = canvas.setCanvas = function(canvasId){
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
        var moveCanvas = canvas.moveCanvas = function(x,y){
            cxt.translate(x,y);
            return canvas;
        };

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
    })();

    /*
     Canvas Package End
     */







})();

