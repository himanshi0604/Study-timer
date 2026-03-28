
const startBtn = document.getElementById("start")
const pauseBtn = document.getElementById("pause")
const resetBtn = document.getElementById("reset")
const timerEl = document.getElementById("timer")

let interval
let timeLeft = 1500

function updateTimer(){
    let minutes = Math.floor(timeLeft/60)
    let seconds = timeLeft%60

    let formattedTime =
    `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`

    timerEl.innerHTML = formattedTime
}

function startTimer(){

    if(interval){
        return
    }

    interval = setInterval(()=>{

        timeLeft--

        updateTimer()

        if(timeLeft===0){

            clearInterval(interval)

            alert("Time's up!")

            timeLeft = 1500

            updateTimer()
        }

    },1000)
}

function stopTimer(){
    clearInterval(interval)
    interval = null
}

function resetTimer(){

    clearInterval(interval)

    interval = null

    timeLeft = 1500

    updateTimer()
}

startBtn.addEventListener("click",startTimer)
pauseBtn.addEventListener("click",stopTimer)
resetBtn.addEventListener("click",resetTimer)

updateTimer()
