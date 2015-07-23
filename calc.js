function c(val)
{
document.getElementById("d").value=val;
}

function v(val)
{
document.getElementById("d").value+=val;
}

function aman()
{
var str = $('#d').val();
$('#d').val(str.substring(0, str.length - 1));
}

function e() 
{ 
try 
{ 
  c(eval(document.getElementById("d").value)) 
} 
catch(e) 
{
  c('Error') 
} 
}  