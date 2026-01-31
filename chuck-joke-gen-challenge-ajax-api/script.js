//MARK: Add event lister to the btn

const btnJoke = document.getElementById('joke-btn')

function getRandomJoke() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            const response = JSON.parse(this.responseText);
            console.log(response);

            const div = document.querySelector('.joke');
            div.innerHTML = response.value
        }
    };

    xhr.send()
}
btnJoke.addEventListener('click', getRandomJoke)