// JavaScript Document
    window.onload=function(){
    var oLog=$("loginbg");
	var arr=["images/1.jpg", "images/2.jpg", "images/3.jpg","images/4.jpg", "images/5.jpg", "images/6.jpg","images/7.jpg", "images/8.jpg", "images/9.jpg","images/10.jpg", "images/11.jpg", "images/12.jpg","images/13.jpg", "images/14.jpg", "images/15.jpg","images/16.jpg", "images/17.jpg", "images/18.jpg","images/19.jpg", "images/20.jpg", "images/21.jpg","images/22.jpg", "images/23.jpg", "images/24.jpg","images/25.jpg","images/26.jpg", "images/27.jpg", "images/28.jpg","images/29.jpg", "images/30.jpg", "images/31.jpg","images/32.jpg","images/33.jpg", "images/34.jpg", "images/35.jpg"];
	 var rad=ranNum(0, arr.length);
	   oLog.style.backgroundImage="url("+arr[rad]+")";
	   startMove(rad, 'opacity', 1)
	   setInterval(function(){
		 if(rad==arr.length){rad=0;}
	 rad++;
	 oLog.style.backgroundImage="url("+arr[rad]+")";
		 },10000);//背景图替换
		 }
/*--表单验证--*/		 
/*var ctzlogin = (function(){
 		 var timer = null;
 		 return {
 			 index:0,
 			 init:function(){
 				var $this = this;
 				$(document).off().keydown(function(e){
 					if(e.keyCode==13)$this.login(document.getElementById("loginbtn")); 
			});
			
			$("#account").keyup(function(){
				var v = $(this).val();
				if(isNotEmpty(v)){
 					if(localStorage)localStorage.setItem("reg_account",v);
				}
			});
			
			if(window.localStorage){
				var ve = localStorage.getItem("reg_account");
				if(!ve)return;
				$("#account").val(ve);
				setTimeout(function(){$("#password").val("").focus();}, 300);
				$this.c_focus();
			};
			
			tzLogin.removeLogin();
		 },
		gotoEmail : function(email){
			if(email.indexOf("@163.com")!=-1){
				return "http://email.163.com/";
			}else if(email.indexOf("@sina.com")!=-1){
				return "http://mail.sina.com.cn/";
			}else if(email.indexOf("@qq.com")!=-1){
				return "https://mail.qq.com/cgi-bin/loginpage";
			}else if(email.indexOf("@126.com")!=-1){
				return "http://www.126.com/";
			}else if(email.indexOf("@139.com")!=-1){
				return "http://mail.10086.cn/";
			}else if(email.indexOf("@gmail.com")!=-1){
				return "http://gmail.google.com/";
			}
		},
		 c_focus:function(){
			 var account = $("#account").val();
			 var password = $("#password").val();
			 var username = $("#useranme").val();
			 if(isEmpty(account)){
				$("#account").focus();
				return;
			 }
			 if(isEmpty(password)){
				$("#password").focus();
				return;
			 }
			 if(isEmpty(username)){
				$("#useranme").focus();
				return;
			 }
		 },
		 login:function(obj){
			 
			 var account = $("#account").val();
			 var password = $("#password").val();
			 var codeMark = $("#zcode").is(":hidden");
			 if(ctzlogin.index>1){
				$("#zcode").show();
			 }
			 var $this = this;
			 if(isEmpty(account)){
				$this.error("请输入账号...");
				$("#account").focus();
				return;
			 }
			 
			 if(!$this.phone(account)){
				$this.error("手机格式有误...");
				$("#account").select();
				return false;
			 }
			 
			 if(isEmpty(password)){
				$this.error("请输入密码...");
				$("#password").focus();
				return;
			 }
			 
			 var code = $("#code").val();
			 if(!codeMark){
				 if(isEmpty(code)){
					 $this.error("请输入验证码...");
					$("#code").focus();
					 return false;
				 }
			 }
			 
			 var params = "account="+account+"&password="+password+"&code="+code;
			 var xhr = null;
			 if(window.ActiveXObject){
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			 }else{
				 xhr = new XMLHttpRequest();
			 }
			 obj.removeAttribute("onclick");
		     obj.innerHTML ="登陆中...";
			 xhr.open("post",rootPath+"/login/logined.do",true);
			 xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");  
			 xhr.onreadystatechange = function() {
 			       if (xhr.status == 200 && xhr.readyState==4) {
 			    	    obj.setAttribute("onclick","ctzlogin.login(this)");
 	 			        obj.innerHTML ="登陆";
 			        	var text = xhr.responseText.trim();
 			        	if(text=="account_null"){
 			        		$this.error("请输入账号...");
 			        		$("#account").focus();
 			        		ctzlogin.index++;
	 			        	$("#zcode").find("img").trigger("click");
	 			        	$("#code").val("");
 			        	}else if(text=="pwd_null"){
 			        		$this.error("请输入密码...");
 			        		$("#account").focus();
 			        		ctzlogin.index++;
	 			        	$("#zcode").find("img").trigger("click");
	 			        	$("#code").val("");
 			        	}else if(text=="active"){
 			        		$this.error("您输入的手机尚未激活...");
 			        		$("#account").select();
 			        		$("#password").focus().val("");
 			        		ctzlogin.index++;
	 			        	$("#zcode").find("img").trigger("click");
	 			        	$("#code").val("");
 			        	}else if(text=="fail"){
 			        		$this.error("请正确输入账号和密码...");
 			        		$("#account").select();
 			        		$("#password").focus().val("");
 			        		ctzlogin.index++;
	 			        	$("#zcode").find("img").trigger("click");
	 			        	$("#code").val("");
 			        	}else if(text=="codeError"){
 			        		$this.error("验证码输入有误...");
	 			        	$("#code").val("").focus();
 			        	}else{
 			        		keUserCommon.relation();
 			        		var backurl = getQueryString("link");
 			        		if(isEmpty(backurl))backurl = getSession("MK_LOCATION_LINK",false);
 			        		if(isEmpty(backurl))backurl = rootPath;
	 			        	window.location.href = backurl;
 			        	}
 			       }else{
 			    	  obj.setAttribute("onclick","ctzlogin.login(this)");
 	 			      obj.innerHTML ="登陆";
 			       }
		     };
			 xhr.send(params);
		 },
		 email:function(msg){
			 return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(msg);
		 },
		 phone:function(phone){
			 return /(^(\d{3,4}-)?\d{7,8})$|((13|15|18|17|14)\d{9})$/.test(phone);
		 },
		 password:function(pwd){
			 return /^[\dA-Za-z(!@#$%&)]{6,16}$/.test(pwd);
		 },
		 _username:function(uname){
			 return /^[\u4e00-\u9fa5A-Za-z_]{2,10}$/.test(uname);	
		 },
		 error:function(msg){
			tzCommon.error(msg);
		 }
	 };	
}());

$(function(){
	ctzlogin.init();
	if(window.localStorage){
		var lcolor = localStorage.getItem("color");
		if(lcolor){
			var color =lcolor.split(",");
			if(color){
				$(".changebg").css("background",color[0]);
				$(".cbg").css("background",color[1]);
			}
		}
	}

	function changeBg(){
		var random = randomRange(0,91);
		$("#loginbg").fadeOut("slow").fadeIn("slow").css("backgroundImage","url('"+rootPath+"/resources/images/bg/"+random+".jpg')");
	}

	changeBg();
	setInterval(changeBg,10000);
});*/