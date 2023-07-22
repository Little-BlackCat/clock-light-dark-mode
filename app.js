const timeEl = document.querySelector(".time")
const dateTime = document.querySelector(".date")
const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const options = { month: "long" };
const btnToggle = document.querySelector(".toggle") 

function setTime () {
  const time = new Date()
  const year = time.getFullYear()
  // const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  
  const formatMonth = new Intl.DateTimeFormat("en-US", options).format(new Date())
  dateTime.innerHTML = `${dayNames[day]} ${date} ${formatMonth} ${year}`

  const hoursIn12 = hours - 12 

  timeEl.innerHTML = `
      ${hoursIn12 < 10 ? `0${hoursIn12}` : `${hoursIn12}`} : 
      ${minutes < 10 ? `0${minutes}` : `${minutes}`} : 
      ${seconds < 10 ? `0${seconds}` : `${seconds}`} ${hours < 12 ? "AM" : "PM"}
  `
}

btnToggle.addEventListener("click", (event) => {
  const html = document.querySelector("html")
  if(html.classList.contains("dark")) {
    html.classList.remove("dark")
    event.target.innerHTML = "Dark Mode"
  } else {
    html.classList.add("dark")
    event.target.innerHTML = "Light Mode"
  }
})

setTime()
setInterval(setTime, 1000)