// https://seballot.github.io/spectrum/#toc0

const fishHead = $('#svgFishHead');
const fishBody1 = $('#svgFishBody1');
const fishBody2 = $('#svgFishBody2');
const fishBody3 = $('#svgFishBody3');
const fishBody4 = $('#svgFishBody4');
const fishBody5 = $('#svgFishBody5');
const fishTop = $('#svgFishTop');
const fishBottom = $('#svgFishBottom');
const fishTail = $('#svgFishTail');
fishHead.on('click', () => {    
    
})
fishBody1.on('click', () => {
    alert("fishBody1")
})
fishBody2.on('click', () => {
    alert("fishBody2")
})
fishBody3.on('click', () => {
    alert("fishBody3")
})
fishBody4.on('click', () => {
    alert("fishBody4")
})
fishBody5.on('click', () => {
    alert("fishBody5")
})
fishTop.on('click', () => {
    alert("fishTop")
})
fishBottom.on('click', () => {
    alert("fishBottom")
})
fishTail.on('click', () => {
    alert("fishTail")
})

$("#colorFishHead").spectrum({
    showPalette: false,
    showButtons: false,
    showAlpha: true,
    move: function(color){
        colorChange(fishHead, color)
    }
});
$("#colorFishBody1").spectrum({
    showPalette: false,
    showButtons: false,
    move: function(color){
        colorChange(fishBody1, color)
    }
});
$("#colorFishBody2").spectrum({
    showPalette: false,
    showButtons: false,
    move: function(color){
        colorChange(fishBody2, color)
    }
});
$("#colorFishBody3").spectrum({
    showPalette: false,
    showButtons: false,
    move: function(color){
        colorChange(fishBody3, color)
    }
});
$("#colorFishBody4").spectrum({
    showPalette: false,
    showButtons: false,
    move: function(color){
        colorChange(fishBody4, color)
    }
});
$("#colorFishBody5").spectrum({
    showPalette: false,
    showButtons: false,
    move: function(color){
        colorChange(fishBody5, color)
    }
});
$("#colorFishTop").spectrum({
    showPalette: false,
    showButtons: false,
    move: function(color){
        colorChange(fishTop, color)
    }
});
$("#colorFishBottom").spectrum({
    showPalette: false,
    showButtons: false,
    move: function(color){
        colorChange(fishBottom, color)
    }
});
$("#colorFishTail").spectrum({
    showPalette: false,
    //showButtons: false,
    change: function(color){
        colorChange(fishTail, color)
    }
});

const colorChange = function(obj, color) {
    let _color = color.toRgb();
    let haxcode = "rgb("+_color.r+","+_color.g+","+_color.b+")";
    let _obj = obj;
    console.log(haxcode)
    if(_color.a < 1){
        $(_obj).css({"fill": rgb2hex(haxcode), "fill-opacity": _color.a})
    }else{
        $(_obj).css({"fill": rgb2hex(haxcode)})
    }
    

    
}



function defatulColorSet(){
    // 물고기 색 피커 세팅
    const defaultHeadColor = fishHead.css("fill");
    const defaultBody1Color = fishBody1.css("fill");
    const defaultBody2Color = fishBody2.css("fill");
    const defaultBody3Color = fishBody3.css("fill");
    const defaultBody4Color = fishBody4.css("fill");
    const defaultBody5Color = fishBody5.css("fill");
    const defaultTopColor = fishTop.css("fill");
    const defaultBottomColor = fishBottom.css("fill");
    const defaultTailColor = fishTail.css("fill");
    
    $("#colorFishHead").spectrum("set", rgb2hex(defaultHeadColor));
    $("#colorFishBody1").spectrum("set", rgb2hex(defaultBody1Color));
    $("#colorFishBody2").spectrum("set", rgb2hex(defaultBody2Color));
    $("#colorFishBody3").spectrum("set", rgb2hex(defaultBody3Color));
    $("#colorFishBody4").spectrum("set", rgb2hex(defaultBody4Color));
    $("#colorFishBody5").spectrum("set", rgb2hex(defaultBody5Color));
    $("#colorFishTop").spectrum("set", rgb2hex(defaultTopColor));
    $("#colorFishBottom").spectrum("set", rgb2hex(defaultBottomColor));
    $("#colorFishTail").spectrum("set", rgb2hex(defaultTailColor));
}
// rgb to hex 
function rgb2hex(rgb) {
    if (  rgb.search("rgb") == -1 ) {
         return rgb;
    } else {
         rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
         function hex(x) {
              return ("0" + parseInt(x).toString(16)).slice(-2);
         }
         return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]); 
    }
}

$(function(){
    //Init 
    defatulColorSet()
})