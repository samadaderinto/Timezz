setInterval(clock, 1000);

const HoursStart = document.querySelector('#H-start');
const MinutesStart = document.querySelector('#M-start');
const SecondsStart = document.querySelector('#S-start');
const Hours = document.querySelector('#H');
const Minutes = document.querySelector('#M');
const Seconds = document.querySelector('#S');
const HoursEnd = document.querySelector('#H-end');
const MinutesEnd = document.querySelector('#M-end');
const SecondsEnd = document.querySelector('#S-end');
let type = document.getElementById('type');
let sum = 0;


function clock() {
    const currentDate = new Date()
    const currentHour = currentDate.getHours()
    const currentMinute = currentDate.getMinutes()
    const currentSecond = currentDate.getSeconds()

    const secondRatio = currentSecond / 60;
    const minutesRatio = (currentMinute + secondRatio) / 60;
     
    let newSeconds = parseInt(currentSecond + secondRatio)
    let newMinutes = parseInt(currentMinute + secondRatio);
    let newHour = parseInt(currentHour + minutesRatio);

  


if (newHour < 10) {
    Hours.textContent = `0${newHour}`;
} else {
    Hours.textContent = `${newHour}`;
}

if (newMinutes < 10) {  
    Minutes.textContent = `0${newMinutes}`;
} else {  
    Minutes.textContent = `${newMinutes}`;
}

if (newSeconds < 10) {  
    Seconds.textContent = `0${newSeconds}`;
} else {
    Seconds.textContent = `${newSeconds}`;
}


newHour += 1;
newMinutes += 1;
newSeconds += 1;

if (newHour < 10) {
    HoursEnd.textContent = `0${newHour}`;
} else if (newHour === 24) {
    HoursEnd.textContent = `00`;
} else {
    HoursEnd.textContent = `${newHour}`;
}

if (newMinutes < 10) {  
    MinutesEnd.textContent = `0${newMinutes}`;
} else if (newMinutes === 60) {
    MinutesEnd.textContent = `00`;
} else {  
    MinutesEnd.textContent = `${newMinutes}`;
}

if (newSeconds < 10) {  
    SecondsEnd.textContent = `0${newSeconds}`;
} else if (newSeconds === 60) {
    SecondsEnd.textContent = `00`;
} else {
      SecondsEnd.textContent = `${newSeconds}`;
}


newHour -= 2;
newMinutes -= 2;
newSeconds -= 2;

    if (newHour === -1) {
        HoursStart.textContent = `23`;
    } else if (newHour < 10 && newHour >= 0) {
        HoursStart.textContent = `0${newHour}`;
    }  else {
        HoursStart.textContent = `${newHour}`;
    }
    
    if (newMinutes === -1) {
        MinutesStart.textContent = `59`;
    } else if (newMinutes < 10 && newMinutes >= 0) {  
        MinutesStart.textContent = `0${newMinutes}`;
    }  else {  
        MinutesStart.textContent = `${newMinutes}`;
    }
    
     if (newSeconds === -1) {
        SecondsStart.textContent = `59`;
    } else if (newSeconds < 10 && newSeconds >= 0) {  
        SecondsStart.textContent = `0${newSeconds}`;
    } else {
        SecondsStart.textContent = `${newSeconds}`;
    }
}



