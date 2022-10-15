var rgbString;
var hexString;

var RGBstring;

const hex_text = document.getElementById("hex_code");
const rgb_text = document.getElementById("rgb_code");

document.getElementById("hexcode").addEventListener("input", getHex);
function getHex() {
	RGBstring = document.getElementById("hexcode").value;
	rgb_text.innerHTML = "RGB Code = "+hexToRgb(RGBstring);
	document.getElementById("color").style.backgroundColor = hexToRgb(RGBstring);
}


	var R;
	document.getElementById("R").addEventListener("input", getR);
	function getR() {
		R = document.getElementById("R").value;
		rgbString = "rgb(" + R + "," + G + "," + B + ")";
		hex_text.innerHTML = "Hex Code = #"+rgbToHex(rgbString);
		document.getElementById("color").style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";
	}

	var G;
	document.getElementById("G").addEventListener("input", getG);
	function getG() {
		G = document.getElementById("G").value;
		rgbString = "rgb(" + R + "," + G + "," + B + ")";
		hex_text.innerHTML = "Hex Code = #"+rgbToHex(rgbString);
		document.getElementById("color").style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";
	}

	var B;
	document.getElementById("B").addEventListener("input", getB);
	function getB() {
		B = document.getElementById("B").value;
		rgbString = "rgb(" + R + "," + G + "," + B + ")";
		hex_text.innerHTML = "Hex Code = #"+rgbToHex(rgbString);
		document.getElementById("color").style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";
	}

	function componentFromStr(numStr, percent) {
		var num = Math.max(0, parseInt(numStr, 10));
		return percent ?
			Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
	}

	function rgbToHex(rgb) {
		var rgbRegex = /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/;
		var result, r, g, b, hex = "";
		if ((result = rgbRegex.exec(rgb))) {
			r = componentFromStr(result[1], result[2]);
			g = componentFromStr(result[3], result[4]);
			b = componentFromStr(result[5], result[6]);

			hex = (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
		}
		return hex;
	}

	function hexToRgb(c) {
		if (/^#([a-f0-9]{3}){1,2}$/.test(c)) {
			if (c.length == 4 || c.length == 5 || c.length == 6) {
				c = '#' + [c[1], c[1], c[2], c[2], c[3], c[3]].join('');
			}
			c = '0x' + c.substring(1);
			return 'rgb(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ')';
		}
		return '';
	}