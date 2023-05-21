const jokeEL = document.getElementById('joke');
const jokebtn = document.getElementById('jokeBtn');

jokebtn.addEventListener('click', generateJoke)

async function generateJoke() {
    const config = {
        headers: {
          Accept: 'application/json',
        },
      }

      const res = await fetch('https://icanhazdadjoke.com', config)

      const data =  await res.json();

      jokeEL.innerHTML = data.joke
}