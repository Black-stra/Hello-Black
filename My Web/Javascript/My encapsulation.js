// JavaScript Document
function $(id){
	return document.getElementById(id);
	};//获取元素
function getByClass(oParent, aClass){
	var aResult=[];
	var aEle=oParent.getElementByTagName("*");
	for(var i=0;i<aEle.length; i++){
		if(aEle[i].className==aClass){
			aResule.push(aEle[i])
			}
     }
	 return aResule;
	};//获取class名称的元素
function getStyle(obj, name){
    if(obj.currentStyle){
		return obj.currentStyle[name];
		}
	else{
		return getComputedStyle(obj, false)[name];
		}	
	};  //获取非行间样式 getStyle(对象，样式)，只能获取单一样式，不可获取复合样式
function startMove(obj, josn, fn){
	var timer=null;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var Stop=true;
	for(var attr in josn)
	{
	var cur=0;
	if(attr=='opacity'){
		cur=Math.round(parseFloat(getStyle(obj, attr))*100);
		}
    else{
		cur=parseInt(getStyle(obj, attr));
		};
	 var speed=(josn[attr]-cur)/6;
	 speed=speed>0?Math.ceil(speed):Math.floor(speed);
	 if(cur!=josn[attr])
	 Stop=false;
		 if(attr=='opacity'){
			 obj.style.filter='alpha(opacity:'+(cur+speed)+')';
			 obj.style.opacity=(cur+speed)/100;
			 }
	 else{
		 obj.style[attr]=cur+speed+'px'; 
		 }
	}

	 if(Stop){
		 clearInterval(obj.timer);
		 if(fn)fn();
		 }
		},30);
	};
function ranNum(a, b){ 
	if(a>b){ 
		var c=a;
		a=b;
		b=c
	}
	if(a==b) alert("对不起，相等数之间无法取随机数！");
	return Math.round(Math.random()*(b-a)+a);	
}//获取随机数
	
	
	 