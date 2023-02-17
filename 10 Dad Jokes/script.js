const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

function generateJoke(){

    let config = {
        headers:{
            Accept:'application/json'
        },
    }

    fetch('https://icanhazdadjoke.com/', config)
    .then((res) => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
    })
}