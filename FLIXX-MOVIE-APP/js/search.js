const search = {
    term: '',
    type: '',
    page: 1,
    totalPages: 1
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


//MARK: 2. Core SEARCH Fetch Request
async function searchApiData() {
    showSpinner()
    const fullUrl = `${global.baseUrl}search/${search.type}?api_key=${global.apiKey}&query=${search.term}`
    try {
        const res = await fetch(fullUrl, {
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
        showAlert(error, 'error') 
        return null;
    } finally {
        hideSpinner();
    }

    
    
}



async function searchMovieShow(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    search.type = urlParams.get('type');
    search.term = urlParams.get('search-term');
    if(search.term !== '' && search.term !== null){
        const {results, total_pages, page} = await searchApiData();
        if(!results)  return;
        if(results.length === 0){
            showAlert('No Results found');
            return;
        }
        document.querySelector('#search-term').value = '';

        displaySearchReqults(results)
        console.log("SEARCH RESULTS::", results);

    }else {
        showAlert('Please enter a search term', 'error')
    }

   
    
}


function displaySearchReqults(results){
    results.forEach(item => {
        const grid = document.getElementById('search-results');

        const div = document.createElement('div');
        div.classList.add('card')

        const a = document.createElement('a');
        a.href = `${search.type}-details.html?id=${item.id}`;
        const aImage = document.createElement('img');
        aImage.src = item.poster_path ? 'https://image.tmdb.org/t/p/w500'+item.poster_path :  '../images/no-image.jpg'
        aImage.className = 'card-img-top'
        aImage.alt = search.type === 'movie' ? item.title : item.name;
        a.appendChild(aImage);

        const divBody = document.createElement('div');
        divBody.className = 'card-body';
        const h5 = document.createElement('h5');
        h5.className = 'card-title'
        const h5Text = document.createTextNode(search.type === 'movie' ? item.title : item.name);
        h5.appendChild(h5Text);

        const paragph = document.createElement('p');
        paragph.className = 'card-descri';
        const small = document.createElement('small');
        small.className = 'text-muted';
        const smallTxt = document.createTextNode(`Release: ${ search.type === 'movie' ? item.release_date : item.first_air_date}`);
        small.appendChild(smallTxt)
        paragph.appendChild(small)

        divBody.appendChild(h5)
        divBody.append(paragph)

        div.appendChild(a);
        div.appendChild(divBody);

        grid.appendChild(div)

    })
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
        case '/search.html':
            searchMovieShow()
            break;
        default:
            break;
    }
}

document.addEventListener('DOMContentLoaded', init)