
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


function initSwiper() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        breakpoints: { //browser width
            500: {
                slidesPerView: 2
            },
            700: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        }
    }
)
}
//MARK: Init Swiper

//MARK: Display Sliders

async function displaySliders() {
    const {results } = await fetchData('movie/now_playing');
    console.log("RESULS", results);

    if(!results) { alert('SOmething is not ok!'); return;}
    results.forEach(item => {
        const swiperWrapper = document.querySelector('.swiper-wrapper');

        const swiperDiv = document.createElement('div');
        swiperDiv.className = 'swiper-slide'

        const hyperlink = document.createElement('a');
        hyperlink.href = `movie-details.html?id=${item.id}`;
        const aImage = document.createElement('img');
        aImage.src = item.poster_path ? 'https://image.tmdb.org/t/p/w500'+item.poster_path :  '../images/no-image.jpg'
        aImage.className = 'card-img-top'
        aImage.alt = item.title;
        hyperlink.appendChild(aImage);

        const h4 = document.createElement('h4');
        h4.className = 'swiper-rating';

        const icon = document.createElement('i')
        icon.classList.add('fa-solid');
        icon.classList.add('fa-star');
        icon.classList.add('text-secondary');

        const span = document.createElement('span');
        span.classList.add('rating-txt');
        span.textContent = `${item.vote_average.toFixed(1)} / 10`
        icon.appendChild(span)
        h4.appendChild(icon)

        swiperDiv.appendChild(hyperlink);
        swiperDiv.appendChild(h4);
        swiperWrapper.appendChild(swiperDiv);

        initSwiper()
    })

    
}

//MARK: Fetch Popular Movie
async function fetchPopularMovies() {
    const {results } = await fetchData('movie/popular')

    if(!results) return;

    // results.forEach(movie => {
    //     const grid = document.getElementById('popular-movies');
    //     const div = createPopularCard(movie, movie.title, movie.release_date, 'tv')
    //     grid.appendChild(div);
    // })



    results.forEach(movie => {
        const grid = document.getElementById('popular-movies');

        const div = document.createElement('div');
        div.classList.add('card')

        const a = document.createElement('a');
        a.href = `movie-details.html?id=${movie.id}`;
        const aImage = document.createElement('img');
        aImage.src = movie.poster_path ? 'https://image.tmdb.org/t/p/w500'+movie.poster_path :  '../images/no-image.jpg'
        aImage.className = 'card-img-top'
        aImage.alt = movie.title;
        a.appendChild(aImage);

        const divBody = document.createElement('div');
        divBody.className = 'card-body';
        const h5 = document.createElement('h5');
        h5.className = 'card-title'
        const h5Text = document.createTextNode(movie.title);
        h5.appendChild(h5Text);

        const paragph = document.createElement('p');
        paragph.className = 'card-descri';
        const small = document.createElement('small');
        small.className = 'text-muted';
        const smallTxt = document.createTextNode(`Release: ${movie.release_date}`);
        small.appendChild(smallTxt)
        paragph.appendChild(small)

        divBody.appendChild(h5)
        divBody.append(paragph)

        div.appendChild(a);
        div.appendChild(divBody);

        grid.appendChild(div)

    })

    console.log('MOVIE: ', results);
}
//MARK: Fetch Popular Movie Details
async function fetchMovieDetails() {
    const id = window.location.search.replace('?id=', '') //or use split -- window.location.search.split('=')[1]

    const obj = await fetchData(`movie/${id}`)
    console.log('OBJECT: ', obj);

    if(!obj) return;
    
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

    obj.production_companies.forEach(item => {
        const div = document.querySelector('.list-companies')
        div.appendChild(document.createTextNode(item.name + ', '))
    })


    document.getElementById('visit-movie-hm').href = obj.homepage;



}

function createDomDetailsElement(){
    const div = document.createElement('div');

    const aImage = document.createElement('img');
    aImage.src = item.poster_path ? 'https://image.tmdb.org/t/p/w500'+item.poster_path :  '../images/no-image.jpg'
    aImage.className = 'card-img-top'
    aImage.alt = title;
    div.appendChild(aImage);

}


//MARK: Fetch Popular TV Shows
async function fetchPopularTvShows() {
    const {results } = await fetchData('tv/popular')

    if(!results) return;
    results.forEach(show => {
        const grid = document.getElementById('popular-shows');
        const div = createPopularCard(show, show.name, show.first_air_date, 'tv')
        grid.appendChild(div);

    })
    
}
function createPopularCard(item, title, date, detail_path){
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
            displaySliders()
            fetchPopularMovies()
            break;
        case '/shows.html':
            fetchPopularTvShows()
            break;
        case '/search.html':
            break;
        default:
            break;
    }
}

document.addEventListener('DOMContentLoaded', init)