


//MARK: 1. Core Fetch Request
async function fetchData(endpoint){
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

//MARK: Fetch Popular Movie Details
async function fetchMovieDetails() {
    const id = window.location.search.replace('?id=', '') //or use split -- window.location.search.split('=')[1]

    const obj = await fetchData(`movie/${id}`)
    console.log('OBJECT: ', obj);

    if(!obj) return;

   
    displayBackgroundImage('movie', obj.backdrop_path)
    
    const imag = document.querySelector('.card-img-top');
    imag.src = obj.poster_path ? 'https://image.tmdb.org/t/p/w500'+obj.poster_path :  '../images/no-image.jpg'

    const movieTit = document.getElementById('movie-title');
    movieTit.textContent = obj.title;

    const movieDescri = document.querySelector('.descri'); //vote_average
    movieDescri.textContent = obj.overview

    const rate = document.querySelector('.rating-txt'); //
    rate.textContent = ` ${obj.vote_average.toFixed(1)} / 10`;

    const date = document.querySelector('.text-muted');
    date.textContent = `Release Date: ${obj.release_date}`;
   
    
    obj.genres.forEach(item => {
        const ul = document.querySelector('.list-group')
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(item.name))
        ul.append(li)
    })

    populateMovieInfo(obj.budget, obj.revenue, obj.runtime, obj.status)

    const div = document.querySelector('.list-companies')
    const companies = obj.production_companies.map(item => item.name).join(', ')
    console.log('companies', companies);
    div.appendChild(document.createTextNode(companies))


    document.getElementById('visit-movie-hm').href = obj.homepage;
}

function populateMovieInfo(budget, revenue, runtime, movieStat){
    const ul = document.querySelector('.budget-ul');
    const details = [
        {label: 'Budget: ', value: formatWithCommas(budget)},
        {label: 'Revenue: ', value: formatWithCommas(revenue)},
        {label: 'Runtime: ', value: runtime + " minutes"},
        {label: 'Status: ', value: movieStat}
    ]

    details.forEach(item => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = "text-secondary";
        span.appendChild(document.createTextNode(item.label));
        li.appendChild(span)
        li.appendChild(document.createTextNode(item.value));
        ul.appendChild(li)
    })

}

function populateShowInfo(noSeasons,noOfEpisodes, lastEpisode, stats){
    const ul = document.querySelector('.show-info-ul');
    const details = [
        {label: 'Number of Sessions: ',value: noSeasons},
        {label: 'Number of Episodes: ',value: noOfEpisodes},
        {label: 'Last Episode to Air: ',value: lastEpisode},
        {label: 'Status: ', value: stats}
    ]


    details.forEach(item => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = "text-secondary";
        span.appendChild(document.createTextNode(item.label));
        li.appendChild(span)
        li.appendChild(document.createTextNode(item.value));
        ul.appendChild(li)
    })

}

 //MARK: Overlay for background image
function displayBackgroundImage(type, path) {
    const overlayDiv = document.createElement('div');
    overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${path})`
    overlayDiv.style.backgroundPosition = 'center'; /**centered horizontally and vertically, center of image is visible incase the image id bigger */
    overlayDiv.style.backgroundSize = 'cover'; /**scale to cover the entire div, 'contain' - image fits may leave empty space, 'auto'-default, image uses its original size */
    overlayDiv.style.backgroundRepeat = 'no-repeat';
    overlayDiv.style.height = '100vh';
    overlayDiv.style.width = '100vw';
    overlayDiv.style.position = 'absolute';
    overlayDiv.style.top = '0';
    overlayDiv.style.left = '0';
    overlayDiv.style.zIndex = '-1'; /**send the image back */
    overlayDiv.style.opacity = '0.1';

    if(type === 'movie'){
        document.querySelector('.movie-details').appendChild(overlayDiv)
    }else {
        document.querySelector('.show-details').appendChild(overlayDiv)
    }

}

//MARK: Fetch TV SHow Details
async function fetchTvShowDetails() {
    const id = window.location.search.replace('?id=', '') //or use split -- window.location.search.split('=')[1]

    const obj = await fetchData(`tv/${id}`)
    console.log('OBJECT: ', obj);

    if(!obj) return;

   
    displayBackgroundImage('shows', obj.backdrop_path)
    
    const imag = document.querySelector('.card-img-top');
    imag.src = obj.poster_path ? 'https://image.tmdb.org/t/p/w500'+obj.poster_path :  '../images/no-image.jpg'

    const movieTit = document.getElementById('show-title');
    movieTit.textContent = obj.name;

    document.querySelector('#tv-descri').textContent = obj.overview;

    const rate = document.querySelector('.rating-txt'); 
    rate.textContent = ` ${obj.vote_average.toFixed(1)} / 10`; //vote_average

    const date = document.querySelector('.text-muted');
    date.textContent = `Aired: ${obj.first_air_date}`;
   
    
    obj.genres.forEach(item => {
        const ul = document.querySelector('.list-group')
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(item.name))
        ul.append(li)
    })

    populateShowInfo(obj.number_of_seasons, obj.number_of_episodes, obj.last_episode_to_air.name, obj.status)

    const div = document.querySelector('.list-companies')
    const companies = obj.production_companies.map(item => item.name).join(', ')
    console.log('companies', companies);
    div.appendChild(document.createTextNode(companies))


    document.getElementById('visit-show-hm').href = obj.homepage;
}


function showSpinner(){
    document.querySelector('.spinner').classList.add('show');
}

function hideSpinner(){
    document.querySelector('.spinner').classList.remove('show');
}









function init(){
    console.log(global.currentPage);
    switch (global.currentPage) {
        case '/movie-details.html':
            console.log('LOCATION: ', );
            fetchMovieDetails()
            break;
        case '/tv-details.html':
            fetchTvShowDetails();
            break;
        default:
            break;
    }
}

document.addEventListener('DOMContentLoaded', init)