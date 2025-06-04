
var countDownDate = new Date("June 16, 2025 00:00:00").getTime();

var x = setInterval(function(){
    var ahora = new Date().getTime();
    var distance = countDownDate - ahora;
    
    var dias = Math.floor(distance / (1000 * 60 * 60 * 24));
    var horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((distance % (1000 * 60)) / 1000);

    
    document.getElementById("days").innerHTML = dias;
    document.getElementById("hours").innerHTML = horas;
    document.getElementById("minutes").innerHTML = minutos;
    document.getElementById("seconds").innerHTML = segundos;
},1000);