//dom操作封装
function query(html){
	return document.querySelector(html)
}

var tag = {
	//滑动验证码方法
	verify: function(arr, box, imgbox, btn, img, que, slider, btit,tu,ming) {
		var atu = arr[Math.floor(Math.random() * (arr.length))]
		tu.src = atu;
		img.style.backgroundImage = " url(" + atu + ")"
		var tap = imgbox.offsetHeight - img.offsetHeight
		var left = 
	    Math.random() * (imgbox.offsetWidth - img.offsetWidth - imgbox.offsetWidth / 2) + imgbox.offsetWidth /2;
		var tops = Math.random() * (tap);
		img.style.top = tops + "px"
		que.style.top = tops + "px"
		que.style.left = left + "px"
		img.style.backgroundPositionY = -tops + "px";
		img.style.backgroundPositionX = -left + "px";
		
		btn.onmousedown = function() {
			img.style.opacity = "1"
			que.style.opacity = "1"
			ming.innerHTML="";
			btit.innerHTML="拖动图片完成验证";
			slider.onmousemove = function(event) {
				var zuo = event.clientX - box.offsetLeft - slider.offsetLeft;
				if (zuo > slider.offsetWidth) {
					zuo = slider.offsetWidth - img.offsetWidth / 2
				}
				btn.style.left = zuo + "px";
				img.style.left = zuo + "px";
				ming.style.width=zuo+10+"px"
			}
		}

		box.onmouseup = function() {
			var yes = que.offsetLeft - img.offsetLeft
			slider.onmousemove = null
			if (yes < 10 && yes > -10) {
				btit.innerHTML = "验证成功√"
				
				ming.innerHTML="验证成功"
				btit.style.color = "#2fce1a"
				img.style.opacity = "0";
				que.style.opacity = "0";
				return "yes"
			}else{
				btit.innerHTML = "验证失败X"
				ming.innerHTML=""
				btit.style.color = "red";
				zuo=0
				btn.style.left = zuo + "px";
				img.style.left = zuo + "px";
				ming.style.width=zuo+"px"
				
			}
			
		}
	}
}

function imgver(){
	var bigbox=document.createElement("div");
	bigbox.id="yzBox";
	bigbox.innerHTML='<h3 class="yzTip">请完成图片验证</h3>'+
	'<div class="yzImg">'+'<img src="./tu1.jpg" alt="..." id="yzTu">'+
	'<div class="kuai"></div>'+'<div class="kuai2"></div></div>'+
	'<div class="ySlider"><div class="ming"></div><button type="button" id="sliderBtn"></button></div>'
	document.getElementById("yzRoot").appendChild(bigbox);
	var box = query("#yzBox")
	var imgbox = query(".yzImg");
	var btn = query("#sliderBtn");
	var img = query(".kuai");
	var que = query(".kuai2");
	var slider = query(".ySlider");
	var btit = query(".yzTip");
	var tu = query("#yzTu");
	var arr = ["./tu1.jpg", "./tu2.jpg", "./tu3.jpg"];
	var ming=query(".ming");
	return tag.verify(arr, box, imgbox, btn, img, que, slider, btit,tu,ming)
}