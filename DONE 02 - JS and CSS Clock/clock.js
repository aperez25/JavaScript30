const secondsHand = document.querySelector('.second-hand'),
  minuteHand = document.querySelector('.min-hand'),
  hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date(),
      seconds = now.getSeconds(),
      minutes = now.getMinutes(),
      hours = now.getHours(),
      secondsDegrees = ((seconds / 60) * 360) + 90,
      minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90,
      hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

setInterval(setDate, 1000);

setDate();
