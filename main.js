
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hrHand = document.querySelector('.hour-hand');

function processTick() {
   const now = new Date();
   const seconds = now.getSeconds();
   const minutes = now.getMinutes();
   const hours = now.getHours();
   const secDegree = ((seconds / 60) * 360) + 90;
   const minDegree = ((minutes / 60) * 360) + 90;
   const hrDegree = ((hours / 12) * 360) + 90;

   secondHand.style.transform = `rotate(${secDegree}deg)`;
   minuteHand.style.transform = `rotate(${minDegree}deg)`;
   hrHand.style.transform = `rotate(${hrDegree}deg)`;
}

setInterval(processTick, 1000);