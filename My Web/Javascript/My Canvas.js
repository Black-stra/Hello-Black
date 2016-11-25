// JavaScript Document
var c = document.getElementById("canvas-club");
var ctx = c.getContext("2d");
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;
var clearColor = 'rgba(0, 0, 0, .1)';
var max = 30;
var drops = [];

function random(min, max) {
	return Math.random() * (max - min) + min;
}

function O() {}

O.prototype = {
	init: function() {
		this.x = random(0, w);
		this.y = 0;
		this.color = 'hsl(180, 100%, 50%)';
		this.w = 2;
		this.h = 1;
		this.vy = random(4, 5);
		this.vw = 3;
		this.vh = 1;
		this.size = 2;
		this.hit = random(h * .8, h * .9);
		this.a = 1;
		this.va = .96;
	},
	draw: function() {
		if (this.y > this.hit) {
			ctx.beginPath();
			ctx.moveTo(this.x, this.y - this.h / 2);

			ctx.bezierCurveTo(
				this.x + this.w / 2, this.y - this.h / 2,
				this.x + this.w / 2, this.y + this.h / 2,
				this.x, this.y + this.h / 2);

			ctx.bezierCurveTo(
				this.x - this.w / 2, this.y + this.h / 2,
				this.x - this.w / 2, this.y - this.h / 2,
				this.x, this.y - this.h / 2);

			ctx.strokeStyle = 'hsla(180, 100%, 50%, ' + this.a + ')';
			ctx.stroke();
			ctx.closePath();

		} else {
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.size, this.size * 5);
		}
		this.update();
	},
	update: function() {
		if (this.y < this.hit) {
			this.y += this.vy;
		} else {
			if (this.a > .03) {
				this.w += this.vw;
				this.h += this.vh;
				if (this.w > 100) {
					this.a *= this.va;
					this.vw *= .98;
					this.vh *= .98;
				}
			} else {
				this.init();
			}
		}

	}
}

function resize() {
	w = c.width = window.innerWidth;
	h = c.height = window.innerHeight;
}

function setup() {
	for (var i = 0; i < max; i++) {
		(function(j) {
			setTimeout(function() {
				var o = new O();
				o.init();
				drops.push(o);
			}, j * 200)
		}(i));
	}
}

function anim() {
	ctx.fillStyle = clearColor;
	ctx.fillRect(0, 0, w, h);
	for (var i in drops) {
		drops[i].draw();
	}
	requestAnimationFrame(anim);
}

window.addEventListener("resize", resize);

setup();
anim();//雨滴canvas
/*-时钟Canvas-*/
     /*var dom=document.getElementById('clock');
     var ctx=dom.getContext('2d');
     var width=ctx.canvas.width;
     var height=ctx.canvas.height;
     var r=width/2;

     function drawBackground(){
     	ctx.save();
       ctx.translate(r, r);
       ctx.beginPath();
       ctx.lineWidth=10;
       ctx.arc(0, 0, r - 5, 0, 2*Math.PI, false);
       ctx.stroke();
     var hourNumbers=[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
      ctx.font='20px Arial';
      ctx.textAlign="center";
      ctx.textBaseline="middle"
      hourNumbers.forEach(function(number, i){
      	var rad=2 * Math.PI / 12 * i;
      	var x=Math.cos(rad) * (r - 30);
      	var y=Math.sin(rad) * (r - 30);
        ctx.fillText(number, x, y);
      });
      for(var i=0; i<60; i++){
      	var rad=2 * Math.PI / 60 * i;
      	var x=Math.cos(rad) * (r - 18);
      	var y=Math.sin(rad) * (r - 18);
      	ctx.beginPath();
      	if(i % 5 === 0){
      		ctx.fillStyle="#000";
        ctx.arc(x, y, 2, 0, 2 * Math.PI, false);
      	}else{
      	ctx.fillStyle="#ccc";
        ctx.arc(x, y, 2, 0, 2 * Math.PI, false);
      	}
      	ctx.arc(x, y, 2, 0, 2 * Math.PI, false);
      	ctx.fill();
      }
      };
      function drawHour(hour,minute){
      	ctx.save();
      	ctx.beginPath();
      	var rad=2 * Math.PI / 12 * hour;
      	var mard=2*Math.PI / 12 / 60* minute;
      	ctx.rotate(rad+mard);
      	ctx.lineWidth = 6;
      	ctx.lineCap="round"
      	ctx.moveTo(0, 10);
      	ctx.lineTo(0, -r / 2);
      	ctx.stroke();
      	ctx.restore();
      };
      function drawMinute(minute){
      	ctx.save();
      	ctx.beginPath();
      	var rad= 2 * Math.PI / 60 * minute;
      	ctx.rotate(rad)
      	ctx.lineWidth = 3;
      	ctx.lineCap="round"
      	ctx.moveTo(0, 10);
      	ctx.lineTo(0, -r + 30);
      	ctx.stroke();
      	ctx.restore();
      };
      function drawSecond(second){
      	ctx.save();
      	ctx.beginPath();
      	ctx.fillStyle="red";
      	var rad=2 * Math.PI / 60 * second;
      	ctx.rotate(rad)
      	ctx.moveTo(-2, 20);
      	ctx.lineTo(2, 20);
      	ctx.lineTo(1, -r + 18);
      	ctx.lineTo(-1, -r + 18);
      	ctx.fill();
      	ctx.restore();
      };
      function drawDot(){
        ctx.beginPath();
        ctx.fillStyle="#fff";
        ctx.arc(0,0,3,2*Math.PI, false);
        ctx.fill();
      }

     function draw(){
     ctx.clearRect(0, 0, width, height);
     var date = new Date();
     var hour = date.getHours();
     var minute = date.getMinutes();
     var second = date.getSeconds();
     drawBackground();
     drawHour(hour, minute);
     drawMinute(minute);
     drawSecond(second);
     drawDot();
     ctx.restore();
     }
     draw();
     setInterval(draw, 1000);
		*/
