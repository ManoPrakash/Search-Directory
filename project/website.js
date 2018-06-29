var xmlHttp = createXmlHttpRequestObject();
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("c1").addEventListener('click', function(){ showCategory('entertainment'); });
    document.getElementById("c2").addEventListener('click', function(){ showCategory('learn'); });
    document.getElementById("c3").addEventListener('click', function(){ showCategory('news'); });
    document.getElementById("c4").addEventListener('click', function(){ showCategory('search'); });
    document.getElementById("c5").addEventListener('click', function(){ showCategory('shopping'); });
    document.getElementById("c6").addEventListener('click', function(){ showCategory('social'); });
    document.getElementById("c7").addEventListener('click', function(){ showCategory('sports'); });
});

function createXmlHttpRequestObject()
{
	var xmlHttp;
	if(window.ActiveXObject)
	{
		try
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e)
		{
			xmlHttp=false;
		}
	}
	else
	{
		try
		{
			xmlHttp=new XMLHttpRequest(); 
			console.log('xml object created');
		}
		catch(e)
		{
			xmlHttp=false;
		}
	}
	if(!xmlHttp)
		alert("Can't Use this extension for this version. Kindly update your browser!");
	else
		return xmlHttp;
}

function showCategory(x)
{
	if(xmlHttp.readyState==0 || xmlHttp.readyState==4)
	{
		val=x;
		xmlHttp.open("GET","https://searchdirectory.000webhostapp.com/web.php?val=" + val,true);	
		xmlHttp.onreadystatechange = function()
		{
     		if (this.readyState==4 && this.status==200) 
		 	{
		 		xmlResponse=this.responseText;
		 		document.getElementById("underinput").innerHTML='<span style="color:black">' + xmlResponse + '</span>';
   				document.getElementById('forview').scrollIntoView();
   			}	
    	}
			xmlHttp.send();
	}
}
