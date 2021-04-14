function showTime(){
    var d = new Date();
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var second = document.getElementById("second");
    var ampm1 = document.getElementById("ampm1");
    
    hour.innerHTML = d.getHours();
    minute.innerHTML = d.getMinutes();
    second.innerHTML = d.getSeconds();


    if(d.getHours() > 12){
        ampm1.innerHTML = "PM";
        hour.innerHTML = hour.innerHTML - 12;
    }
    else{
        ampm1.innerHTML = "AM";
    }

    setTimeout(showTime, 500);
    
};

showTime();