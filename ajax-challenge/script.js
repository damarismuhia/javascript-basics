//MARK: Add event lister to the btn

const btnJoke = document.getElementById('joke-btn')

function getRandomJoke() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    const div = document.querySelector('.joke');

    xhr.onreadystatechange = function () {
        if(this.readyState === 4){

            if(this.status === 200){
                const response = JSON.parse(this.responseText);
                console.log(response);
                div.innerHTML = response.value
            }else {
                div.innerHTML = `Something went wrong: ${this.status}`
            }

        }
    };

    xhr.send()
}
btnJoke.addEventListener('click', getRandomJoke)
document.addEventListener('DOMContentLoaded', getRandomJoke)