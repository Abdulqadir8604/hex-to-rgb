var rgbString;
var hexString;

const hex_text = document.getElementById("hex_code");

var R;
document.getElementById("R").addEventListener("input", getR);	
function getR() {
	R = document.getElementById("R").value;
	rgbString = "rgb("+R+","+G+","+B+")";
	hex_text.innerHTML = rgbToHex(rgbString);
	document.getElementById("color").style.backgroundColor = "rgb("+R+","+G+","+B+")";
}

var G;
document.getElementById("G").addEventListener("input", getG);	
function getG() {
	G = document.getElementById("G").value;
	rgbString = "rgb("+R+","+G+","+B+")";
	hex_text.innerHTML = rgbToHex(rgbString);
	document.getElementById("color").style.backgroundColor = "rgb("+R+","+G+","+B+")";
}

var B;
document.getElementById("B").addEventListener("input", getB);	
function getB() {
	B = document.getElementById("B").value;
	rgbString = "rgb("+R+","+G+","+B+")";
	hex_text.innerHTML = rgbToHex(rgbString);
	document.getElementById("color").style.backgroundColor = "rgb("+R+","+G+","+B+")";
}

function componentFromStr(numStr, percent) {
    var num = Math.max(0, parseInt(numStr, 10));
    return percent ?
        Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
}

function rgbToHex(rgb) {
    var rgbRegex = /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/;
    var result, r, g, b, hex = "";
    if ( (result = rgbRegex.exec(rgb)) ) {
        r = componentFromStr(result[1], result[2]);
        g = componentFromStr(result[3], result[4]);
        b = componentFromStr(result[5], result[6]);
    
        hex = (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return hex;
}