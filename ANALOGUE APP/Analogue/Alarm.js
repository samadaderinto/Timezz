const alarmListEl = document.querySelector('[data-alarm-list]');
const alarmBtnEl = document.querySelector('[data-alarm-btn]');
const hourHandTimer = document.querySelector('[data-hour-hand-timer]');


alarmBtnEl.addEventListener('click', setAlarm)

function setAlarm() {
const condition = 1
  const currentDate = new Date();
  const weekDayIndex = currentDate.getDay();
  const weekDay = ["sun","mon","tue","wed","thur","fri","sat"]


  if(condition === 0) {
    const alarmItem = `<span>
    <P>{time}</P>
    <div>
        <span>
            <div class="alarm-list-frequency">${weekDay[weekDayIndex]}</div>
            <div class="alarm-list-detail">Alarm set for 1 day, 13 hrs from now rt4grghrgtgt4jg}</div>
        </span>
        <input type="checkbox" name="" id="">
    </div>
</span>`
  }
    
   alarmListEl.insertAdjacentHTML("beforeend", alarmItem)

}


