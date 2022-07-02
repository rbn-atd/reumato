

//initialising variables
let hour = 0
let minute = 0
let second = 0
let millisecond = 0

let endHour = 0
let endMinute = 0
let dotIndex = 1

let cron

let ding  = new Audio("ding-sound-effect_2.mp3")

function setTime() {
  endHour = 0
}

//increments the hour element by 1
function upTime() {
  hour+=1
  // if (hour < 10) {
  //   document.getElementById("hour").innerText = "0"+hour
  // }
  // else {
  //   document.getElementById("hour").innerText = hour
  // }
  document.getElementById("hour").innerText = hour
}

function downTime() {
  hour-=1
  if (hour < 10) {
    document.getElementById("hour").innerText = "0"+hour
  }
  else {
    document.getElementById("hour").innerText = hour
  }
}

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10)
}

function pause() {
  clearInterval(cron)
}

function reset() {
  hour = 0
  minute = 0
  second = 0
  millisecond = 0
  
  document.getElementById('hour').innerText = '00'
  document.getElementById('minute').innerText = '00'
  document.getElementById('second').innerText = '00'
} 

function fullReset() {
  location.reload()
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
    //checking on whether the active time matches the desired interval time
  if (( minute != 0) && (minute % 25 == 0) ) {
    visualIncrement()
    pause()
    reset()
    
  }

  //returns live time data and appends it to the displayed elements
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  //document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}

//plays a sound, as well as changes the colour of a dot, to indicate a single interval has passed
function visualIncrement(){
  ding.play()
  document.getElementById("dot"+dotIndex).style.backgroundColor = "red"
  dotIndex ++ 
}

//temporary solution to switching ding sounds
function setSound2(){
  ding = new Audio("tf2Hitsound.wav")
  document.getElementById("current-sound").innerText = "Current sound: TF2"
  ding.play()
}
function setSound1(){
  ding = new Audio("ding-sound-effect_2.mp3")
  document.getElementById("current-sound").innerText = "Current sound: Ding"
  ding.play()
}

