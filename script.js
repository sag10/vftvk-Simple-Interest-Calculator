function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
     if (principal == "" || principal <= 0) {
    alert("Enter a positive number");
     }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate / 100) * 10;
    var year = new Date().getFullYear()+parseInt(years);
    var message = "If you deposit <p class=\"show\">"+principal+"</p>,\<br\>at an interest rate of <p class=\"show\">"+rate+"%</p>\<br\>You will receive an amount of <p class=\"show\">"+interest+"</p>,\<br\>in the year <p class=\"show\">"+year+"</p>\<br\>";
    document.getElementById("result").innerHTML=message;
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    var x = "%";
    var rate = rateval + x;
    document.getElementById("rate_val").innerText=rate;
}

        
