/**
 * Created by Andrew on 14-8-6.
 */
var ctx;
var factor = 1;
var fontFamily = "65px 'Gill Sans Ultra Bold', sans-serif";

init();

function init(){
    ctx= this.document.getElementById("canvas").getContext("2d");
    ctx.font = fontFamily;
    ctx.save();
    dologo();
};

function dologo(){
    var offsety = 80;
    ctx.restore();
    ctx.save();

    ctx.clearRect(0,0,600,400);
    ctx.scale(factor,factor);

    ctx.fillText("HTML5", 31,60);
};

