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

    var drawText = canvas.drawText = function(text,x,y){
        cxt.fillText(text,x,y);
        return canvas;

    };

    var setCanvasContext = canvas.setCanvasContext = function(canvasId){
        myCanvas = ac.canvas = this.document.getElementById(canvasId);
        cxt = ac.cxt = myCanvas.getContext("2d");
        return canvas;
    };

    var setCanvasSize = canvas.setCanvasSize = function(width, height){
        canvasWidth = width;
        canvasHeight = height;
        return canvas;
    };

    var setFontStyle = canvas.setFontStyle = function(fontSize, fontFamily){
        var font = "" + fontSize + "px '" + fontFamily;
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
    }
    /*
     Canvas Package End
     */
})();

ac.canvas
    .setFontStyle(65, "Gill Sans Ultra Bold")
    .drawText("HTML5",31,60)
    .setFillStyle("#E34C26")
    .fillPoly(39,250,17,0,262,0,239,250,139,278)
    .setFillStyle("#F06529")
    .fillPoly(139,257,220,234,239,20,139,20)
    .setFillStyle("#EBEBEB")
    .fillPoly(139,113,98,113,96,82,139,82,139,51,62,51,70,144,139,144)
    .fillPoly(139,193,105,184,103,159,72,159,76,207,139,225)
    .setFillStyle("#FFFFFF")
    .fillPoly(139,113,139,144,177,144,173,184,139,193,139,225,202,207,210,113)
    .fillPoly(139,51,139,82,213,82,216,51);
