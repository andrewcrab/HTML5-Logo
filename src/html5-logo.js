/**
 * Created by Andrew on 14-8-6.
 */

ac.canvas
    .setFontStyle(62, "Arial Black")
    .drawText("HTML5",26,60)
    .moveCanvas(0,70)
    .setFillStyle("#E34C26") //Shield Back
    .fillPoly(39,250,17,0,262,0,239,250,139,278)
    .setFillStyle("#F06529") //Shield Front
    .fillPoly(139,257,220,234,239,20,139,20)
    .setFillStyle("#EBEBEB") //5 Left
    .fillPoly(139,113,98,113,96,82,139,82,139,51,62,51,70,144,139,144)
    .fillPoly(139,193,105,184,103,159,72,159,76,207,139,225)
    .setFillStyle("#FFFFFF") //5 Right
    .fillPoly(139,113,139,144,177,144,173,184,139,193,139,225,202,207,210,113)
    .fillPoly(139,51,139,82,213,82,216,51);