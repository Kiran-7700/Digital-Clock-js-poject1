function updateTime (){
    let dateTime =new Date ();
    let hours=dateTime.getHours();
    let minutes=dateTime.getMinutes();
    let seconds=dateTime.getSeconds();
    let am_or_pm=document.getElementById("meridiem");

    if(hours>=12){
        am_or_pm.innerHTML="PM";
    }
    else{
        am_or_pm.innerHTML="AM";
    }

    if(hours >12){
        hours= hours-12
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}
setInterval(updateTime, 1000);

let date=new Date();
 let hours=date.getHours();
//   let greet=document.getElementById("greeting");
// console.log(greet);

if(hours<12)
{
    document.getElementById("greeting").innerText="GOOD MORNING!! WAKE UP !!";
}
 if(hours>=12 && hours<16)
{
    document.getElementById("greeting").innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
}
 if(hours>=16 && hours<20)
{
    document.getElementById("greeting").innerText="GOOD EVENING !!";
}
 if(hours>=20 && hours<24)
{
    document.getElementById("greeting").innerText="GOOD NIGHT !!";
}