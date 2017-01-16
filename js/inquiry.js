$('#ProductYouNeed,#yourname,#email,#country,#Telephone,#Comments').placeholder({isUseSpan:true});

$(function(){
		   
	$('.iputex').bind({ 
					
		focus:function()
		{ 
		
			if (this.value=="" ||this.value == this.defaultValue)
			{ 
				
				this.value=""; 
				this.style.color='#000';
					 
			} 
			
			
		},
		
	blur:function()
		{ 
			if (this.value == "" || this.value == this.defaultValue)
				{ 
				this.value = this.defaultValue; 
				this.style.color='#CCC';
				} 
				else
				{
					this.style.color='#000';
				}				 
		} 
				}); 
			})  

function is_number(str)
{
	exp=/[^0-9 .+()-]/g;
	if(str.search(exp) != -1)
	{
		return false;
	}
	return true;
}

function is_email(str)
{ if((str.indexOf("@")==-1)||(str.indexOf(".")==-1))
{
	
	return false;
	}
	return true;
}

function CheckInput(){

	if(document.getElementById("name").value == "" ){
		alert("Please Write Your Name!");
		document.getElementById("name").focus();
		return false;
	}

	if( document.getElementById("email").value =="") {
        alert("Please Write Your E-mail!")
		document.getElementById("email").focus();
        return false;
    }

	if(!is_email(document.getElementById("email").value))
	{ 	alert("Your E-mail Address is Wrong!");
		document.getElementById("email").focus();
		return false;
	}
	
   if(document.getElementById("country").value==""){
		alert("Please Write Your Country!");
		document.getElementById("country").focus();
		return false;
	}
	return true;
}


function Checkinquiry(){
	
var vneed=document.getElementById("ProductYouNeed");
var vname=document.getElementById("yourname");
var vemail=document.getElementById("email");
var vcountry=document.getElementById("country");


    if ( (vneed.value =="") || (vneed.value==vneed.defaultValue))
    {
		alert("Please fill in the products you need!");
		vneed.focus();
		
		return false;
    }

	else if ((vneed.value.indexOf("http://") != -1) || (vneed.value.indexOf("www.") != -1))
	 {
		 alert("disallow input Web site address!");
		vneed.focus();
		return false;
	}
	
	if( (vname.value == "") || (vname.value==vname.defaultValue)){
		alert("Please fill in your name!");
		vname.focus();
		return false;
	}

	if( (vemail.value =="") || (vemail.value==vemail.defaultValue)) {
        alert("Please fill in your email address!")
		vemail.focus();
        return false;
    }

	if(!is_email(vemail.value))
	{ 	alert("Your E-mail Address is Wrong!");
		vemail.focus();
		return false;
	}
	
   if((vcountry.value=="") || (vcountry.value==vcountry.defaultValue)){
		alert("Please fill in your country!");
		vcountry.focus();
		return false;
	}
	return true;
}

function Checkinquiryr(){
	
var vneed=document.getElementById("ProductYouNeedr");
var vname=document.getElementById("yournamer");
var vemail=document.getElementById("emailr");
var vcountry=document.getElementById("countryr");


    if ( (vneed.value =="") || (vneed.value==vneed.defaultValue))
    {
		alert("Please Write Your Product You Need!");
		vneed.focus();
		
		return false;
    }

	else if ((vneed.value.indexOf("http://") != -1) || (vneed.value.indexOf("www.") != -1))
	 {
		 alert("disallow  input  Web site address!");
		vneed.focus();
		return false;
	}
	
	if( (vname.value == "") || (vname.value==vname.defaultValue)){
		alert("Please Write Your Your Name!");
		vname.focus();
		return false;
	}

	if( (vemail.value =="") || (vemail.value==vemail.defaultValue)) {
        alert("Please Write Your E-mail!")
		vemail.focus();
        return false;
    }

	if(!is_email(vemail.value))
	{ 	alert("Your E-mail Address is Wrong!");
		vemail.focus();
		return false;
	}
	
   if((vcountry.value=="") || (vcountry.value==vcountry.defaultValue)){
		alert("Please Write Your Country!");
		vcountry.focus();
		return false;
	}
	return true;
}