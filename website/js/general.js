function loadXMLDoc(dddd,hhhh)
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById(dddd).innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET",hhhh,true);
	xmlhttp.send();
}

function loginregisters(aa){
	var loginregi = document.getElementById("loginregister");
	if(aa == 1){
		loginregi.style.marginLeft = "-800px";
	}else{
		loginregi.style.marginLeft = "0px";
	}
}