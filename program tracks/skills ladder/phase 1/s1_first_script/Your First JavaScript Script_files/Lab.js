function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}



function changeSize(size)
{
	var body=document.getElementById("body");
	if (body.currentStyle)
		var y = body.currentStyle["fontSize"];
	else if (window.getComputedStyle)
		var y = document.defaultView.getComputedStyle(body,null).getPropertyValue("fontSize");
	if (null == y || "" == y)
	{
		if (body.currentStyle)
		var y = body.currentStyle["font-size"];
			else if (window.getComputedStyle)
		var y = document.defaultView.getComputedStyle(body,null).getPropertyValue("font-size");
	}

	var s = parseInt( y.replace("px","") );
	if ("smaller" == size && s > 8)
		s--;
	else if ("larger" == size)
		s++;
	else if ("set" == size)
	{
		s = parseInt(readCookie("textSize"));
		if (null == s || isNaN(s) || "NaN" == s || s < 8)
			s = 12;
	}
	body.style.fontSize = s+"px";
	createCookie("textSize",s,360);
}

function hilite()
{
	var body=document.getElementById("body");
	var cl = this.className;
	if ("lv" == body.className)
	{
		var els = document.getElementsByTagName(this.tagName);
		for(x=0; x < els.length; x++)
		{
			c = els[x].className;
			if (cl == c)
			{
				els[x].className = (c.indexOf("lvhover") > 0 ? c.substring(0, c.length-7) : c + " lvhover" );
			}
		}
	}
}

function bodyLoaded()
{
	changeSize("set");
	if ("lv" == readCookie("lv"))
		lv();
	
	// span, ins, del
	var els = document.getElementsByTagName("ins");
	for(x=0; x < els.length; x++)
	{
		els[x].onmouseover = hilite;
		els[x].onmouseout = hilite;
	}
	els = document.getElementsByTagName("del");
	for(x=0; x < els.length; x++)
	{
		els[x].onmouseover = hilite;
		els[x].onmouseout = hilite;
	}

	els = document.getElementsByTagName("span");
	for(x=0; x < els.length; x++)
	{
		if (  "red" == els[x].className 
			||"green" == els[x].className
			||"blue" == els[x].className
			||"darkgreen" == els[x].className
			||"darkblue" == els[x].className
			||"darkred" == els[x].className
			||"orange" == els[x].className
			||"purple" == els[x].className
		)
		{
			els[x].onmouseover = hilite;
			els[x].onmouseout = hilite;
		}
	}

	els = document.getElementsByTagName("img");
	for(x=0; x < els.length; x++)
	{
		if (els[x].clientWidth >= 400) {
			els[x].style.cursor = "zoom-in";
			els[x].onclick = function () {
                  window.open(this.src, '_blank');
             }
        }
		showif = els[x].getAttribute("showif");
		if (null != showif)
		{
			r = eval(showif);
			if (! r)
				els[x].style.display ='none';
		}
	}
	
	
    var iframe = document.createElement('iframe');

    var timeSurvey = document.getElementById('timeSurvey');
    iframe.frameBorder=0;
    iframe.width=400;
    iframe.height=150;
    iframe.marginheight=10;
    iframe.marginwidth=10;
    src = "https://students.oreillyschool.com/student/time_survey.php";
    if (window.location.href.indexOf("test") > 0  )
    	src = "https://tap-test.oreillyschool.com/student/time_survey.php";

    iframe.src = src + "?url=" + window.location.pathname;
    timeSurvey.appendChild(iframe);
	
	t();
}

 
function getQueryVariable(variable)
{
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++)
	{
		var pair = vars[i].split("=");
		if (pair[0] == variable) 
		{
			return pair[1];
		}
	}
	return null;
} 

function s(link)
{
	if ("" == window.location.hostname)
	{
		window.location="index.html";
		return false;
	} 
	else if (-1 == window.location.href.toLowerCase().indexOf("coderunner"))
	{
		window.location = "https://oreillyschool.com/student/" + link;
	}
}

function lv()
{
	var body=document.getElementById("body");	
	body.className = ("lv" == body.className ? "" : "lv");
	createCookie("lv",body.className,360);
}

function t(f)
{
	var f = document.getElementById("t");
	var U = escape(window.location.href);
	f.src = "https://oreillyschool.com/ws/t/?U=" + U + (f.length > 0 ? "&F=1" : "");
	setTimeout(t, 60000);
}
window.onbeforeunload=function(){ t('g');};