const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')

const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday","Monday","Tuesday","Wednesday",
"Thursday","Friday","Saturday"];
const months = ["Jan","Feb","Mar","Apr",
"May","Jun","Jul", "Aug","Sep","Oct","Nov","Dec"];


//Dark Mode
    toggle.addEventListener('click',(e) =>{
        const html = document.querySelector('html')
        if(html.classList.contains('dark')){
            html.classList.remove('dark')
            e.target.innerHTML = 'Dark mode'
        } else{
            html.classList.add('dark')
            e.target.innerHTML = 'Light mode'
        }
    })

// Configuração do relógio
    function setTime(){
        const time = new Date();
        const month = time.getMonth()
        const day = time.getDay()
        const hours = time.getHours()
        const hoursForClock = hours % 12
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()

        hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0,11,0,360)}deg)`
        minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0,59,0,360)}deg)`
        secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0,11,0,360)}deg)`
    }


    // StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }


    setTime()

    setInterval(setTime, 1000)

//