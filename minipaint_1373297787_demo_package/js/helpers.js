//get url param
function get_url_param(name){
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");  
	var regexS = "[\\?&]"+name+"=([^&#]*)";  
	var regex = new RegExp( regexS );  
	var results = regex.exec( window.location.href ); 
	if( results == null )    
		return "";  
	else    
		return results[1];
	}
function sleep(millis){
	var date = new Date();
	var curDate = null;
	do { curDate = new Date(); }
	while(curDate-date < millis);
	}
function js_dump(arr,level) {
	var dumped_text = "";
	if(!level) level = 0;
	
	//The padding given at the beginning of the line.
	var level_padding = "";
	for(var j=0;j<level+1;j++) level_padding += "    ";
	
	if(typeof(arr) == 'object') { //Array/Hashes/Objects 
		for(var item in arr) {
			var value = arr[item];
			
			if(typeof(value) == 'object') { //If it is an array,
				dumped_text += level_padding + "'" + item + "' ...\n";
				dumped_text += dump(value,level+1);
			} else {
				dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
			}
		}
	} else { //Stings/Chars/Numbers etc.
		dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
	}
	alert(dumped_text);
}
function preload(image) {
	var imageObj = new Image();
	imageObj.src=image;
	}
function getCookie(NameOfCookie){
	if (document.cookie.length > 0)
	{ begin = document.cookie.indexOf(NameOfCookie+"=");
	if (begin != -1)
	{ begin += NameOfCookie.length+1;
	end = document.cookie.indexOf(";", begin);
	if (end == -1) end = document.cookie.length;
	return unescape(document.cookie.substring(begin, end)); }
	}
	return '';
}
function setCookie(NameOfCookie, value, expiredays){ 
	var ExpireDate = new Date ();
	ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));
	document.cookie = NameOfCookie + "=" + escape(value) +
	((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());
	}
function delCookie (NameOfCookie){
	if (getCookie(NameOfCookie)) {
		document.cookie = NameOfCookie + "=" +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
		}
	}
/*
ctx.strokeStyle = "#2d6";
ctx.fillStyle = "#abc";
roundRect(ctx, 100, 200, 200, 100, 50, true);
*/
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
	if (typeof stroke == "undefined" ){
		stroke = true;
		}
	if (typeof radius === "undefined"){
		radius = 5;
		}
	ctx.beginPath();
	ctx.moveTo(x + radius, y);
	ctx.lineTo(x + width - radius, y);
	ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
	ctx.lineTo(x + width, y + height - radius);
	ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
	ctx.lineTo(x + radius, y + height);
	ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
	ctx.lineTo(x, y + radius);
	ctx.quadraticCurveTo(x, y, x + radius, y);
	ctx.closePath();
	if (stroke){
		ctx.stroke();
		}
	if (fill){
		ctx.fill();
		}        
	}
//sort - array.sort(sort_by('price', true, parseInt));
var sort_by = function(field, reverse, primer){
	var key = function (x) {return primer ? primer(x[field]) : x[field]};
	return function (a,b) {
		var A = key(a), B = key(b);
		return ((A < B) ? -1 :
		(A > B) ? +1 : 0) * [-1,1][+!!reverse];                  
		}
	}
//function to get random number from 1 to n
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
function round(number){
	return Math.round(number);
	}
//dashed objects
CanvasRenderingContext2D.prototype.dashedRect = function(x1, y1, x2, y2, dashLen, color) {
	this.dashedLine(x1, y1, x2, y1, dashLen, color);
	this.dashedLine(x2, y1, x2, y2, dashLen, color);
	this.dashedLine(x2, y2, x1, y2, dashLen, color);
	this.dashedLine(x1, y2, x1, y1, dashLen, color);
	};
CanvasRenderingContext2D.prototype.dashedLine = function(x1, y1, x2, y2, dashLen, color) {
	x1 = x1 + 0.5;
	y1 = y1 + 0.5;
	x2 = x2 + 0.5;
	y2 = y2 + 0.5;
	this.strokeStyle = color;
	if (dashLen == undefined) dashLen = 4;
	this.beginPath();
	this.moveTo(x1, y1);
	var dX = x2 - x1;
	var dY = y2 - y1;
	var dashes = Math.floor(Math.sqrt(dX * dX + dY * dY) / dashLen);
	var dashX = dX / dashes;
	var dashY = dY / dashes;
	var q = 0;
	while (q++ < dashes) {
	x1 += dashX;
	y1 += dashY;
	this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x1, y1);
	}
	this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x2, y2);
	this.stroke();
	this.closePath();
	};
function log(text){
	console.log(text);
	}
function font_pixel_to_height(px){
	return Math.round(px*0.75);
	}
function rgbToHex(r, g, b) {
	if (r > 255 || g > 255 || b > 255)
		throw "Invalid color component";
	return ((r << 16) | (g << 8) | b).toString(16);
	}
function rgb2hex_all(rgb) {
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	function hex(x) {
	return ("0" + parseInt(x).toString(16)).slice(-2);
	}
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
	}
function hex2rgb(hex) {
	if (hex[0]=="#") hex=hex.substr(1);
	if (hex.length==3) {
		var temp=hex; hex='';
		temp = /^([a-f0-9])([a-f0-9])([a-f0-9])$/i.exec(temp).slice(1);
		for (var i=0;i<3;i++) hex+=temp[i]+temp[i];
		}
	var triplets = /^([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i.exec(hex).slice(1);
	return {
		r: parseInt(triplets[0],16),
		g: parseInt(triplets[1],16),
		b: parseInt(triplets[2],16),
		a: 255,
		}
	}
function drawImage_rotated(canvas, file, x, y, width, height, angle){
	var TO_RADIANS = Math.PI/180;
	var img = new Image();	
	img.src = file;
	
	canvas.save();
	canvas.translate(x, y);
	canvas.rotate(angle * TO_RADIANS);
	canvas.drawImage(img, -(width/2), -(height/2));
	canvas.restore();
	}
function drawEllipseByCenter(ctx, cx, cy, w, h, color, fill) {
	drawEllipse(ctx, cx - w/2.0, cy - h/2.0, w, h, color, fill);
	}
function drawEllipse(ctx, x, y, w, h, color, fill) {
	var kappa = .5522848,
		ox = (w / 2) * kappa, // control point offset horizontal
		oy = (h / 2) * kappa, // control point offset vertical
		xe = x + w,           // x-end
		ye = y + h,           // y-end
		xm = x + w / 2,       // x-middle
		ym = y + h / 2;       // y-middle

	ctx.beginPath();
	ctx.moveTo(x, ym);
	ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
	ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
	ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
	ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
	ctx.closePath();
	ctx.fillStyle = color;
	ctx.strokeStyle = color;
	if(fill==undefined)
		ctx.stroke();
	else
		ctx.fill();
	}
function remove_selection(){
	if (window.getSelection) {
		if (window.getSelection().empty)   // Chrome
			window.getSelection().empty();
		else if (window.getSelection().removeAllRanges)  // Firefox
			window.getSelection().removeAllRanges();
		} 
	else if (document.selection)  // IE?
		document.selection.empty();
	}
function get_dimensions(){
	var theWidth, theHeight;
	if (window.innerWidth) {
		theWidth=window.innerWidth;
		}
	else if (document.documentElement && document.documentElement.clientWidth) {
		theWidth=document.documentElement.clientWidth;
		}
	else if (document.body) {
		theWidth=document.body.clientWidth;
		}
	if (window.innerHeight) {
		theHeight=window.innerHeight;
		}
	else if (document.documentElement && document.documentElement.clientHeight) {
		theHeight=document.documentElement.clientHeight;
		}
	else if (document.body) {
		theHeight=document.body.clientHeight;
		}
	return [theWidth, theHeight];
	}
