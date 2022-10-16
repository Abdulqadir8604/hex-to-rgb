var rgbString;
var hexString;

var RGBstring;

const hex_text = document.getElementById("hex_code");
const rgb_text = document.getElementById("rgb_code");

document.getElementById("hexcode").addEventListener("input", getHex);
function getHex() {
	RGBstring = document.getElementById("hexcode").value;
	rgb_text.innerHTML = "RGB Code = " + hexToRgb(RGBstring);
	document.getElementById("color").style.backgroundColor = hexToRgb(RGBstring);
}

	var R;
	document.getElementById("R").addEventListener("input", getR);
	function getR() {
		R = document.getElementById("R").value;
		rgbString = "rgb(" + R + "," + G + "," + B + ")";
		hex_text.innerHTML = "Hex Code = " + rgbToHex(R, G, B);
		document.getElementById("color").style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";
	}

	var G;
	document.getElementById("G").addEventListener("input", getG);
	function getG() {
		G = document.getElementById("G").value;
		rgbString = "rgb(" + R + "," + G + "," + B + ")";
		hex_text.innerHTML = "Hex Code = " + rgbToHex(100, 255, 101);
		document.getElementById("color").style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";
	}

	var B;
	document.getElementById("B").addEventListener("input", getB);
	function getB() {
		B = document.getElementById("B").value;
		rgbString = "rgb(" + R + "," + G + "," + B + ")";
		hex_text.innerHTML = "Hex Code = " + rgbToHex(R, G, B);
		document.getElementById("color").style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";
	}

	function rgbToHex(r, g, b) {
		if (r > 255 || g > 255 || b > 255)
			throw "Invalid color component";

		rgb_text.innerHTML = "RGB Code = " + rgbString;
		return ("#" + ((r << 16) | (g << 8) | b).toString(16)).toUpperCase();
	}

	function hexToRgb(c) {
		var hex = c.replace('#', '');
		var bigint = parseInt(hex, 16);
		var r = (bigint >> 16) & 255;
		var g = (bigint >> 8) & 255;
		var b = bigint & 255;
		hex_text.innerHTML = "Hex Code = #" + RGBstring.toUpperCase();
		return "rgb(" + r + "," + g + "," + b + ")";
	}