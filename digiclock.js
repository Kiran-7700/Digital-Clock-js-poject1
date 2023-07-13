function clock() {
  let times = new Date();
  var hours = times.getHours();
  var minutes = times.getMinutes();
  var seconds = times.getSeconds();
  let period = "AM";

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
    period = "PM";
  } else if (hours == 12) {
    period = "PM";
  }
  let clockHours;
  let clockMinutes;
  let clockSeconds;
  clockHours = hours < 10 ? `0${hours}` : `${hours}`;
  clockMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  clockSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  document.getElementById("hrs").innerHTML = clockHours;
  document.getElementById("mins").innerHTML = clockMinutes;
  document.getElementById("secs").innerHTML = clockSeconds;
  document.getElementById("ampm").innerHTML = period;

  // textdisplay according to real time

  let mornmessage = "Grab Some Healthy Breakfast!!";
  let aftermessage = "Let's have some Lunch!!";
  let evemessage = "Stop Yawning, Get some Tea.. It's time for tea";
  let nightmessage = "Close your Eyes and go to Sleep!";
  if (period === "AM" && hours <= 12) {
    document.getElementById("textdisplay").innerHTML = mornmessage;
  } else if (period === "PM") {
    if (hours === 12 || (hours >= 1 && hours <= 3)) {
      document.getElementById("textdisplay").innerHTML = aftermessage;
    }
    if (hours >= 4 && hours <= 6) {
      document.getElementById("textdisplay").innerHTML = evemessage;
    }
    if (hours >= 7) {
      document.getElementById("textdisplay").innerHTML = nightmessage;
    }
  }
}
setInterval(() => {
  clock();
}, 1000);
clock();

//onclick() function set alarm

function setalarm() {
  let times = new Date();
  var hours = times.getHours();
  let ampm = document.getElementById("ampm").textContent;
  console.log(ampm);
  let index;
  let option;
  let wakearr = [];
  let luncharr = [];
  let naparr = [];
  let nightarr = [];
  let wakeuptext = "Good Morning!! Wake Up!!";
  let lunchtext = "Good Afternoon!! Have some Food!!";
  let naptext = "Good Evening!! Take a Quick Nap!!";
  let nighttext = "Good Night!! Take some sleep!";
  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  } else if (hours == 12) {
    period = "PM";
  }

  index = document.getElementById("wakeup").selectedIndex;
  option = document.getElementById("wakeup").options;
  document.getElementById("wakeupt").innerHTML = option[index].text;

  let wakeupval = option[index].value;
  wakearr = wakeupval.split(" ");
  if (wakearr[0] == hours && wakearr[1] == ampm) {
    document.getElementById("displaybox").innerHTML = wakeuptext;
    document.getElementById("image").src = "./Component 30 – 1.svg";
  }

  index = document.getElementById("lunch").selectedIndex;
  option = document.getElementById("lunch").options;
  document.getElementById("luncht").innerHTML = option[index].text;
  let lunchval = option[index].value;
  luncharr = lunchval.split(" ");
  if (luncharr[0] == hours && luncharr[1] == ampm) {
    document.getElementById("displaybox").innerHTML = lunchtext;
    document.getElementById("image").src = "./Component 31 – 1.svg";
  }
  index = document.getElementById("nap").selectedIndex;
  option = document.getElementById("nap").options;
  document.getElementById("napt").innerHTML = option[index].text;
  let napval = option[index].value;
  naparr = napval.split(" ");
  if (naparr[0] == hours && naparr[1] == ampm) {
    document.getElementById("displaybox").innerHTML = naptext;
    document.getElementById("image").src = "./good morning.png";
  }
  index = document.getElementById("night").selectedIndex;
  option = document.getElementById("night").options;
  document.getElementById("nightt").innerHTML = option[index].text;
  let nightval = option[index].value;
  nightarr = nightval.split(" ");
  if (nightarr[0] == hours && nightarr[1] == ampm) {
    document.getElementById("displaybox").innerHTML = nighttext;
    document.getElementById("image").src = "./sleep.svg";
  }
}
