const global = {
    currentPage: window.location.pathname,
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '3fd2be6f0c70a2a598f084ddfb75487c'
}
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2M4Y2RhNzliYzVjMWRlZWVkZGE5NDMxYjRkY2ZjMiIsIm5iZiI6MTc2OTg4MzcyMC40NzMsInN1YiI6IjY5N2U0ODQ4MTA1MDFhMzg2MWRjOTY3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KQrpe2ga_kaD2DOr577NJmFfWUjO0p7-kkjtoMsxDho';


function formatWithCommas(amount) {
  return `$${new Intl.NumberFormat('en-US').format(amount)}`;
}


//SHow Alert
function showAlert(message, className = 'error'){
  const alertEl = document.createElement('div')
  alertEl.classList.add('alert',className)
  alertEl.appendChild(document.createTextNode(message))
  document.querySelector('.alert').appendChild(alertEl)
  
  setTimeout(() => alertEl.remove(), 3000);
}