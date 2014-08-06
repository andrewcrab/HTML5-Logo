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

    var drawRect = canvas.drawRect = function(x,y,width,height){
        cxt.strokeRect(x,y,width,height);
    };

    var drawCircle = canvas.drawCircle = function(x,y,radius){
        cxt.beginPath();
        cxt.arc(x,y,radius,0,Math.PI*2);
        cxt.closePath();
        cxt.stroke();
    };

    var drawLine = canvas.drawLine = function(x1,y1,x2,y2){
        cxt.beginPath();
        cxt.moveTo(x1,y1);
        cxt.lineTo(x2,y2);
        cxt.closePath();
        cxt.stroke();
    };

    var drawText = canvas.drawText = function(text,x,y){
        cxt.fillText(text,x,y);
    };

    var setCanvasContext = canvas.setCanvasContext = function(canvasId){
        myCanvas = ac.canvas = this.document.getElementById(canvasId);
        cxt = ac.cxt = myCanvas.getContext("2d");
    };
    /*
     Canvas Package End
     */
})();

