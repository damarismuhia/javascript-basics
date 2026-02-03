const global = {
    currentPage: window.location.pathname,
    baseUrl: 'https://api.themoviedb.org/3/',
  
}


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