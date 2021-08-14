function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate / 100) * 10;
    var year = new Date().getFullYear()+parseInt(years);
    var message = "If you deposit <div class=\"show\">"+principal+"</div>,\<br\>at an interest rate of <div class=\"show\">"+rate+"%</div>\<br\>You will receive an amount of <div class=\"show\">"+interest+"</div>,\<br\>in the year <div class=\"show\">"+year+"</div>\<br\>";
    document.getElementById("result").innerHTML=message;
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    var x = "%";
    var rate = rateval + x;
    document.getElementById("rate_val").innerText=rate;
}

        
