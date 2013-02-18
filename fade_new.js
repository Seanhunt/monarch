
var imgdon=1;var cdobj=null;
var imgp1=new Image();var imgp2=new Image();var imgp3=new Image();var imgp4=new Image();var imgp5=new Image();var imgp6=new Image();var imgp7=new Image();var imgp8=new Image();
imgp1.src='image1.gif';imgp2.src='image2.gif';imgp3.src='image3.gif';imgp4.src='image4.gif';imgp5.src='image5.gif';imgp6.src='image6.gif';imgp7.src='image7.gif';imgp8.src='image8.gif';
var imgstr1='<img src="image1.gif" width=500 height=500 alt="" border="0">';var imgstr2='<img src="image2.gif" width=500 height=500 alt="" border="0">';var imgstr3='<img src="image3.gif" width=500 height=500 alt="" border="0">';var imgstr4='<img src="image4.gif" width=500 height=500 alt="" border="0">';var imgstr5='<img src="image5.gif" width=500 height=500 alt="" border="0">';var imgstr6='<img src="image6.gif" width=500 height=500 alt="" border="0">';var imgstr7='<img src="image7.gif" width=500 height=500 alt="" border="0">';var imgstr8='<img src="image8.gif" width=500 height=500 alt="" border="0">';
	var uagent;	var opsystem;
	var IE4B=false;	var NS4B=false;	var NS6B=false;	var OP5B=false;	var AOLB=false;
	var MsWinS=false;	var MacOS=false;	var ULinS=false;
	var majorver;	majorver = parseInt(navigator.appVersion);

	if(majorver>=8)
	{}
	uagent = window.navigator.userAgent.toLowerCase();
	opsystem = window.navigator.platform.toLowerCase();

	if (opsystem.indexOf('win') != -1)
		MsWinS = true;
	else if (opsystem.indexOf('mac') != -1)
		MacOS = true;
	else if (opsystem.indexOf('unix') != -1 || opsystem.indexOf('linux') != -1 || opsystem.indexOf('sun') != -1)
		ULinS = true;

	NS4B=(document.layers);
	IE4B=(document.all);
	NS6B=((document.getElementById)&&(!IE4B))?true:false;
	OP5B=(uagent.indexOf('Opera') != -1)?true:false;

	if ((uagent.indexOf('aol')) != -1 )
		AOLB=true;

IE5=false;IE4=false;IEold=false;IE5=(uagent.indexOf('msie 5.0') != -1)?true:false;IE4=(uagent.indexOf('msie 4') != -1)?true:false;if(IE5||IE4){IEold=true;}function initr(){
	if(IE4B){if((uagent.indexOf('msie 6.') != -1)||(uagent.indexOf('msie 5.5') != -1)){imgdon=2;setTimeout('dxtrans()',3000);}}
	else if(NS6B)
	{cdobj=document.getElementById('trans');setTimeout('slides()',2000);}}
function dxtrans(){
if(IEold!=true){cimg.filters[0].apply();}cimg.src = eval("imgp"+imgdon+".src");
if(IEold!=true){cimg.filters[0].play();}imgdon++;
if(imgdon>8){imgdon=1;}
setTimeout('dxtrans()',5000);
}

function slides(){
if(imgdon==1){document.slideimg.src=imgp2.src;}if(imgdon==2){document.slideimg.src=imgp3.src;}if(imgdon==3){document.slideimg.src=imgp4.src;}if(imgdon==4){document.slideimg.src=imgp5.src;}if(imgdon==5){document.slideimg.src=imgp6.src;}if(imgdon==6){document.slideimg.src=imgp7.src;}if(imgdon==7){document.slideimg.src=imgp8.src;}if(imgdon==8){document.slideimg.src=imgp1.src;}
imgdon++;if(imgdon>8){imgdon=1;}setTimeout('slides()',2000);}
window.onload=initr;
