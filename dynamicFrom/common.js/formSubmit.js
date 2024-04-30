var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var email=document.getElementById("email");
var phoneNo=document.getElementById("phone");
var password=document.getElementById("pass");
var address=document.getElementById("address");
var male=document.getElementById("male");
var female=document.getElementById("female");
var Nd=document.getElementById("Nd");
var dob=document.getElementById("dob");
var time=document.getElementById("time");
var tamil=document.getElementById("lt");
var english=document.getElementById("En");
var french=document.getElementById("fr");
var pic=document.getElementById("pic");
var intrest=document.getElementById("intrest");


function table(){
    
    var fn=fname.value;
    var ln=lname.value;
    var mail=email.value;
    
  
    document.getElementById("fn").innerHTML=fn+" "+ln;
    document.getElementById("mail").innerHTML=mail;
    document.getElementById("phone1").innerHTML=phoneNo.value;
    document.getElementById("pass1").innerHTML=password.value;
    document.getElementById("address1").innerHTML=address.value;
    if(male.checked==true)
    {
        document.getElementById("gender1").innerHTML=male.value;
    }else if(female.checked==true)
    {
        document.getElementById("gender1").innerHTML=female.value;

    }
    else if(Nd.checked==true)
    {
        document.getElementById("gender1").innerHTML=Nd.value;
    }
    document.getElementById("dob1").innerHTML=dob.value;
    document.getElementById("time1").innerHTML=time.value;
    if(tamil.checked==true)
    {
        document.getElementById("language").innerHTML+="<li>"+tamil.value+"</li>";
    }
    if(english.checked==true)
    {
        document.getElementById("language").innerHTML+="<li>"+english.value+"</li>";
    }
    if(french.checked==true)
    {
        document.getElementById("language").innerHTML+="<li>"+french.value+"</li>";
    }
    document.getElementById("pic1").src=pic.value;
    
    // document.getElementById("intrest1").innerHTML+="<li>"+intrest.value+"</li>";
   
    for(var i =0;i<intrest.options.length;i++)
    {
        if(intrest.options[i].selected)
        {
            document.getElementById("intrest1").innerHTML+="<li>"+intrest.options[i].value; +"</li>"
        }
    }
    var table=document.getElementById("output");
    table.style.display="inline-block";
    var form=document.getElementById("forms");
    // form.style.display="none";
    document.getElementById("tittle").style.display="block"
}


function formCheck1()
{
    var name=document.getElementById("name");
    if(/^[a-zA-Z]+$/.test(fname.value))
    {
        
        console.log("valid");
        name.style.color="green";
        
    }

    else
    {
        name.style.color="red";
       
    }    
}
function formCheck2()
{
    var name=document.getElementById("name");
    if(/^[a-zA-Z]+$/.test(lname.value))
    {
        
        console.log("valid");
        name.style.color="green";
        
    }

    else
    {
        name.style.color="red";
       
    }    
}
function mailCheck()
{
    var email1 =document.getElementById("email1");
    if(/^[a-z0-9]+@gmail.com$/.test(email.value))
    {
        
        
        email1.style.color="green";
        console.log("valid");
       
    }

    else
    {
        
      
        email1.style.color="red";
       
        
    }
}
function phoneCheck()
{
    var mobile=document.getElementById("mobile");
    if(/^[7-9][0-9]{9}$/.test(phoneNo.value))
    {
        mobile.style.color="green";

    }
    else{
        mobile.style.color="red";
        phoneNo.style.borderColor="red";
    }
}
function passCheck()
{
    var pass=document.getElementById("password")
    if(/^[a-z0-9A-Z]{8,20}$/.test(password.value))
    {
        pass.style.color="green";
    }
    else{
        pass.style.color="red";
        
    }
}
    

   

    


