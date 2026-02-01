const global = {
    currentPage: window.location.pathname,
    baseUrl: 'https://api.themoviedb.org/3/'
}
//MARK: 1. Highlight Active Link
function highlightActiveLink(){
    const links = document.querySelectorAll('.nav-link')

    links.forEach(link => {
       if(link.getAttribute('href') === global.currentPage){
            link.classList.add('active-link');
       }
    })
}


//MARK: 2. Core Fetch Request

async function fetchData(endpoint){
    const TOKEN = 'ADD YOUR TOKEN';
    showSpinner()
   
    try {
        const res = await fetch(global.baseUrl + endpoint, {
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TOKEN}`}
        }) 
       
        if(!res.ok) {
            throw new Error(res.statusText)
        }
        const data = await res.json()
        console.log('CORE FETCH RESPONSE: ', data);
        return data
    } catch (error) {
        console.error('Got erro: ', error);        
        return null;
    } finally {
        hideSpinner();
    }
}

//MARK: Fetch Popular Movie
async function fetchPopularMovies() {
    const {results } = await fetchData('movie/popular')

    if(!results) return;

    results.forEach(movie => {
        const grid = document.getElementById('popular-movies');
        const div = createPopularDOMCard(movie, movie.title, movie.release_date, 'tv')
        grid.appendChild(div);
    })

    console.log('MOVIE: ', results);
}


//MARK: Fetch Popular TV Shows
async function fetchPopularTvShows() {
    const {results } = await fetchData('tv/popular')

    if(!results) return;
    results.forEach(show => {
        const grid = document.getElementById('popular-shows');
        const div = createPopularDOMCard(show, show.name, show.first_air_date, 'tv')
        grid.appendChild(div);

    })
    
}
function createPopularDOMCard(item, title, date, detail_path){
        const div = document.createElement('div');
        div.classList.add('card')

        const a = document.createElement('a');
        a.href = `${detail_path}-details.html?id=${item.id}`;
        const aImage = document.createElement('img');
        aImage.src = item.poster_path ? 'https://image.tmdb.org/t/p/w500'+item.poster_path :  '../images/no-image.jpg'
        aImage.className = 'card-img-top'
        aImage.alt = title;
        a.appendChild(aImage);

        const divBody = document.createElement('div');
        divBody.className = 'card-body';
        const h5 = document.createElement('h5');
        h5.className = 'card-title'
        const h5Text = document.createTextNode(title);
        h5.appendChild(h5Text);

        const paragph = document.createElement('p');
        paragph.className = 'card-descri';
        const small = document.createElement('small');
        small.className = 'text-muted';
        const smallTxt = document.createTextNode(`Aired: ${date}`);
        small.appendChild(smallTxt)
        paragph.appendChild(small)

        divBody.appendChild(h5)
        divBody.append(paragph)

        div.appendChild(a);
        div.appendChild(divBody);

        return div

}


function showSpinner(){
    document.querySelector('.spinner').classList.add('show');
}

function hideSpinner(){
    document.querySelector('.spinner').classList.remove('show');
}









function init(){
    highlightActiveLink()
    console.log(global.currentPage);
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            fetchPopularMovies()
            break;
        case '/shows.html':
            fetchPopularTvShows()
            break;
        case '/movie-details.html':
            break;
        case '/tv-details.html':
            break;
        case '/search.html':
            break;
        default:
            break;
    }
}

document.addEventListener('DOMContentLoaded', init)