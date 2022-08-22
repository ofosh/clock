setInterval(setClock, 1000)

const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')

// DECLARING FUNCTION FOR CLOCK'S FUNCTIONALITY (setClock)

function setClock() {
  const currentDate = new Date ()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

  // RE-DECLARING THE setRotation() VALUES

  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

// DECLARING FUNCTION FOR ROTATION (setRotation)

function setRotation (element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()