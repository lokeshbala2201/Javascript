    var num1="";
  

    // var num9=parseInt(document.getElementById("9").value);
    // var num0=parseInt(document.getElementById("0").value);

function display(num)
{
    num1+=num;
   
    document.getElementById("result").innerHTML="<h1>"+num1+"</h1>";
   
    
    
    
 
      
  
}
function result()
{
    num1=eval(num1);
    document.getElementById("result").innerHTML="<h1>"+num1+"</h1>";
}
function Clear()
{
    num1="";
    document.getElementById("result").innerHTML="<h1>"+num1+"</h1>";
}

