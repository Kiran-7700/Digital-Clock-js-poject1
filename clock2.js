function workingClock(){
let date=new Date();
let hours=date.getHours();
// let greet=document.getElementsByClassName("second")[0];

let message=document.getElementById("grab");
let wakeupTime=document.getElementById("s1");
let lunchTime=document.getElementById("s2");
let napTime=document.getElementById("s3");
let nightTime=document.getElementById("s4");
let resImage=document.getElementById("img");



if(parseInt(wakeupTime.value)===hours){
    message.innerText="GRAB SOME HEALTHY BREAKFAST!!!";
    resImage.style.backgroundImage= "url('./Component\ 30\ –\ 1.svg')"

    // resImage.src="./Component\ 30\ –\ 1.svg"
}
else if(parseInt(lunchTime.value)===hours){
    message.innerText="LET'S HAVE SOME LUNCH !!";
    resImage.style.backgroundImage= "url('./Component\ 31\ –\ 1.svg')"

    // resImage.src="./Component\ 31\ –\ 1.svg"
}
else if(parseInt(napTime.value)===hours){
    console.log("flag 2");
    message.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    resImage.style.backgroundImage= "url('./good morning.png')"

    // resImage.src="./good morning.png"
}
else if(parseInt(nightTime.value)===hours){
    message.innerText="CLOSE YOUR EYES AND GO TO SLEEP";
    resImage.style.backgroundImage= "url('./sleep.svg')"
}
}


/*Button Hover Party Time */

let button= document.getElementById("btn");
button.addEventListener("mouseover", function(){
    button.innerText="Party Time";
})
button.addEventListener("mouseout", function(){
    button.innerText="Set Alarm";
})

button.addEventListener("click", function(){

    let clocktime=document.getElementsByClassName("clocktime");

    clocktime[0].innerText=s1.options[s1.selectedIndex].text;
    clocktime[1].innerText=s2.options[s2.selectedIndex].text;
    clocktime[2].innerText=s3.options[s3.selectedIndex].text;
    clocktime[3].innerText=s4.options[s4.selectedIndex].text;
})



//keep updating image and msg automatically

setInterval(workingClock, 1000);


/*for on click message and image to change */

// let buttonn=document.getElementById("btn");
// buttonn.addEventListener("click", function(){
//     console.log("flag 0");
// let date=new Date();
// let hours=date.getHours();
// let message=document.getElementById("grab");
// let wakeupTime=document.getElementById("s1");
// let lunchTime=document.getElementById("s2");
// let napTime=document.getElementById("s3");
// let nightTime=document.getElementById("s4");
// let resImage=document.getElementById("img");

// console.log("flag 1");

// if(parseInt(wakeupTime.value)===hours){
//     message.innerText="GRAB SOME HEALTHY BREAKFAST!!!";
//     resImage.style.backgroundImage= "url('./Component\ 30\ –\ 1.svgg')"

//     // resImage.src="./Component\ 30\ –\ 1.svg"
// }
// else if(parseInt(lunchTime.value)===hours){
//     message.innerText="LET'S HAVE SOME LUNCH !!";
//     resImage.style.backgroundImage= "url('./Component\ 31\ –\ 1.svg')"

//     // resImage.src="./Component\ 31\ –\ 1.svg"
// }
// else if(parseInt(napTime.value)===hours){
//     console.log("flag 2");
//     message.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
//     resImage.style.backgroundImage= "url('./good morning.png')"

//     // resImage.src="./good morning.png"
// }
// else if(parseInt(nightTime.value)===hours){
//     message.innerText="CLOSE YOUR EYES AND GO TO SLEEP";
//     resImage.style.backgroundImage= "url('./sleep.svg')"
// }
// })

