function compute()
{
    
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
  
    if (principal == "" || principal <= 0) {
    alert("Enter a positive number");
       document.getElementById("principal").focus(); 
    return;
   
     }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate / 100) * 10;
    var year = new Date().getFullYear()+parseInt(years);
    
    
    
   
    var message = "If you deposit <span class=\"show\">"+principal+"</span>,\<br\>at an interest rate of <span class=\"show\">"+rate+"%</span>\<br\>You will receive an amount of <span class=\"show\">"+interest+"</span>,\<br\>in the year <span class=\"show\">"+year+"</span>\<br\>";
    document.getElementById("result").innerHTML=message;
   
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    var x = "%";
    var rate = rateval + x;
    document.getElementById("rate_val").innerText=rate;
}

        
